import api from "../api/axios";

export interface ShopItem {
  id: string;
  title: string;
  subtitle: string | null;
  description: string;
  price: number;
  imageUrl: string | null;
  inStock: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface CreateShopData {
  title: string;
  subtitle?: string;
  description: string;
  price: number;
  imageUrl?: string;
  inStock?: boolean;
}

export const getShops = async (): Promise<ShopItem[]> => {
  const response = await api.get("/shop");
  return response.data;
};

export const getShopById = async (id: string): Promise<ShopItem> => {
  const response = await api.get(`/shop/${id}`);
  return response.data;
};

export const createShop = async (data: CreateShopData): Promise<ShopItem> => {
  const response = await api.post("/shop", data);
  return response.data;
};

export const updateShop = async (
  id: string,
  data: CreateShopData,
): Promise<ShopItem> => {
  const response = await api.put(`/shop/${id}`, data);
  return response.data;
};

export const deleteShop = async (id: string) => {
  const response = await api.delete(`/shop/${id}`);
  return response.data;
};
