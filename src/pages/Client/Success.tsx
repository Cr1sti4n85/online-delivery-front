import { useContext, useEffect } from "react";
import { deleteCart } from "../../http/apiRequests";
import { StoreContext } from "../../context/storeContext";

const Success = () => {
  const token = useContext(StoreContext)?.token;
  const setQuantities = useContext(StoreContext)?.setQuantities;

  useEffect(() => {
    const clearCart = async () => {
      if (token) {
        await deleteCart(token);
      }
    };

    clearCart();
    if (setQuantities) {
      setQuantities(null);
    }
  }, [token, setQuantities]);
  return <div>Successfully paid</div>;
};

export default Success;
