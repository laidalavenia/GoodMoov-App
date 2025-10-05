export interface User {
  id: string;
  name: string;
  email: string;
  avatar?: string;
  role: "admin" | "user";
  createdAt: string;
  updatedAt: string;
}

export interface CreateUserDto {
  name: string;
  email: string;
  password: string;
  role?: "admin" | "user";
}

export interface UpdateUserDto {
  name?: string;
  email?: string;
  avatar?: string;
  role?: "admin" | "user";
}

export type UserListItem = Pick<User, "id" | "name" | "email" | "avatar" | "role">;
