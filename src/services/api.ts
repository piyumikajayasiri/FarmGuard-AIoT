import Constants from "expo-constants";

const debuggerHost = Constants.expoConfig?.hostUri?.split(":")[0];

export const API_BASE_URL = (
  process.env.EXPO_PUBLIC_API_BASE_URL ||
  `http://${debuggerHost || "localhost"}:8000/api/v1`
).replace(/\/$/, "");

export async function apiRequest<T>(
  endpoint: string,
  options: RequestInit = {},
): Promise<T> {
  let response: Response;
  try {
    response = await fetch(`${API_BASE_URL}${endpoint}`, {
    ...options,
    headers: {
      "Content-Type": "application/json",
      ...(options.headers || {}),
    },
    });
  } catch {
    throw new Error(
      `Cannot reach the server at ${API_BASE_URL}. Check your Wi-Fi connection and that the backend is running.`,
    );
  }

  const data = await response.json().catch(() => null);

  if (!response.ok) {
    throw new Error(
      data?.detail ?? `Request failed with status ${response.status}`,
    );
  }

  return data as T;
}
