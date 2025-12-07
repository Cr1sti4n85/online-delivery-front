import API from "../config/apiClient";
import type {
  FoodData,
  FoodResponse,
  LoginRequest,
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
