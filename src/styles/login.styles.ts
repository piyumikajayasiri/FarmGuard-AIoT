import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F4F7F0",
  },

  keyboardView: {
    flex: 1,
  },

  content: {
    flex: 1,
    paddingHorizontal: 24,
    paddingTop: 30,
  },

  // Header
  header: {
    marginBottom: 28,
  },

  title: {
    color: "#172019",
    fontSize: 29,
    fontWeight: "800",
    letterSpacing: -0.5,
  },

  subtitle: {
    color: "#647064",
    fontSize: 14,
    marginTop: 7,
  },

  // Role selector
  roleContainer: {
    height: 48,
    backgroundColor: "#E4E9DE",
    borderRadius: 16,
    flexDirection: "row",
    padding: 4,
    marginBottom: 26,
  },

  roleButton: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 13,
  },

  roleButtonActive: {
    backgroundColor: "#FFFFFF",
    shadowColor: "#000000",
    shadowOpacity: 0.06,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    elevation: 2,
  },

  roleText: {
    color: "#687067",
    fontSize: 14,
    fontWeight: "500",
  },

  roleTextActive: {
    color: "#182019",
    fontWeight: "700",
  },

  // Inputs
  inputGroup: {
    marginBottom: 19,
  },

  label: {
    color: "#1E281F",
    fontSize: 14,
    fontWeight: "700",
    marginBottom: 9,
  },

  inputContainer: {
    height: 53,
    backgroundColor: "#FFFFFF",
    borderWidth: 1,
    borderColor: "#E0E4DB",
    borderRadius: 17,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 15,
  },

  inputIcon: {
    width: 28,
    fontSize: 18,
    color: "#8A9290",
  },

  input: {
    flex: 1,
    height: "100%",
    color: "#1A211B",
    fontSize: 14,
  },

  eyeText: {
    color: "#187B3D",
    fontSize: 12,
    fontWeight: "700",
  },

  // Remember / Forgot
  optionsRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: -2,
    marginBottom: 27,
  },

  rememberContainer: {
    flexDirection: "row",
    alignItems: "center",
  },

  checkbox: {
    width: 20,
    height: 20,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#C8D0C7",
    alignItems: "center",
    justifyContent: "center",
    marginRight: 9,
  },

  checkboxActive: {
    backgroundColor: "#188046",
    borderColor: "#188046",
  },

  checkmark: {
    color: "#FFFFFF",
    fontSize: 13,
    fontWeight: "800",
  },

  rememberText: {
    color: "#273027",
    fontSize: 13,
  },

  forgotText: {
    color: "#187B3D",
    fontSize: 13,
    fontWeight: "700",
  },

  // Login
  loginButton: {
    height: 55,
    borderRadius: 17,
    backgroundColor: "#187B3D",
    alignItems: "center",
    justifyContent: "center",

    shadowColor: "#187B3D",
    shadowOpacity: 0.18,
    shadowRadius: 8,
    shadowOffset: {
      width: 0,
      height: 4,
    },

    elevation: 3,
  },

  loginButtonDisabled: {
    opacity: 0.65,
  },

  loginButtonText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "800",
  },

  // Server status
  serverStatus: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 29,
  },

  statusDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: "#15803D",
    marginRight: 8,
  },

  serverText: {
    color: "#687068",
    fontSize: 11,
  },

  // Demo card
  demoCard: {
    marginTop: 28,
    minHeight: 88,
    backgroundColor: "#FFFFFF",
    borderWidth: 1,
    borderColor: "#E0E5DB",
    borderRadius: 17,
    paddingHorizontal: 15,
    paddingVertical: 14,
    flexDirection: "row",
    alignItems: "flex-start",
  },

  demoIcon: {
    fontSize: 18,
    marginRight: 10,
  },

  demoText: {
    flex: 1,
    color: "#657064",
    fontSize: 11,
    lineHeight: 19,
  },

  demoBold: {
    color: "#273027",
    fontWeight: "700",
  },

  // Languages
  languageContainer: {
    position: "absolute",
    bottom: 30,
    left: 0,
    right: 0,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 25,
  },

  languageActive: {
    color: "#202820",
    fontSize: 14,
    fontWeight: "800",
  },

  language: {
    color: "#747D74",
    fontSize: 14,
  },
});
