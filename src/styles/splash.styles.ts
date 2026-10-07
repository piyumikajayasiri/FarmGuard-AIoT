import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#063B20",
  },

  content: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 24,
  },

  // Logo
  logoContainer: {
    alignItems: "center",
    marginBottom: 28,
  },

  logoBox: {
    width: 100,
    height: 100,
    borderRadius: 26,
    backgroundColor: "#FFFFFF",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 24,
  },

  logoIcon: {
    fontSize: 48,
  },

  title: {
    color: "#FFFFFF",
    fontSize: 32,
    fontWeight: "800",
    letterSpacing: -0.5,
  },

  subtitle: {
    marginTop: 10,
    color: "#4ADE80",
    fontSize: 14,
    fontWeight: "500",
  },

  // Technology badges
  badgesContainer: {
    flexDirection: "row",
    gap: 10,
    marginBottom: 270,
  },

  badge: {
    borderWidth: 1,
    borderColor: "#116238",
    backgroundColor: "#07351F",
    borderRadius: 20,
    paddingHorizontal: 15,
    paddingVertical: 8,
  },

  badgeText: {
    color: "#FFFFFF",
    fontSize: 12,
    fontWeight: "600",
  },

  // Connection card
  connectionCard: {
    position: "absolute",
    left: 24,
    right: 24,
    bottom: 48,
    backgroundColor: "#FFFFFF",
    borderRadius: 28,
    paddingHorizontal: 24,
    paddingVertical: 25,
  },

  connectionHeader: {
    flexDirection: "row",
    alignItems: "center",
  },

  houseIconContainer: {
    width: 48,
    height: 48,
    borderRadius: 14,
    backgroundColor: "#ECFDF5",
    alignItems: "center",
    justifyContent: "center",
    marginRight: 14,
  },

  houseIcon: {
    fontSize: 23,
  },

  connectionText: {
    flex: 1,
  },

  connectionTitle: {
    color: "#111827",
    fontSize: 14,
    fontWeight: "700",
  },

  connectionSubtitle: {
    marginTop: 4,
    color: "#64748B",
    fontSize: 12,
  },

  // Progress
  progressBackground: {
    height: 8,
    backgroundColor: "#E8EEF3",
    borderRadius: 10,
    overflow: "hidden",
    marginTop: 22,
  },

  progressFill: {
    width: "68%",
    height: "100%",
    backgroundColor: "#15803D",
    borderRadius: 10,
  },

  prototypeText: {
    textAlign: "center",
    marginTop: 14,
    color: "#94A3B8",
    fontSize: 10,
  },

  bottomIndicator: {
    position: "absolute",
    bottom: 14,
    alignSelf: "center",
    color: "#9CA3AF",
    fontSize: 18,
    letterSpacing: -3,
  },
});
