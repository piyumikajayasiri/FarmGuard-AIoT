import AsyncStorage from "@react-native-async-storage/async-storage";
import { LoginResponse, User } from "./auth.service";

const TOKEN_KEY = "farmguard_access_token";
const USER_KEY = "farmguard_user";

export async function saveAuthSession(response: LoginResponse): Promise<void> {
  await AsyncStorage.multiSet([
    [TOKEN_KEY, response.access_token],
    [USER_KEY, JSON.stringify(response.user)],
  ]);
}

export async function getAccessToken(): Promise<string | null> {
  return AsyncStorage.getItem(TOKEN_KEY);
}

export async function getStoredUser(): Promise<User | null> {
  const user = await AsyncStorage.getItem(USER_KEY);

  if (!user) {
    return null;
  }

  return JSON.parse(user);
}

export async function clearAuthSession(): Promise<void> {
  await AsyncStorage.multiRemove([TOKEN_KEY, USER_KEY]);
}
