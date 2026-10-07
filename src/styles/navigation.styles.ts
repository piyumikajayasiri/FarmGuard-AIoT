import { StyleSheet } from "react-native";

export default StyleSheet.create({
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 16,
    paddingTop: 8,
    paddingBottom: 14,
  },

  headerLeft: {
    flexDirection: "row",
    alignItems: "center",
    flex: 1,
  },

  avatar: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: "#064E2E",
    alignItems: "center",
    justifyContent: "center",
    marginRight: 10,
  },

  avatarText: {
    color: "#FFFFFF",
    fontSize: 18,
    fontWeight: "700",
  },

  farmName: {
    fontSize: 17,
    fontWeight: "700",
    color: "#172033",
  },

  farmSubtitle: {
    marginTop: 2,
    fontSize: 12,
    color: "#64748B",
  },

  headerActions: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },

  headerButton: {
    width: 42,
    height: 42,
    borderRadius: 21,
    backgroundColor: "#FFFFFF",
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    borderColor: "#E5E7EB",
  },

  notificationBadge: {
    position: "absolute",
    right: -1,
    top: -3,
    minWidth: 17,
    height: 17,
    borderRadius: 9,
    backgroundColor: "#DC2626",
    alignItems: "center",
    justifyContent: "center",
  },

  notificationText: {
    color: "#FFFFFF",
    fontSize: 10,
    fontWeight: "700",
  },

  bottomNav: {
    height: 82,
    backgroundColor: "#FFFFFF",
    borderTopWidth: 1,
    borderTopColor: "#E5E7EB",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    paddingBottom: 8,
  },

  navItem: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    height: "100%",
    position: "relative",
  },

  navLabel: {
    fontSize: 11,
    marginTop: 4,
    color: "#64748B",
    fontWeight: "500",
  },

  navLabelActive: {
    color: "#087443",
    fontWeight: "700",
  },

  activeIndicator: {
    position: "absolute",
    bottom: 3,
    width: 20,
    height: 2,
    borderRadius: 2,
    backgroundColor: "#087443",
  },
});
