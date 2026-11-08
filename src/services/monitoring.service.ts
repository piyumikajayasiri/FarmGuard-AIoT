import { API_BASE_URL } from "./api";
import { getAccessToken } from "./auth.storage";

export type MonitoringHouse = {
  id: string;
  name: string;
};

export type MonitoringReading = {
  sensor_id: string;
  sensor_code: string;
  sensor_type: string;
  value: number;
  unit: string;
  status: string;
  recorded_at: string;
  source: "MOCK" | "ESP32" | "MANUAL";
  quality_status: string;
  device_code: string;
  device_online: boolean;
  device_last_seen_at: string | null;
};

export type LiveMonitoringResponse = {
  house_id: string;
  house_name: string;
  device_name: string;
  readings: MonitoringReading[];
};

export type HistoryReading = {
  sensor_type: string;
  value: number;
  unit: string;
  recorded_at: string;
  source: string;
};

export type HistoryResponse = {
  house_id: string;
  house_name: string;
  period: string;
  start_at: string;
  end_at: string;
  summary: Record<
    string,
    {
      average: number;
      minimum: number;
      maximum: number;
      count: number;
      unit: string;
    }
  >;
  readings: HistoryReading[];
};

async function authenticatedGet<T>(endpoint: string): Promise<T> {
  const token = await getAccessToken();

  if (!token) {
    throw new Error("Your session has expired. Please log in again.");
  }

  let response: Response;

  try {
    response = await fetch(`${API_BASE_URL}${endpoint}`, {
      method: "GET",
      headers: {
        Accept: "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
  } catch {
    throw new Error(
      `Cannot reach the backend at ${API_BASE_URL}. Check that FastAPI is running and your phone can reach your computer.`,
    );
  }

  const data = await response.json().catch(() => null);

  if (response.status === 401) {
    throw new Error("Session expired. Please log in again.");
  }

  if (response.status === 403) {
    throw new Error("You are not authorised to access this resource.");
  }

  if (!response.ok) {
    throw new Error(
      data?.detail ?? `Request failed with HTTP ${response.status}.`,
    );
  }

  return data as T;
}

export function getMonitoringHouses(): Promise<{
  houses: MonitoringHouse[];
}> {
  return authenticatedGet<{ houses: MonitoringHouse[] }>("/monitoring/houses");
}

export function getLiveMonitoring(
  houseId: string,
): Promise<LiveMonitoringResponse> {
  return authenticatedGet<LiveMonitoringResponse>(
    `/monitoring/houses/${encodeURIComponent(houseId)}/live`,
  );
}

export function getMonitoringHistory(
  houseId: string,
  period: "today" | "7d" | "30d" | "custom" = "7d",
  startDate?: string,
  endDate?: string,
): Promise<HistoryResponse> {
  return authenticatedGet<HistoryResponse>(
    `/monitoring/houses/${encodeURIComponent(houseId)}/history?period=${period}${period === "custom" ? `&start_date=${encodeURIComponent(startDate || "")}&end_date=${encodeURIComponent(endDate || "")}` : ""}`,
  );
}
