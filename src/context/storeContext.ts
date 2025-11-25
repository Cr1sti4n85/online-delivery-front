import { createContext } from "react";
import type { FoodResponse } from "../types";

export interface StoreContextType {
  foodList: FoodResponse[];
}

export const StoreContext = createContext<StoreContextType | null>({
  foodList: [],
});
