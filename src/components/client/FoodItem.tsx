import { Link } from "react-router";
import type { FoodResponse } from "../../types";

type FoodItemProps = {
  food: FoodResponse;
};

const FoodItem = ({ food }: FoodItemProps) => {
  return (
    <Link to={`food/${food.id}`} className="card" style={{ maxWidth: "320px" }}>
      <img
        src={food.imageUrl}
        className="card-img-top"
        alt="Food Image"
        height={300}
        width={100}
      />
      <div className="card-body">
        <h5 className="card-title">{food.name}</h5>
        <p className="card-text">{food.description}</p>
        <div className="d-flex justify-content-between align-items-center">
          <span className="h5 mb-0">${food.price}</span>
          <div>
            <i className="bi bi-star-fill text-warning"></i>
            <i className="bi bi-star-fill text-warning"></i>
            <i className="bi bi-star-fill text-warning"></i>
            <i className="bi bi-star-fill text-warning"></i>
            <i className="bi bi-star-half text-warning"></i>
            <small className="text-muted">(4.5)</small>
          </div>
        </div>
      </div>
      <div className="card-footer d-flex justify-content-between bg-light">
        {/* <Link to={`food/${food.id}`} className="btn btn-primary btn-sm">
          Ver
        </Link> */}
        <button className="btn btn-outline-secondary btn-sm">
          <i className="bi bi-heart"></i>
        </button>
      </div>
    </Link>
  );
};

export default FoodItem;
