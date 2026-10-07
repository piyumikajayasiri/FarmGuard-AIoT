import { apiRequest } from "./api";

export interface LoginRequest {
  email: string;
  password: string;
}

export interface User {
  id: string;
  full_name: string;
  email: string;
  role: string;
}

export interface LoginResponse {
  access_token: string;
  token_type: string;
  user: User;
}

export async function loginUser(
  credentials: LoginRequest,
): Promise<LoginResponse> {
  return apiRequest<LoginResponse>("/auth/login", {
    method: "POST",
    body: JSON.stringify(credentials),
  });
}
