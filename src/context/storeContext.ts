import { createContext } from "react";
import type { FoodQuantity, FoodResponse } from "../types";

export type StoreContextType = {
  foodList: FoodResponse[];
  increaseQty: (foodId: string) => void;
  decreaseQty: (foodId: string) => void;
  quantities: FoodQuantity | null;
  setQuantities: (value: React.SetStateAction<FoodQuantity | null>) => void;
  removeFromCart: (foodId: string) => void;
  token: string;
  setToken: (token: string) => void;
  loadCartItems: (token: string) => Promise<void>;
};

export const StoreContext = createContext<StoreContextType | null>(null);
