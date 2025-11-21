import API from "../config/apiClient";
import type { FoodResponse } from "../types";

export const addFood = async (data: FormData) => {
  const response = await API.post<FoodResponse>("/foods", data, {
    headers: { "Content-Type": "multipart/form-data" },
  });
  return response;
};
