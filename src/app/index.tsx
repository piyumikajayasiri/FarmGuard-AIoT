import { Redirect } from "expo-router";
import { useEffect, useState } from "react";
import { SafeAreaView, Text, View } from "react-native";

import { styles } from "../styles/splash.styles";

export default function SplashScreen() {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setReady(true);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  if (ready) {
    return <Redirect href="/login" />;
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <View style={styles.logoContainer}>
          <View style={styles.logoBox}>
            <Text style={styles.logoIcon}>🐔</Text>
          </View>

          <Text style={styles.title}>FarmGuard AIoT</Text>

          <Text style={styles.subtitle}>
            Smart Poultry Monitoring • Sri Lanka
          </Text>
        </View>

        <View style={styles.badgesContainer}>
          <View style={styles.badge}>
            <Text style={styles.badgeText}>ESP32-S3</Text>
          </View>

          <View style={styles.badge}>
            <Text style={styles.badgeText}>FastAPI</Text>
          </View>

          <View style={styles.badge}>
            <Text style={styles.badgeText}>AI Anomaly</Text>
          </View>
        </View>

        <View style={styles.connectionCard}>
          <View style={styles.connectionHeader}>
            <View style={styles.houseIconContainer}>
              <Text style={styles.houseIcon}>🏠</Text>
            </View>

            <View style={styles.connectionText}>
              <Text style={styles.connectionTitle}>
                Connecting to House 01...
              </Text>

              <Text style={styles.connectionSubtitle}>
                Syncing 5 sensors • 2,340 birds
              </Text>
            </View>
          </View>

          <View style={styles.progressBackground}>
            <View style={styles.progressFill} />
          </View>

          <Text style={styles.prototypeText}>
            Research prototype • Univ. of Moratuwa
          </Text>
        </View>
      </View>

      <Text style={styles.bottomIndicator}>━━━━━</Text>
    </SafeAreaView>
  );
}
