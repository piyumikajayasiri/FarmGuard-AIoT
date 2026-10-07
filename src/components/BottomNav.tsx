import { Ionicons } from "@expo/vector-icons";
import { Text, TouchableOpacity, View } from "react-native";
import styles from "../styles/navigation.styles";

interface BottomNavProps {
  activeTab: string;
  onTabPress: (tab: string) => void;
}

const tabs = [
  {
    key: "home",
    label: "Home",
    icon: "home-outline" as const,
    activeIcon: "home" as const,
  },
  {
    key: "monitor",
    label: "Monitor",
    icon: "analytics-outline" as const,
    activeIcon: "analytics" as const,
  },
  {
    key: "alerts",
    label: "Alerts",
    icon: "warning-outline" as const,
    activeIcon: "warning" as const,
  },
  {
    key: "events",
    label: "Events",
    icon: "clipboard-outline" as const,
    activeIcon: "clipboard" as const,
  },
  {
    key: "more",
    label: "More",
    icon: "menu-outline" as const,
    activeIcon: "menu" as const,
  },
];

export default function BottomNav({ activeTab, onTabPress }: BottomNavProps) {
  return (
    <View style={styles.bottomNav}>
      {tabs.map((tab) => {
        const active = activeTab === tab.key;

        return (
          <TouchableOpacity
            key={tab.key}
            style={styles.navItem}
            onPress={() => onTabPress(tab.key)}
          >
            <Ionicons
              name={active ? tab.activeIcon : tab.icon}
              size={22}
              color={active ? "#087443" : "#64748B"}
            />

            <Text style={[styles.navLabel, active && styles.navLabelActive]}>
              {tab.label}
            </Text>

            {active && <View style={styles.activeIndicator} />}
          </TouchableOpacity>
        );
      })}
    </View>
  );
}
