import type { ToastOptions } from "~/types/common.types";

export const useToast = () => {
  const toasts = useState("toasts", () => []);

  const toast = (options: ToastOptions) => {
    const id = Date.now();
    toasts.value.push({ ...options, id } as any);

    setTimeout(() => {
      toasts.value = toasts.value.filter((t: any) => t.id !== id);
    }, options.duration || 3000);
  };

  const success = (title: string, description?: string) => {
    toast({ title, description, variant: "success" });
  };

  const error = (title: string, description?: string) => {
    toast({ title, description, variant: "destructive" });
  };

  const info = (title: string, description?: string) => {
    toast({ title, description, variant: "default" });
  };

  return {
    toast,
    success,
    error,
    info,
    toasts: readonly(toasts),
  };
};
