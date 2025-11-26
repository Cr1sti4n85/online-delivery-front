import { useContext } from "react";
import { StoreContext } from "../../context/storeContext";
import FoodItem from "./FoodItem";
import { FoodCategory } from "../../types.d";

type FoodDisplayProps = {
  category: FoodCategory;
};

const FoodDisplay = ({ category }: FoodDisplayProps) => {
  const foodList = useContext(StoreContext)?.foodList;

  //Filter by category
  const filteredFoods = foodList?.filter(
    (food) => category === FoodCategory.All || food.category === category
  );

  return (
    <div className="container">
      <div className="row">
        {filteredFoods && filteredFoods.length > 0 ? (
          filteredFoods.map((food) => <FoodItem key={food.id} food={food} />)
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
