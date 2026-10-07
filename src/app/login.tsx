import { useState } from "react";
import {
  Alert,
  KeyboardAvoidingView,
  Platform,
  Pressable,
  SafeAreaView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

import { router } from "expo-router";
import { loginUser } from "../services/auth.service";
import { saveAuthSession } from "../services/auth.storage";
import { styles } from "../styles/login.styles";

type UserRole = "Farmer" | "Researcher" | "Admin";

export default function LoginScreen() {
  const [role, setRole] = useState<UserRole>("Farmer");
  const [email, setEmail] = useState("kamal@greenvalley.lk");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = async () => {
    if (!email.trim() || !password.trim()) {
      Alert.alert("Login Required", "Please enter your email and password.");
      return;
    }

    try {
      setIsLoading(true);

      const response = await loginUser({
        email: email.trim(),
        password,
      });

      // Save JWT and user information
      await saveAuthSession(response);

      console.log("Login successful:", response.user);

      // Redirect to dashboard
      router.replace("/dashboard");
    } catch (error) {
      const message =
        error instanceof Error ? error.message : "Unable to login.";

      Alert.alert("Login Failed", message);
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView
        style={styles.keyboardView}
        behavior={Platform.OS === "ios" ? "padding" : undefined}
      >
        <View style={styles.content}>
          {/* Header */}
          <View style={styles.header}>
            <Text style={styles.title}>Welcome back</Text>

            <Text style={styles.subtitle}>
              Monitor your flock from anywhere in Sri Lanka.
            </Text>
          </View>

          {/* Role Selector */}
          <View style={styles.roleContainer}>
            {(["Farmer", "Researcher", "Admin"] as UserRole[]).map((item) => (
              <Pressable
                key={item}
                onPress={() => setRole(item)}
                style={[
                  styles.roleButton,
                  role === item && styles.roleButtonActive,
                ]}
              >
                <Text
                  style={[
                    styles.roleText,
                    role === item && styles.roleTextActive,
                  ]}
                >
                  {item}
                </Text>
              </Pressable>
            ))}
          </View>

          {/* Email */}
          <View style={styles.inputGroup}>
            <Text style={styles.label}>Email</Text>

            <View style={styles.inputContainer}>
              <Text style={styles.inputIcon}>✉</Text>

              <TextInput
                style={styles.input}
                value={email}
                onChangeText={setEmail}
                placeholder="Enter your email"
                placeholderTextColor="#9CA3AF"
                keyboardType="email-address"
                autoCapitalize="none"
                autoCorrect={false}
              />
            </View>
          </View>

          {/* Password */}
          <View style={styles.inputGroup}>
            <Text style={styles.label}>Password</Text>

            <View style={styles.inputContainer}>
              <Text style={styles.inputIcon}>🔒</Text>

              <TextInput
                style={styles.input}
                value={password}
                onChangeText={setPassword}
                placeholder="Enter your password"
                placeholderTextColor="#9CA3AF"
                secureTextEntry={!showPassword}
              />

              <Pressable onPress={() => setShowPassword(!showPassword)}>
                <Text style={styles.eyeText}>
                  {showPassword ? "Hide" : "Show"}
                </Text>
              </Pressable>
            </View>
          </View>

          {/* Remember / Forgot */}
          <View style={styles.optionsRow}>
            <Pressable
              style={styles.rememberContainer}
              onPress={() => setRememberMe(!rememberMe)}
            >
              <View
                style={[styles.checkbox, rememberMe && styles.checkboxActive]}
              >
                {rememberMe && <Text style={styles.checkmark}>✓</Text>}
              </View>

              <Text style={styles.rememberText}>Remember me</Text>
            </Pressable>

            <Pressable>
              <Text style={styles.forgotText}>Forgot password?</Text>
            </Pressable>
          </View>

          {/* Login Button */}
          <TouchableOpacity
            style={styles.loginButton}
            onPress={handleLogin}
            disabled={isLoading}
          >
            <Text style={styles.loginButtonText}>
              {isLoading ? "Logging in..." : "Login"}
            </Text>
          </TouchableOpacity>

          {/* Server Status */}
          <View style={styles.serverStatus}>
            <View style={styles.statusDot} />

            <Text style={styles.serverText}>
              Server online • api.farmguard.lk • 42ms
            </Text>
          </View>

          {/* Demo Credentials */}
          <View style={styles.demoCard}>
            <Text style={styles.demoIcon}>🌾</Text>

            <Text style={styles.demoText}>
              Demo: Farmer{" "}
              <Text style={styles.demoBold}>kamal@greenvalley.lk</Text>
              {" • "}
              Researcher <Text style={styles.demoBold}>nimali@uni.lk</Text>
              {" • "}
              Admin <Text style={styles.demoBold}>admin@farmguard.lk</Text>
            </Text>
          </View>

          {/* Languages */}
          <View style={styles.languageContainer}>
            <Text style={styles.languageActive}>English</Text>

            <Text style={styles.language}>සිංහල</Text>

            <Text style={styles.language}>தமிழ்</Text>
          </View>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}
