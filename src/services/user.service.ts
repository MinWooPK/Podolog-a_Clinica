import api from "../api/axios";

export interface UserData {
  id: string;
  name: string;
  email: string;
  phone: string | null;
  address: string | null;
  role: "ADMIN" | "CLIENT";
  avatarUrl: string | null;
  createdAt: string;
}

export const getUsers = async (): Promise<UserData[]> => {
  const response = await api.get<UserData[]>("/users");
  return response.data;
};

export const getUserById = async (id: string): Promise<UserData> => {
  const response = await api.get<UserData>(`/users/${id}`);
  return response.data;
};

export const updateUser = async (
  id: string,
  data: {
    name: string;
    email: string;
    phone?: string;
    address?: string;
    role: string;
    avatarUrl?: string;
  },
) => {
  const response = await api.put(`/users/${id}`, data);
  return response.data;
};

export const deleteUser = async (id: string) => {
  const response = await api.delete(`/users/${id}`);
  return response.data;
};
