import { useRuntimeConfig } from "nuxt/app";

export const useApi = () => {
  const config = useRuntimeConfig();

  const apiFetch = async (url: string, options?: RequestInit): Promise => {
    const response = await fetch(`${config.public.apiBase}${url}`, {
      ...options,
      headers: {
        "Content-Type": "application/json",
        ...options?.headers,
      },
    });

    if (!response.ok) {
      throw new Error(`API Error: ${response.statusText}`);
    }

    return response.json();
  };

  return { apiFetch };
};
