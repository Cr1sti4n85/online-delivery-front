import { useEffect, useState, type PropsWithChildren } from "react";
import { getFoods } from "../http/apiRequests";
import type { FoodResponse } from "../types";
import { StoreContext } from "./storeContext";

type StoreContextProviderProps = PropsWithChildren;

export const StoreContextProvider = (props: StoreContextProviderProps) => {
  const [foodList, setfoodList] = useState<FoodResponse[]>([]);

  const contextValue = {
    foodList,
  };

  useEffect(() => {
    async function loadData() {
      try {
        const response = await getFoods();
        setfoodList(response.data);
      } catch (error) {
        console.error("Error:", error);
      }
    }
    loadData();
  }, []);
  return (
    <StoreContext.Provider value={contextValue}>
      {props.children}
    </StoreContext.Provider>
  );
};
