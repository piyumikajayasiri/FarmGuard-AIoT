import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import { useEffect, useState } from "react";
import { Alert, ScrollView, Text, TouchableOpacity, View } from "react-native";

import { User } from "../services/auth.service";
import { clearAuthSession, getStoredUser } from "../services/auth.storage";
import styles from "../styles/profile.styles";

export default function ProfileScreen() {
  const [user, setUser] = useState<User | null>(null);

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

  async function handleLogout() {
    Alert.alert("Logout", "Are you sure you want to log out?", [
      {
        text: "Cancel",
        style: "cancel",
      },
      {
        text: "Logout",
        style: "destructive",
        onPress: async () => {
          await clearAuthSession();
          router.replace("/login");
        },
      },
    ]);
  }

  if (!user) {
    return null;
  }

  const initials = user.full_name
    .split(" ")
    .map((name) => name.charAt(0))
    .join("")
    .slice(0, 2)
    .toUpperCase();

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => router.back()}
        >
          <Ionicons name="arrow-back" size={22} color="#172033" />
        </TouchableOpacity>

        <Text style={styles.headerTitle}>Profile</Text>

        <View style={styles.headerSpacer} />
      </View>

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.content}
      >
        <View style={styles.profileCard}>
          <View style={styles.largeAvatar}>
            <Text style={styles.avatarText}>{initials}</Text>
          </View>

          <Text style={styles.name}>{user.full_name}</Text>

          <Text style={styles.email}>{user.email}</Text>

          <View style={styles.roleBadge}>
            <Text style={styles.roleText}>{user.role}</Text>
          </View>
        </View>

        <Text style={styles.sectionTitle}>Account</Text>

        <View style={styles.menuCard}>
          <ProfileRow
            icon="person-outline"
            label="Full Name"
            value={user.full_name}
          />

          <ProfileRow icon="mail-outline" label="Email" value={user.email} />

          <ProfileRow
            icon="shield-checkmark-outline"
            label="Role"
            value={user.role}
          />
        </View>

        <Text style={styles.sectionTitle}>Farm</Text>

        <View style={styles.menuCard}>
          <ProfileRow
            icon="business-outline"
            label="Farm"
            value="Green Valley Poultry"
          />

          <ProfileRow icon="home-outline" label="House" value="House 01" />

          <ProfileRow
            icon="egg-outline"
            label="Active Flock"
            value="Flock A • Day 32"
          />
        </View>

        <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
          <Ionicons name="log-out-outline" size={21} color="#DC2626" />

          <Text style={styles.logoutText}>Logout</Text>
        </TouchableOpacity>

        <Text style={styles.version}>FarmGuard AIoT • Research Prototype</Text>
      </ScrollView>
    </View>
  );
}

function ProfileRow({
  icon,
  label,
  value,
}: {
  icon: keyof typeof Ionicons.glyphMap;
  label: string;
  value: string;
}) {
  return (
    <View style={styles.row}>
      <View style={styles.rowIcon}>
        <Ionicons name={icon} size={19} color="#087443" />
      </View>

      <View style={styles.rowContent}>
        <Text style={styles.rowLabel}>{label}</Text>
        <Text style={styles.rowValue}>{value}</Text>
      </View>
    </View>
  );
}
