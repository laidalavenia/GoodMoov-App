export interface MenuItem {
  label: string;
  icon?: string;
  to?: string;
  items?: MenuItem[];
}

export interface BreadcrumbItem {
  label: string;
  to?: string;
}

export type LoadingState = "idle" | "loading" | "success" | "error";

export interface ToastOptions {
  title: string;
  description?: string;
  variant?: "default" | "destructive" | "success";
  duration?: number;
}
