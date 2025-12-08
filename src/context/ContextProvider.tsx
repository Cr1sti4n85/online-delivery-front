import { useEffect, useState, type PropsWithChildren } from "react";
import {
  addTocart,
  getFoods,
  loadItems,
  removeItemFromCart,
} from "../http/apiRequests";
import type { FoodQuantity, FoodResponse } from "../types";
import { StoreContext } from "./storeContext";

type StoreContextProviderProps = PropsWithChildren;

export const StoreContextProvider = (props: StoreContextProviderProps) => {
  const [foodList, setfoodList] = useState<FoodResponse[]>([]);
  const [quantities, setQuantities] = useState<FoodQuantity | null>(null);
  const [token, setToken] = useState<string>("");

  const increaseQty = async (foodId: string) => {
    setQuantities(
      (prev) => ({
        ...prev,
        [foodId]: prev && prev[foodId] ? prev[foodId] + 1 : 1,
      })
      //con corchetes foodId toma el valor de la variable como clave
    );
    await addTocart(foodId, token);
  };

  const decreaseQty = async (foodId: string) => {
    setQuantities(
      (prev) =>
        prev && { ...prev, [foodId]: prev[foodId] > 0 ? prev[foodId] - 1 : 0 }
    );
    await removeItemFromCart(foodId, token);
  };

  const removeFromCart = (foodId: string) => {
    setQuantities((prev) => {
      const updatedQuantities = { ...prev };
      delete updatedQuantities[foodId];
      return updatedQuantities;
    });
  };

  const loadCartItems = async (token: string) => {
    const res = await loadItems(token);
    setQuantities(res.data.items);
  };

  const contextValue = {
    foodList,
    increaseQty,
    decreaseQty,
    quantities,
    setQuantities,
    removeFromCart,
    token,
    setToken,
    loadCartItems,
  };

  useEffect(() => {
    async function loadData() {
      try {
        const response = await getFoods();
        setfoodList(response.data);
        if (localStorage.getItem("jwt")) {
          setToken(localStorage.getItem("jwt") as string);
          await loadCartItems(localStorage.getItem("jwt") as string);
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
