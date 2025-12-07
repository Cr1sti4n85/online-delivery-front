import { useEffect, useState, type PropsWithChildren } from "react";
import { getFoods } from "../http/apiRequests";
import type { FoodQuantity, FoodResponse } from "../types";
import { StoreContext } from "./storeContext";

type StoreContextProviderProps = PropsWithChildren;

export const StoreContextProvider = (props: StoreContextProviderProps) => {
  const [foodList, setfoodList] = useState<FoodResponse[]>([]);
  const [quantities, setQuantities] = useState<FoodQuantity | null>(null);
  const [token, setToken] = useState<string>("");

  const increaseQty = (foodId: string) => {
    setQuantities(
      (prev) => ({
        ...prev,
        [foodId]: prev && prev[foodId] ? prev[foodId] + 1 : 1,
      })
      //con corchetes foodId toma el valor de la variable como clave
    );
  };

  const decreaseQty = (foodId: string) => {
    setQuantities(
      (prev) =>
        prev && { ...prev, [foodId]: prev[foodId] > 0 ? prev[foodId] - 1 : 0 }
    );
  };

  const removeFromCart = (foodId: string) => {
    setQuantities((prev) => {
      const updatedQuantities = { ...prev };
      delete updatedQuantities[foodId];
      return updatedQuantities;
    });
  };

  const contextValue = {
    foodList,
    increaseQty,
    decreaseQty,
    quantities,
    removeFromCart,
    token,
    setToken,
  };

  useEffect(() => {
    async function loadData() {
      try {
        const response = await getFoods();
        setfoodList(response.data);
        if (localStorage.getItem("jwt")) {
          setToken(localStorage.getItem("jwt") as string);
        }
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
