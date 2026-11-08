import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  tabs: { flexDirection: "row", backgroundColor: "#E4E9DD", padding: 4, borderRadius: 16, marginBottom: 20 },
  tab: { flex: 1, paddingVertical: 12, alignItems: "center", borderRadius: 12 },
  selectedTab: { backgroundColor: "white" },
  container: {
    flex: 1,
    backgroundColor: "#F1F4EB",
  },
  content: {
    padding: 20,
    paddingBottom: 36,
  },
  eyebrow: {
    color: "#16845B",
    fontSize: 12,
    fontWeight: "800",
    letterSpacing: 1.5,
    marginTop: 12,
  },
  heading: {
    fontSize: 28,
    fontWeight: "800",
    color: "#172B22",
    marginTop: 6,
  },
  subtitle: {
    fontSize: 14,
    lineHeight: 21,
    color: "#718078",
    marginTop: 8,
    marginBottom: 22,
  },
  houseCard: {
    backgroundColor: "#176B4D",
    borderRadius: 18,
    padding: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 26,
  },
  houseLabel: {
    fontSize: 10,
    color: "#C9E8D9",
    fontWeight: "800",
    letterSpacing: 1,
  },
  houseName: {
    color: "#FFFFFF",
    fontSize: 22,
    fontWeight: "800",
    marginTop: 8,
  },
  deviceName: {
    color: "#D6EDE1",
    fontSize: 12,
    marginTop: 5,
  },
  houseIcon: {
    fontSize: 36,
  },
  sectionHeader: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 14,
  },
  sectionTitle: {
    fontSize: 19,
    fontWeight: "800",
    color: "#172B22",
  },
  readingCount: {
    fontSize: 12,
    color: "#718078",
  },
  sensorCard: {
    backgroundColor: "#FFFFFF",
    borderRadius: 16,
    padding: 17,
    marginBottom: 13,
    borderWidth: 1,
    borderColor: "#E6ECE8",
  },
  cardTop: {
    flexDirection: "row",
    alignItems: "center",
  },
  sensorIcon: {
    width: 24,
    height: 30,
    alignItems: "center",
    justifyContent: "center",
  },
  iconText: {
    fontSize: 21,
  },
  sensorTitleContainer: {
    flex: 1,
    marginLeft: 11,
  },
  progressTrack: {
    height: 8,
    borderRadius: 8,
    backgroundColor: "#E3E8DD",
    overflow: "hidden",
    marginTop: 10,
    marginBottom: 4,
  },
  progressFill: { height: "100%", borderRadius: 8 },
  sensorTitle: {
    fontSize: 15,
    fontWeight: "700",
    color: "#263A30",
  },
  sensorCode: {
    fontSize: 11,
    color: "#8A9790",
    marginTop: 4,
  },
  statusBadge: {
    borderRadius: 20,
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  normalBadge: {
    backgroundColor: "#E6F6ED",
  },
  warningBadge: {
    backgroundColor: "#FFF0D8",
  },
  statusText: {
    fontSize: 11,
    fontWeight: "700",
  },
  normalText: {
    color: "#16845B",
  },
  warningText: {
    color: "#A76500",
  },
  valueRow: {
    flexDirection: "row",
    alignItems: "baseline",
    marginTop: 17,
  },
  sensorValue: {
    fontSize: 31,
    fontWeight: "800",
    color: "#172B22",
  },
  sensorUnit: {
    fontSize: 14,
    color: "#718078",
    marginLeft: 7,
  },
  updatedText: {
    fontSize: 11,
    color: "#8A9790",
    marginTop: 7,
  },
  summaryCard: {
    backgroundColor: "#E6F6ED",
    borderRadius: 14,
    padding: 16,
    marginBottom: 14,
  },
  summaryLabel: {
    color: "#48725D",
    fontSize: 12,
    fontWeight: "600",
  },
  summaryValue: {
    color: "#176B4D",
    fontSize: 16,
    fontWeight: "800",
    marginTop: 5,
  },
  messageBox: {
    backgroundColor: "#FFFFFF",
    borderRadius: 16,
    padding: 26,
    alignItems: "center",
    marginTop: 8,
  },
  messageText: {
    fontSize: 14,
    color: "#64736A",
    textAlign: "center",
    marginTop: 12,
  },
  errorBox: {
    backgroundColor: "#FFF0EF",
    borderRadius: 16,
    padding: 18,
  },
  errorTitle: {
    fontSize: 16,
    fontWeight: "800",
    color: "#A83228",
  },
  errorText: {
    color: "#873C36",
    fontSize: 13,
    marginTop: 8,
    lineHeight: 20,
  },
  retryHint: {
    color: "#873C36",
    fontSize: 12,
    marginTop: 8,
  },
  footerText: {
    color: "#8A9790",
    fontSize: 11,
    textAlign: "center",
    marginTop: 15,
  },
});

export default styles;
