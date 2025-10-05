import { authService } from "~/api/services/auth.service";
import type { LoginDto, RegisterDto } from "~/types/auth.types";

export const useAuth = () => {
  const user = useState("auth:user", () => null);
  const token = useCookie("auth:token");
  const router = useRouter();

  const login = async (credentials: LoginDto) => {
    try {
      const response = await authService.login(credentials);
      user.value = response.user;
      token.value = response.token;
      await router.push("/dashboard");
    } catch (error) {
      console.error("Login failed:", error);
      throw error;
    }
  };

  const register = async (data: RegisterDto) => {
    try {
      const response = await authService.register(data);
      user.value = response.user;
      token.value = response.token;
      await router.push("/dashboard");
    } catch (error) {
      console.error("Registration failed:", error);
      throw error;
    }
  };

  const logout = async () => {
    try {
      await authService.logout();
      user.value = null;
      token.value = null;
      await router.push("/login");
    } catch (error) {
      console.error("Logout failed:", error);
      throw error;
    }
  };

  const isAuthenticated = computed(() => !!user.value && !!token.value);

  return {
    user: readonly(user),
    isAuthenticated,
    login,
    register,
    logout,
  };
};
