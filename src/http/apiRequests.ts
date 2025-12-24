import API from "../config/apiClient";
import type {
  FoodData,
  FoodResponse,
  LoginRequest,
  OrderRequest,
  RegisterRequest,
} from "../types";

export const addFood = async (data: FoodData, image: File) => {
  const formData = new FormData();
  formData.append("food", JSON.stringify(data));
  formData.append("file", image);
  const response = await API.post<FoodResponse>("/foods", formData, {
    headers: { "Content-Type": "multipart/form-data" },
  });
  return response;
};

export const getFoods = async () => {
  const response = await API.get<FoodResponse[]>("/foods");
  return response;
};

export const getSingleFood = async (id: string) => {
  const response = await API.get<FoodResponse>(`/foods/${id}`);
  return response;
};

export const deleteFood = async (id: string) => {
  const response = await API.delete(`/foods/${id}`);
  return response.status === 204;
};

//Registration and Login
export const register = async (data: RegisterRequest) => {
  const response = await API.post("/users", data);
  return response;
};

export const login = async (data: LoginRequest) => {
  const response = await API.post("/auth", data);
  return response;
};

//CART
export const addTocart = async (foodId: string, token: string) => {
  const response = await API.post(
    "/cart",
    { foodId },
    { headers: { Authorization: `Bearer ${token}` } }
  );
  return response;
};

export const removeItemFromCart = async (foodId: string, token: string) => {
  const response = await API.post(
    "/cart/items",
    { foodId },
    { headers: { Authorization: `Bearer ${token}` } }
  );

  return response;
};

export const loadItems = async (token: string) => {
  const response = await API.get("/cart", {
    headers: { Authorization: `Bearer ${token}` },
  });
  return response;
};

export const deleteCart = async (token: string) => {
  const response = await API.delete("/cart", {
    headers: { Authorization: `Bearer ${token}` },
  });
  return response.status === 204;
};

//ORDERS
export const placeOrder = async (orderData: OrderRequest, token: string) => {
  const response = await API.post("/orders", orderData, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return response;
};

export const deleteOrder = async (orderId: string, token: string) => {
  const response = await API.delete(`/orders/${orderId}`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return response.status === 204;
};

export const getOrders = async (token: string) => {
  const response = await API.get("/orders", {
    headers: { Authorization: `Bearer ${token}` },
  });
  return response;
};

export const getAllOrders = async () => {
  const response = await API.get("/orders/all");
  return response;
};

export const updateOrderStatus = async (orderId: string, status: string) => {
  const response = await API.patch(
    `/orders/status/${orderId}?status=${status}`
  );
  return response;
};
