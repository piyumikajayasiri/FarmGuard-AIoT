import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F7F2",
  },

  content: {
    paddingHorizontal: 16,
    paddingBottom: 20,
  },

  flockCard: {
    backgroundColor: "#064E2E",
    borderRadius: 16,
    padding: 16,
    marginBottom: 14,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },

  flockTitle: {
    color: "#FFFFFF",
    fontSize: 18,
    fontWeight: "700",
  },

  flockSubtitle: {
    color: "#A7C5B5",
    fontSize: 12,
    marginTop: 5,
  },

  flockIcon: {
    width: 54,
    height: 54,
    borderRadius: 15,
    backgroundColor: "#14633F",
    alignItems: "center",
    justifyContent: "center",
  },

  flockEmoji: {
    fontSize: 28,
  },

  warningCard: {
    backgroundColor: "#FFF7E8",
    borderWidth: 1,
    borderColor: "#F8D38A",
    borderRadius: 14,
    padding: 12,
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 18,
  },

  warningIcon: {
    fontSize: 22,
    marginRight: 8,
  },

  warningContent: {
    flex: 1,
  },

  warningTitle: {
    color: "#273142",
    fontSize: 13,
    fontWeight: "700",
  },

  warningSubtitle: {
    color: "#64748B",
    fontSize: 11,
    marginTop: 3,
  },

  viewButton: {
    backgroundColor: "#1F2937",
    paddingHorizontal: 13,
    paddingVertical: 9,
    borderRadius: 9,
  },

  viewButtonText: {
    color: "#FFFFFF",
    fontSize: 12,
    fontWeight: "700",
  },

  sectionHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 10,
    marginTop: 2,
  },

  sectionTitle: {
    fontSize: 16,
    fontWeight: "700",
    color: "#172033",
  },

  liveText: {
    color: "#087443",
    fontSize: 12,
    fontWeight: "700",
  },

  metricsGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    marginBottom: 18,
  },

  metricCard: {
    width: "48.5%",
    minHeight: 124,
    backgroundColor: "#FFFFFF",
    borderRadius: 16,
    padding: 14,
    marginBottom: 10,
    shadowColor: "#000000",
    shadowOpacity: 0.04,
    shadowRadius: 6,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    elevation: 2,
  },

  metricHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  metricTitle: {
    color: "#64748B",
    fontSize: 12,
    flex: 1,
  },

  statusBadge: {
    backgroundColor: "#EAF7EF",
    paddingHorizontal: 7,
    paddingVertical: 4,
    borderRadius: 10,
  },

  warningBadge: {
    backgroundColor: "#FFF3D9",
  },

  statusText: {
    color: "#18864B",
    fontSize: 9,
    fontWeight: "700",
  },

  warningStatusText: {
    color: "#B76B00",
  },

  metricValue: {
    color: "#172033",
    fontSize: 23,
    fontWeight: "700",
    marginTop: 8,
  },

  metricSubtitle: {
    color: "#64748B",
    fontSize: 11,
    marginTop: 3,
  },

  updatedText: {
    color: "#94A3B8",
    fontSize: 10,
    marginTop: 3,
  },

  alertCard: {
    backgroundColor: "#FFFFFF",
    borderRadius: 15,
    padding: 14,
    marginBottom: 10,
    flexDirection: "row",
    alignItems: "center",
    borderLeftWidth: 5,
  },

  warningAlert: {
    borderLeftColor: "#E87500",
  },

  criticalAlert: {
    borderLeftColor: "#D92323",
  },

  alertContent: {
    flex: 1,
  },

  alertMeta: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 6,
  },

  alertType: {
    color: "#B76B00",
    fontSize: 10,
    fontWeight: "700",
  },

  alertActive: {
    color: "#64748B",
    fontSize: 10,
  },

  alertTitle: {
    color: "#172033",
    fontSize: 14,
    fontWeight: "700",
    lineHeight: 19,
  },

  alertSubtitle: {
    color: "#64748B",
    fontSize: 10,
    marginTop: 5,
  },

  alertArrow: {
    color: "#94A3B8",
    fontSize: 27,
    marginLeft: 8,
  },
});
