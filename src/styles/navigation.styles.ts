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

  navIconContainer: {
    width: 38,
    height: 34,
    borderRadius: 12,
    alignItems: "center",
    justifyContent: "center",
  },

  moreOverlay: {
    flex: 1,
    backgroundColor: "rgba(15, 23, 42, 0.35)",
    justifyContent: "flex-end",
  },

  moreSheet: {
    backgroundColor: "#F8FAFC",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    paddingHorizontal: 20,
    paddingTop: 10,
    paddingBottom: 30,
  },

  sheetHandle: {
    width: 42,
    height: 5,
    borderRadius: 3,
    backgroundColor: "#CBD5E1",
    alignSelf: "center",
    marginBottom: 20,
  },

  moreHeader: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 18,
  },

  moreTitle: {
    fontSize: 22,
    fontWeight: "800",
    color: "#172033",
  },

  moreSubtitle: {
    fontSize: 12,
    color: "#64748B",
    marginTop: 4,
  },

  closeButton: {
    width: 38,
    height: 38,
    borderRadius: 19,
    backgroundColor: "#E9EEF2",
    alignItems: "center",
    justifyContent: "center",
  },

  moreItem: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#FFFFFF",
    padding: 13,
    borderRadius: 15,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: "#EDF1F4",
  },

  moreItemIcon: {
    width: 46,
    height: 46,
    borderRadius: 14,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 13,
  },

  moreItemContent: {
    flex: 1,
  },

  moreItemTitle: {
    fontSize: 15,
    fontWeight: "700",
    color: "#172033",
  },

  moreItemSubtitle: {
    fontSize: 11,
    color: "#64748B",
    marginTop: 4,
  },
});
