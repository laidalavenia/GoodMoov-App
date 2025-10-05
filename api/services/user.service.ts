import type { User, CreateUserDto, UpdateUserDto } from "~/types/user.types";

export class UserService {
  private baseUrl: string;

  constructor() {
    const config = useRuntimeConfig();
    this.baseUrl = config.public.apiBase;
  }

  async getUsers(): Promise {
    const response = await fetch(`${this.baseUrl}/users`);
    if (!response.ok) throw new Error("Failed to fetch users");
    return response.json();
  }

  async getUserById(id: string): Promise {
    const response = await fetch(`${this.baseUrl}/users/${id}`);
    if (!response.ok) throw new Error("Failed to fetch user");
    return response.json();
  }

  async createUser(data: CreateUserDto): Promise {
    const response = await fetch(`${this.baseUrl}/users`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
    if (!response.ok) throw new Error("Failed to create user");
    return response.json();
  }

  async updateUser(id: string, data: UpdateUserDto): Promise {
    const response = await fetch(`${this.baseUrl}/users/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
    if (!response.ok) throw new Error("Failed to update user");
    return response.json();
  }

  async deleteUser(id: string): Promise {
    const response = await fetch(`${this.baseUrl}/users/${id}`, {
      method: "DELETE",
    });
    if (!response.ok) throw new Error("Failed to delete user");
  }
}

// Export singleton instance
export const userService = new UserService();
