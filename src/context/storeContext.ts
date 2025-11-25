import { createContext } from "react";
import type { FoodResponse } from "../types";

export type StoreContextType = {
  foodList: FoodResponse[];
};

export const StoreContext = createContext<StoreContextType | null>({
  foodList: [],
});
