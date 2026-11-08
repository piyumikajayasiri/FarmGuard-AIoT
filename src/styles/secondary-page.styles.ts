import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F4F7F5",
  },
  content: {
    padding: 22,
    paddingTop: 45,
    paddingBottom: 40,
  },
  backButton: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    marginBottom: 35,
  },
  backText: {
    color: "#176B4D",
    fontWeight: "700",
    fontSize: 14,
  },
  iconBox: {
    width: 64,
    height: 64,
    borderRadius: 18,
    backgroundColor: "#E1F2E8",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 22,
  },
  eyebrow: {
    fontSize: 11,
    fontWeight: "800",
    letterSpacing: 1.5,
    color: "#16845B",
  },
  title: {
    fontSize: 28,
    fontWeight: "800",
    color: "#172B22",
    marginTop: 8,
  },
  subtitle: {
    fontSize: 14,
    color: "#718078",
    lineHeight: 21,
    marginTop: 8,
  },
  card: {
    backgroundColor: "#FFFFFF",
    padding: 20,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: "#E6ECE8",
    marginTop: 28,
  },
  cardTitle: {
    color: "#263A30",
    fontSize: 17,
    fontWeight: "800",
  },
  description: {
    color: "#718078",
    fontSize: 14,
    lineHeight: 22,
    marginTop: 10,
  },
});
