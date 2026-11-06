import api from "../api/axios";

export const getUsers = async () => {
  const response = await api.get("/users");
  return response.data;
};

export const getUserById = async (id: string) => {
  const response = await api.get(`/users/${id}`);
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
