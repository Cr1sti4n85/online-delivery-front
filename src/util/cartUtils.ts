import type { StoreContextType } from "../context/storeContext";
import type { FoodResponse } from "../types";

export const calculateCartCosts = (
  cartItems: FoodResponse[],
  ctx: StoreContextType
) => {
  //calculating sub-total from cart items
  const subTotal: number = cartItems.reduce(
    (acc, food) =>
      ctx.quantities ? acc + food.price * ctx.quantities[food.id] : 0,
    0
  );

  const delivery = subTotal === 0 ? 0 : 1500;
  const tax = subTotal * 0.19;
  const total = subTotal + delivery + tax;

  return {
    subTotal,
    delivery,
    tax,
    total,
  };
};
