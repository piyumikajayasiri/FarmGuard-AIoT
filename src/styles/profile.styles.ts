import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F7F2",
  },

  header: {
    height: 64,
    paddingHorizontal: 16,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#F5F7F2",
  },

  backButton: {
    width: 42,
    height: 42,
    borderRadius: 21,
    backgroundColor: "#FFFFFF",
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    borderColor: "#E5E7EB",
  },

  headerTitle: {
    fontSize: 18,
    fontWeight: "700",
    color: "#172033",
  },

  headerSpacer: {
    width: 42,
  },

  content: {
    paddingHorizontal: 16,
    paddingBottom: 40,
  },

  profileCard: {
    backgroundColor: "#FFFFFF",
    borderRadius: 18,
    alignItems: "center",
    paddingVertical: 25,
    paddingHorizontal: 20,
    marginBottom: 24,
  },

  largeAvatar: {
    width: 82,
    height: 82,
    borderRadius: 41,
    backgroundColor: "#064E2E",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 12,
  },

  avatarText: {
    color: "#FFFFFF",
    fontSize: 27,
    fontWeight: "700",
  },

  name: {
    fontSize: 21,
    fontWeight: "700",
    color: "#172033",
  },

  email: {
    color: "#64748B",
    fontSize: 13,
    marginTop: 5,
  },

  roleBadge: {
    backgroundColor: "#EAF7EF",
    paddingHorizontal: 13,
    paddingVertical: 6,
    borderRadius: 15,
    marginTop: 12,
  },

  roleText: {
    color: "#087443",
    fontSize: 11,
    fontWeight: "700",
  },

  sectionTitle: {
    color: "#172033",
    fontSize: 15,
    fontWeight: "700",
    marginBottom: 9,
  },

  menuCard: {
    backgroundColor: "#FFFFFF",
    borderRadius: 15,
    paddingHorizontal: 14,
    marginBottom: 22,
  },

  row: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 14,
    borderBottomWidth: 1,
    borderBottomColor: "#F1F5F9",
  },

  rowIcon: {
    width: 38,
    height: 38,
    borderRadius: 19,
    backgroundColor: "#EAF7EF",
    alignItems: "center",
    justifyContent: "center",
    marginRight: 12,
  },

  rowContent: {
    flex: 1,
  },

  rowLabel: {
    color: "#94A3B8",
    fontSize: 10,
    marginBottom: 3,
  },

  rowValue: {
    color: "#172033",
    fontSize: 14,
    fontWeight: "600",
  },

  logoutButton: {
    height: 52,
    borderRadius: 13,
    backgroundColor: "#FFF1F2",
    borderWidth: 1,
    borderColor: "#FECACA",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 8,
    marginTop: 4,
  },

  logoutText: {
    color: "#DC2626",
    fontSize: 14,
    fontWeight: "700",
  },

  version: {
    textAlign: "center",
    color: "#94A3B8",
    fontSize: 10,
    marginTop: 20,
  },
});
