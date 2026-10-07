import { Text, TouchableOpacity, View } from "react-native";
import { User } from "../services/auth.service";
import styles from "../styles/navigation.styles";

interface AppHeaderProps {
  user: User;
  onProfilePress: () => void;
}

export default function AppHeader({ user, onProfilePress }: AppHeaderProps) {
  const firstLetter = user.full_name.charAt(0).toUpperCase();

  return (
    <View style={styles.header}>
      <View style={styles.headerLeft}>
        <View style={styles.avatar}>
          <Text style={styles.avatarText}>{firstLetter}</Text>
        </View>

        <View>
          <Text style={styles.farmName}>Green Valley Poultry</Text>
          <Text style={styles.farmSubtitle}>House 01 • Flock A • Day 32</Text>
        </View>
      </View>

      <View style={styles.headerActions}>
        <TouchableOpacity style={styles.headerButton}>
          <Text style={{ fontSize: 22, color: "#111827" }}>🔔</Text>

          <View style={styles.notificationBadge}>
            <Text style={styles.notificationText}>3</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={styles.headerButton} onPress={onProfilePress}>
          <Text style={{ fontSize: 21, color: "#111827" }}>👤</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
