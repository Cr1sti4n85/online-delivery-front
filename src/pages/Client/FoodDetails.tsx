import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import { getSingleFood } from "../../http/apiRequests";
import { toast } from "react-toastify";
import type { FoodResponse } from "../../types";
import { StoreContext } from "../../context/storeContext";

const FoodDetails = () => {
  const { id } = useParams<{ id: string }>();
  const [data, setdata] = useState<FoodResponse | null>(null);
  const increaseQty = useContext(StoreContext)?.increaseQty;
  const navigate = useNavigate();

  const addToCart = () => {
    if (data && increaseQty) {
      increaseQty(data.id);
      navigate("/cart");
    }
  };

  useEffect(() => {
    const fetchFoodDetails = async (foodId: string) => {
      try {
        const foodData = await getSingleFood(foodId);
        if (foodData.status === 200) {
          setdata(foodData.data);
        }
      } catch {
        toast.error("Error al obtener datos");
      }
    };
    fetchFoodDetails(id!);
  }, [id]);

  return (
    <section className="py-5">
      <div className="container px-4 px-lg-5 my-5">
        <div className="row gx-4 gx-lg-5 align-items-center">
          <div className="col-md-6">
            <img
              className="card-img-top mb-5 mb-md-0"
              src={data?.imageUrl}
              alt="food image"
            />
          </div>
          <div className="col-md-6">
            Categoría:{" "}
            <span className="badge text-bg-warning">{data?.category}</span>
            <h1 className="display-5 fw-bolder">{data?.name}</h1>
            <div className="fs-5 mb-2">
              <span>${data?.price}</span>
            </div>
            <p className="lead">{data?.description}</p>
            <div className="d-flex">
              <button
                className="btn btn-outline-dark flex-shrink-0"
                type="button"
                onClick={addToCart}
              >
                <i className="bi-cart-fill me-1"></i>
                Añadir
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FoodDetails;
