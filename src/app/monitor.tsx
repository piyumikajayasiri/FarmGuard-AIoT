import { Ionicons } from "@expo/vector-icons";
import { useCallback, useEffect, useState } from "react";
import {
  ActivityIndicator,
  RefreshControl,
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

import {
  getLiveMonitoring,
  getMonitoringHouses,
  type LiveMonitoringResponse,
  type MonitoringHouse,
  type MonitoringReading,
} from "../services/monitoring.service";

import styles from "../styles/monitor.styles";
import HistoryPanel from "../components/HistoryPanel";
import BottomNav from "../components/BottomNav";
import { router } from "expo-router";

const SENSOR_INFO: Record<
  string,
  { label: string; icon: keyof typeof Ionicons.glyphMap }
> = {
  TEMPERATURE: { label: "Temperature", icon: "thermometer-outline" },
  HUMIDITY: { label: "Humidity", icon: "water-outline" },
  AMMONIA: { label: "Ammonia", icon: "cloud-outline" },
  FEED_WEIGHT: { label: "Feed Weight", icon: "leaf-outline" },
  WATER_FLOW: { label: "Water Flow", icon: "water" },
};

function SensorCard({ reading }: { reading: MonitoringReading }) {
  const info = SENSOR_INFO[reading.sensor_type] ?? {
    label: reading.sensor_type.replace(/_/g, " "),
    icon: "analytics-outline" as const,
  };

  const warning = reading.status !== "Normal";

  return (
    <View style={styles.sensorCard}>
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <View style={styles.sensorIcon}>
          <Ionicons name={info.icon} size={23} color="#176B4D" />
        </View>

        <View style={styles.sensorTitleContainer}>
          <Text style={styles.sensorTitle}>{info.label}</Text>
          <Text style={styles.sensorCode}>{reading.sensor_code}</Text>
        </View>

        <View
          style={[
            styles.statusBadge,
            warning ? styles.warningBadge : styles.normalBadge,
          ]}
        >
          <Text
            style={[
              styles.statusText,
              warning ? styles.warningText : styles.normalText,
            ]}
          >
            ● {reading.status}
          </Text>
        </View>
      </View>

      <View style={styles.valueRow}>
        <Text style={styles.sensorValue}>
          {Number(reading.value.toFixed(2)).toString()}
        </Text>
        <Text style={styles.sensorUnit}>{reading.unit}</Text>
      </View>

      <View style={styles.progressTrack}>
        <View style={[styles.progressFill, {
          width: `${Math.max(0, Math.min(100, reading.value / ({ TEMPERATURE: 50, HUMIDITY: 100, AMMONIA: 40, FEED_WEIGHT: 50, WATER_FLOW: 1 }[reading.sensor_type] || 100) * 100))}%`,
          backgroundColor: warning ? "#D7770B" : "#21763F",
        }]} />
      </View>
      <Text style={styles.updatedText}>
        Recorded: {new Date(reading.recorded_at).toLocaleString()}
      </Text>

      <Text style={styles.updatedText}>
        Source: {reading.source}
        {"  •  "}
        Device: {reading.device_online ? "Online" : "Offline"}
      </Text>
    </View>
  );
}

export default function MonitorScreen() {
  const [tab, setTab] = useState("live");
  const [houses, setHouses] = useState<MonitoringHouse[]>([]);
  const [selectedHouseId, setSelectedHouseId] = useState<string | null>(null);
  const [monitoring, setMonitoring] = useState<LiveMonitoringResponse | null>(
    null,
  );

  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const loadData = useCallback(async () => {
    try {
      setError(null);

      // Get house IDs and names from the backend/database.
      const houseResponse = await getMonitoringHouses();
      const availableHouses = houseResponse.houses ?? [];

      setHouses(availableHouses);

      if (availableHouses.length === 0) {
        setSelectedHouseId(null);
        setMonitoring(null);
        return;
      }

      // Keep the current selection if it still exists.
      const currentHouse = availableHouses.find(
        (house) => house.id === selectedHouseId,
      );

      const houseToLoad = currentHouse ?? availableHouses[0];

      setSelectedHouseId(houseToLoad.id);

      // Get the latest readings for the selected house.
      const liveData = await getLiveMonitoring(houseToLoad.id);
      setMonitoring(liveData);
    } catch (err) {
      setError(
        err instanceof Error ? err.message : "Unable to load monitoring data.",
      );
    } finally {
      setLoading(false);
      setRefreshing(false);
    }
  }, [selectedHouseId]);

  useEffect(() => {
    loadData();
  }, [loadData]);

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    loadData();
  }, [loadData]);

  const selectHouse = useCallback(
    async (house: MonitoringHouse) => {
      if (house.id === selectedHouseId) return;

      setSelectedHouseId(house.id);
      setMonitoring(null);
      setLoading(true);
      setError(null);

      try {
        const result = await getLiveMonitoring(house.id);
        setMonitoring(result);
      } catch (err) {
        setError(
          err instanceof Error
            ? err.message
            : "Unable to load this house's readings.",
        );
      } finally {
        setLoading(false);
      }
    },
    [selectedHouseId],
  );

  const readings = monitoring?.readings ?? [];
  const warningCount = readings.filter(
    (reading) => reading.status !== "Normal",
  ).length;

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        contentContainerStyle={styles.content}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      >
        <Text style={styles.heading}>Monitoring</Text>
        <Text style={styles.subtitle}>
          {monitoring?.house_name || "Poultry house"} • Sensor monitoring
        </Text>

        <View style={styles.tabs}>
          {["live", "history"].map(item => <TouchableOpacity key={item} accessibilityRole="tab" accessibilityState={{ selected: tab === item }} onPress={() => setTab(item)} style={[styles.tab, tab === item && styles.selectedTab]}><Text style={styles.sensorTitle}>{item === "live" ? "Live" : "Historical Data"}</Text></TouchableOpacity>)}
        </View>

        {houses.length > 0 && (
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            style={{ marginBottom: 20 }}
          >
            {houses.map((house) => {
              const selected = house.id === selectedHouseId;

              return (
                <TouchableOpacity
                  key={house.id}
                  onPress={() => selectHouse(house)}
                  style={{
                    paddingHorizontal: 18,
                    paddingVertical: 12,
                    borderRadius: 12,
                    marginRight: 10,
                    backgroundColor: selected ? "#176B4D" : "#FFFFFF",
                    borderWidth: 1,
                    borderColor: selected ? "#176B4D" : "#E6ECE8",
                  }}
                >
                  <Text
                    style={{
                      color: selected ? "#FFFFFF" : "#263A30",
                      fontWeight: "700",
                    }}
                  >
                    {house.name}
                  </Text>
                </TouchableOpacity>
              );
            })}
          </ScrollView>
        )}

        {tab === "history" ? <HistoryPanel houseId={selectedHouseId} refreshing={refreshing} /> : <>
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Sensor Readings</Text>
          <Text style={styles.readingCount}>{readings.length} sensors</Text>
        </View>

        {loading ? (
          <View style={styles.messageBox}>
            <ActivityIndicator size="large" color="#176B4D" />
            <Text style={styles.messageText}>
              Loading houses and sensor readings...
            </Text>
          </View>
        ) : error ? (
          <View style={styles.errorBox}>
            <Ionicons name="alert-circle-outline" size={28} color="#B42318" />
            <Text style={styles.errorTitle}>
              Unable to load monitoring data
            </Text>
            <Text style={styles.errorText}>{error}</Text>
            <TouchableOpacity
              style={{
                alignSelf: "flex-start",
                backgroundColor: "#176B4D",
                borderRadius: 8,
                marginTop: 12,
                paddingHorizontal: 16,
                paddingVertical: 10,
              }}
              onPress={onRefresh}
            >
              <Text style={{ color: "#FFFFFF", fontWeight: "700" }}>
                Try again
              </Text>
            </TouchableOpacity>
          </View>
        ) : houses.length === 0 ? (
          <View style={styles.messageBox}>
            <Text style={styles.messageText}>
              No poultry houses were returned by the backend.
            </Text>
          </View>
        ) : readings.length === 0 ? (
          <View style={styles.messageBox}>
            <Text style={styles.messageText}>
              No valid sensor readings were found for this house.
            </Text>
          </View>
        ) : (
          <>
            <View style={styles.summaryCard}>
              <Text style={styles.summaryLabel}>Monitoring Status</Text>
              <Text style={styles.summaryValue}>
                {warningCount === 0
                  ? "No threshold warnings"
                  : `${warningCount} reading(s) need attention`}
              </Text>
            </View>

            {readings.map((reading) => (
              <SensorCard key={reading.sensor_id} reading={reading} />
            ))}
          </>
        )}

        <Text style={styles.footerText}>
          Readings come from the backend. Pull down to refresh.
        </Text>
        </>}
      </ScrollView>
      <BottomNav activeTab="monitor" onTabPress={tab => {
        if (tab === "home") router.replace("/dashboard");
        if (tab === "alerts") router.push("/alerts");
        if (tab === "events") router.push("/events");
      }} />
    </SafeAreaView>
  );
}
