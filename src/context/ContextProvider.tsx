import { useEffect, useState, type PropsWithChildren } from "react";
import { getFoods } from "../http/apiRequests";
import type { FoodQuantity, FoodResponse } from "../types";
import { StoreContext } from "./storeContext";

type StoreContextProviderProps = PropsWithChildren;

export const StoreContextProvider = (props: StoreContextProviderProps) => {
  const [foodList, setfoodList] = useState<FoodResponse[]>([]);
  const [quantities, setQuantities] = useState<FoodQuantity | null>(null);

  const increaseQty = (foodId: string) => {
    setQuantities(
      (prev) => ({
        ...prev,
        [foodId]: prev && prev[foodId] ? prev[foodId] + 1 : 1,
      })
      //con corchetes foodId toma el valor de la variable como clave
    );
    console.log(quantities);
  };

  const decreaseQty = (foodId: string) => {
    setQuantities(
      (prev) =>
        prev && { ...prev, [foodId]: prev[foodId] > 0 ? prev[foodId] - 1 : 0 }
    );
  };

  const contextValue = {
    foodList,
    increaseQty,
    decreaseQty,
    quantities,
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
