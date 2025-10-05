export const APP_NAME = "MyApp";
export const API_VERSION = "v1";

export const USER_ROLES = {
  ADMIN: "admin",
  USER: "user",
} as const;

export const ROUTES = {
  HOME: "/",
  USERS: "/users",
  LOGIN: "/login",
  DASHBOARD: "/dashboard",
} as const;
