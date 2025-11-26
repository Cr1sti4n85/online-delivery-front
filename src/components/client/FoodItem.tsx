import { Link } from "react-router";
import type { FoodResponse } from "../../types";
import { useContext } from "react";
import { StoreContext } from "../../context/storeContext";

type FoodItemProps = {
  food: FoodResponse;
};

const FoodItem = ({ food }: FoodItemProps) => {
  const ctx = useContext(StoreContext);

  return (
    <div className="col-12 col-sm-6 col-md-4 col-lg3 d-flex justify-content-center">
      <div className="card text-decoration-none" style={{ maxWidth: "320px" }}>
        <Link to={`food/${food.id}`}>
          <img
            src={food.imageUrl}
            className="card-img-top"
            alt="Food Image"
            height={300}
            width={100}
          />
        </Link>
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
          <Link to={`food/${food.id}`} className="btn btn-primary btn-sm">
            Ver
          </Link>
          {ctx?.quantities && ctx?.quantities[food.id] > 0 ? (
            <div className="d-flex align-items-center gap-2">
              <button
                className="btn btn-danger btn-sm"
                onClick={() => ctx?.decreaseQty(food.id)}
              >
                <i className="bi bi-dash-circle"></i>
              </button>
              <span className="fw-bold">{ctx?.quantities[food.id]}</span>
              <button
                className="btn btn-success btn-sm"
                onClick={() => ctx?.increaseQty(food.id)}
              >
                <i className="bi bi-plus-circle"></i>
              </button>
            </div>
          ) : (
            <div>
              <button
                className="btn btn-primary btn-sm"
                onClick={() => ctx?.increaseQty(food.id)}
              >
                <i className="bi bi-plus-circle"></i>
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default FoodItem;
