import { useEffect, useState } from "react";
import { AuthContext, User } from "./AuthContext";
import {
  login as loginService,
  register as registerService,
  LoginData,
  RegisterData,
} from "@services/auth.service";

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [token, setToken] = useState<string | null>(null);

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    const storedToken = localStorage.getItem("token");

    if (storedUser && storedToken) {
      setUser(JSON.parse(storedUser));
      setToken(storedToken);
    }
  }, []);

  const login = async (data: LoginData) => {
    const response = await loginService(data);

    setUser(response.user);
    setToken(response.token);

    localStorage.setItem("user", JSON.stringify(response.user));
    localStorage.setItem("token", response.token);
  };

  const register = async (data: RegisterData) => {
    const response = await registerService(data);

    setUser(response.user);
    setToken(response.token);

    localStorage.setItem("user", JSON.stringify(response.user));
    localStorage.setItem("token", response.token);
  };

  const logout = () => {
    setUser(null);
    setToken(null);

    localStorage.removeItem("user");
    localStorage.removeItem("token");
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        token,
        login,
        register,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
