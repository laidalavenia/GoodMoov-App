import type { LoginDto, RegisterDto, AuthResponse } from "~/types/auth.types";

export class AuthService {
  private baseUrl: string;

  constructor() {
    const config = useRuntimeConfig();
    this.baseUrl = config.public.apiBase;
  }

  async login(credentials: LoginDto): Promise {
    const response = await fetch(`${this.baseUrl}/auth/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(credentials),
    });
    if (!response.ok) throw new Error("Login failed");
    return response.json();
  }

  async register(data: RegisterDto): Promise {
    const response = await fetch(`${this.baseUrl}/auth/register`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
    if (!response.ok) throw new Error("Registration failed");
    return response.json();
  }

  async logout(): Promise {
    const response = await fetch(`${this.baseUrl}/auth/logout`, {
      method: "POST",
    });
    if (!response.ok) throw new Error("Logout failed");
  }

  async refreshToken(token: string): Promise {
    const response = await fetch(`${this.baseUrl}/auth/refresh`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ token }),
    });
    if (!response.ok) throw new Error("Token refresh failed");
    return response.json();
  }
}

export const authService = new AuthService();
