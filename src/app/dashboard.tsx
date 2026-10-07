import { router } from "expo-router";
import { useEffect, useState } from "react";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";

import { SafeAreaView } from "react-native-safe-area-context";
import AppHeader from "../components/AppHeader";
import BottomNav from "../components/BottomNav";
import { User } from "../services/auth.service";
import { getStoredUser } from "../services/auth.storage";
import styles from "../styles/dashboard.styles";

export default function DashboardScreen() {
  const [user, setUser] = useState<User | null>(null);
  const [activeTab, setActiveTab] = useState("home");

  useEffect(() => {
    loadUser();
  }, []);

  async function loadUser() {
    const storedUser = await getStoredUser();

    if (!storedUser) {
      router.replace("/login");
      return;
    }

    setUser(storedUser);
  }

  if (!user) {
    return null;
  }

  function handleTabPress(tab: string) {
    setActiveTab(tab);

    if (tab === "home") {
      return;
    }

    // We'll connect these screens next.
    console.log(`Selected ${tab}`);
  }

  return (
    <SafeAreaView style={styles.container} edges={["top", "bottom"]}>
      <AppHeader user={user} onProfilePress={() => router.push("/profile")} />

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.content}
      >
        <View style={styles.flockCard}>
          <View>
            <Text style={styles.flockTitle}>Flock A • Day 32</Text>
            <Text style={styles.flockSubtitle}>
              2,340 broilers • House 01 • Kurunegala
            </Text>
          </View>

          <View style={styles.flockIcon}>
            <Text style={styles.flockEmoji}>🐥</Text>
          </View>
        </View>

        <TouchableOpacity style={styles.warningCard}>
          <Text style={styles.warningIcon}>⚠️</Text>

          <View style={styles.warningContent}>
            <Text style={styles.warningTitle}>Water 18% below expected</Text>
            <Text style={styles.warningSubtitle}>House 01 • 25 min ago</Text>
          </View>

          <View style={styles.viewButton}>
            <Text style={styles.viewButtonText}>View</Text>
          </View>
        </TouchableOpacity>

        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Live Conditions</Text>

          <Text style={styles.liveText}>Live →</Text>
        </View>

        <View style={styles.metricsGrid}>
          <MetricCard
            title="Temperature"
            value="31.4°C"
            subtitle="Range 22–33°C"
            status="Normal"
          />

          <MetricCard
            title="Humidity"
            value="68%"
            subtitle="Range 50–75%"
            status="Normal"
          />

          <MetricCard
            title="Ammonia"
            value="14 ppm"
            subtitle="Limit <25 ppm"
            status="Normal"
          />

          <MetricCard
            title="Water flow"
            value="98 L/d"
            subtitle="Exp. 120 L/d"
            status="Warning"
          />

          <MetricCard
            title="Feed today"
            value="142 kg"
            subtitle="Exp. 148 kg"
            status="Normal"
          />

          <MetricCard
            title="Sensors"
            value="5 / 5"
            subtitle="ESP32-S3 online"
            status="Normal"
          />
        </View>

        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Active Alerts</Text>

          <Text style={styles.liveText}>View All →</Text>
        </View>

        <AlertCard
          type="Warning"
          title="Water consumption is 18% below expected"
          subtitle="House 01 • Flock A • 25 min ago • Hybrid AI 82%"
        />

        <AlertCard
          type="Critical"
          title="Ammonia 28 ppm exceeds safe limit"
          subtitle="House 02 • Flock B • 1 hr ago • Threshold"
        />
      </ScrollView>

      <BottomNav activeTab={activeTab} onTabPress={handleTabPress} />
    </SafeAreaView>
  );
}

function MetricCard({
  title,
  value,
  subtitle,
  status,
}: {
  title: string;
  value: string;
  subtitle: string;
  status: "Normal" | "Warning";
}) {
  return (
    <View style={styles.metricCard}>
      <View style={styles.metricHeader}>
        <Text style={styles.metricTitle}>{title}</Text>

        <View
          style={[
            styles.statusBadge,
            status === "Warning" && styles.warningBadge,
          ]}
        >
          <Text
            style={[
              styles.statusText,
              status === "Warning" && styles.warningStatusText,
            ]}
          >
            ● {status}
          </Text>
        </View>
      </View>

      <Text style={styles.metricValue}>{value}</Text>

      <Text style={styles.metricSubtitle}>{subtitle}</Text>

      <Text style={styles.updatedText}>Updated 2 min ago</Text>
    </View>
  );
}

function AlertCard({
  type,
  title,
  subtitle,
}: {
  type: "Warning" | "Critical";
  title: string;
  subtitle: string;
}) {
  return (
    <TouchableOpacity
      style={[
        styles.alertCard,
        type === "Critical" ? styles.criticalAlert : styles.warningAlert,
      ]}
    >
      <View style={styles.alertContent}>
        <View style={styles.alertMeta}>
          <Text style={styles.alertType}>● {type}</Text>
          <Text style={styles.alertActive}> • Active</Text>
        </View>

        <Text style={styles.alertTitle}>{title}</Text>

        <Text style={styles.alertSubtitle}>{subtitle}</Text>
      </View>

      <Text style={styles.alertArrow}>›</Text>
    </TouchableOpacity>
  );
}
