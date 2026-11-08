import { Ionicons } from "@expo/vector-icons";
import { router, type Href } from "expo-router";
import { useState } from "react";
import { Modal, Pressable, Text, TouchableOpacity, View } from "react-native";
import styles from "../styles/navigation.styles";

interface BottomNavProps {
  activeTab: string;
  onTabPress: (tab: string) => void;
}

const tabs = [
  {
    key: "home",
    label: "Home",
    icon: "home-outline",
    activeIcon: "home",
    color: "#16A34A",
  },
  {
    key: "monitor",
    label: "Monitor",
    icon: "analytics-outline",
    activeIcon: "analytics",
    color: "#2563EB",
    route: "/monitor",
  },
  {
    key: "alerts",
    label: "Alerts",
    icon: "warning-outline",
    activeIcon: "warning",
    color: "#EA580C",
  },
  {
    key: "events",
    label: "Events",
    icon: "calendar-outline",
    activeIcon: "calendar",
    color: "#9333EA",
  },
  {
    key: "more",
    label: "More",
    icon: "grid-outline",
    activeIcon: "grid",
    color: "#64748B",
  },
] as const;

const moreItems = [
  {
    key: "profile",
    label: "Profile",
    subtitle: "Your account information",
    icon: "person-circle-outline",
    color: "#2563EB",
    route: "/profile",
  },
  {
    key: "reports",
    label: "Reports",
    subtitle: "Farm data and summaries",
    icon: "document-text-outline",
    color: "#9333EA",
    route: "/reports",
  },
  {
    key: "settings",
    label: "Settings",
    subtitle: "App preferences",
    icon: "settings-outline",
    color: "#64748B",
    route: "/settings",
  },
] as const;

export default function BottomNav({ activeTab, onTabPress }: BottomNavProps) {
  const [moreVisible, setMoreVisible] = useState(false);

  function handleTabPress(tab: string) {
    if (tab === "more") {
      setMoreVisible(true);
      return;
    }

    const selectedTab = tabs.find((item) => item.key === tab);

    onTabPress(tab);

    if (selectedTab && "route" in selectedTab && selectedTab.route) {
      router.push(selectedTab.route as Href);
    }
  }

  function openMoreItem(route: string, key: string) {
    setMoreVisible(false);
    onTabPress(key);
    router.push(route as Href);
  }

  return (
    <>
      <View style={styles.bottomNav}>
        {tabs.map((tab) => {
          const active = activeTab === tab.key;

          return (
            <TouchableOpacity
              key={tab.key}
              style={styles.navItem}
              onPress={() => handleTabPress(tab.key)}
              accessibilityRole="button"
              accessibilityLabel={tab.label}
            >
              <View
                style={[
                  styles.navIconContainer,
                  active && {
                    backgroundColor: `${tab.color}18`,
                  },
                ]}
              >
                <Ionicons
                  name={active ? tab.activeIcon : tab.icon}
                  size={22}
                  color={tab.color}
                />
              </View>

              <Text
                style={[
                  styles.navLabel,
                  active && {
                    color: tab.color,
                    fontWeight: "700",
                  },
                ]}
              >
                {tab.label}
              </Text>

              {active && (
                <View
                  style={[
                    styles.activeIndicator,
                    { backgroundColor: tab.color },
                  ]}
                />
              )}
            </TouchableOpacity>
          );
        })}
      </View>

      <Modal
        visible={moreVisible}
        transparent
        animationType="slide"
        onRequestClose={() => setMoreVisible(false)}
      >
        <Pressable
          style={styles.moreOverlay}
          onPress={() => setMoreVisible(false)}
        >
          <Pressable
            style={styles.moreSheet}
            onPress={(event) => event.stopPropagation()}
          >
            <View style={styles.sheetHandle} />

            <View style={styles.moreHeader}>
              <View>
                <Text style={styles.moreTitle}>More</Text>
                <Text style={styles.moreSubtitle}>
                  Manage your FarmGuard app
                </Text>
              </View>

              <TouchableOpacity
                onPress={() => setMoreVisible(false)}
                style={styles.closeButton}
              >
                <Ionicons name="close" size={22} color="#334155" />
              </TouchableOpacity>
            </View>

            {moreItems.map((item) => (
              <TouchableOpacity
                key={item.key}
                style={styles.moreItem}
                onPress={() => openMoreItem(item.route, item.key)}
              >
                <View
                  style={[
                    styles.moreItemIcon,
                    { backgroundColor: `${item.color}18` },
                  ]}
                >
                  <Ionicons name={item.icon} size={24} color={item.color} />
                </View>

                <View style={styles.moreItemContent}>
                  <Text style={styles.moreItemTitle}>{item.label}</Text>
                  <Text style={styles.moreItemSubtitle}>{item.subtitle}</Text>
                </View>

                <Ionicons name="chevron-forward" size={20} color="#94A3B8" />
              </TouchableOpacity>
            ))}
          </Pressable>
        </Pressable>
      </Modal>
    </>
  );
}
