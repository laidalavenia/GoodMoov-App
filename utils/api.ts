export const createApiUrl = (path: string) => {
  const config = useRuntimeConfig();
  return `${config.public.apiBase}${path}`;
};

export const handleApiError = (error: any) => {
  if (error.response) {
    return {
      message: error.response.data?.message || "An error occurred",
      status: error.response.status,
    };
  }
  return {
    message: "Network error",
    status: 0,
  };
};
