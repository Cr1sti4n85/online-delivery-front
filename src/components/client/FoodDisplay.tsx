import { useContext } from "react";
import { StoreContext } from "../../context/storeContext";
import FoodItem from "./FoodItem";

const FoodDisplay = () => {
  const foodList = useContext(StoreContext)?.foodList;
  return (
    <div className="container">
      <div className="row">
        {foodList && foodList.length > 0 ? (
          foodList.map((food) => <FoodItem key={food.id} food={food} />)
        ) : (
          <div className="text-center mt-4">
            <h4>No hay platos disponibles</h4>
          </div>
        )}
      </div>
    </div>
  );
};

export default FoodDisplay;
