import { createContext } from "react";
import { LoginData, RegisterData } from "@services/auth.service";

export interface User {
  id: string;
  name: string;
  email: string;
  phone?: string;
  address?: string;
  role: string;
}

export interface AuthContextType {
  user: User | null;
  token: string | null;

  login: (data: LoginData) => Promise<void>;
  register: (data: RegisterData) => Promise<void>;
  logout: () => void;
}

export const AuthContext = createContext<AuthContextType>({
  user: null,
  token: null,

  login: async () => {},
  register: async () => {},
  logout: () => {},
});
