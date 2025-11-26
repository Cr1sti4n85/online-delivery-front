import { createContext } from "react";
import type { FoodQuantity, FoodResponse } from "../types";

export type StoreContextType = {
  foodList: FoodResponse[];
  increaseQty: (foodId: string) => void;
  decreaseQty: (foodId: string) => void;
  quantities: FoodQuantity | null;
};

export const StoreContext = createContext<StoreContextType | null>(null);
