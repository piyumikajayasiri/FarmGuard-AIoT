import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import styles from "../styles/secondary-page.styles";

type Props = {
  title: string;
  subtitle: string;
  icon: keyof typeof Ionicons.glyphMap;
  description: string;
};

export default function SecondaryPage({
  title,
  subtitle,
  icon,
  description,
}: Props) {
  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <TouchableOpacity style={styles.backButton} onPress={() => router.back()}>
        <Ionicons name="arrow-back" size={21} color="#176B4D" />
        <Text style={styles.backText}>Back</Text>
      </TouchableOpacity>

      <View style={styles.iconBox}>
        <Ionicons name={icon} size={32} color="#176B4D" />
      </View>

      <Text style={styles.eyebrow}>FARMGUARD AIoT</Text>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.subtitle}>{subtitle}</Text>

      <View style={styles.card}>
        <Text style={styles.cardTitle}>Coming together</Text>
        <Text style={styles.description}>{description}</Text>
      </View>
    </ScrollView>
  );
}
