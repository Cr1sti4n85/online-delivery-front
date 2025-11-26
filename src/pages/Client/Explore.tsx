import { useState } from "react";
import FoodDisplay from "../../components/client/FoodDisplay";
import { FoodCategory } from "../../types.d";

const Explore = () => {
  const [category, setCategory] = useState(FoodCategory.All);
  const [searchText, setSearchText] = useState("");

  return (
    <>
      <div>
        <div className="row justify-content-center">
          <div className="col-md-6">
            <form onSubmit={(e) => e.preventDefault()}>
              <div className="input-group mb-3">
                <select
                  className="form-select mt-2"
                  style={{ maxWidth: "150px" }}
                  onChange={(e) => setCategory(e.target.value as FoodCategory)}
                >
                  <option value={FoodCategory.All}>Todos</option>
                  <option value={FoodCategory.Burgers}>Hamburguesas</option>
                  <option value={FoodCategory.Pizzas}>Pizzas</option>
                  <option value={FoodCategory.Sushi}>Sushi</option>
                  <option value={FoodCategory.Desserts}>Postres</option>
                  <option value={FoodCategory.Salads}>Ensaladas</option>
                </select>
                <input
                  type="text"
                  className="form-control mt-2"
                  placeholder="Qué quieres comer hoy"
                  onChange={(e) => setSearchText(e.target.value)}
                  value={searchText}
                />
                <button className="btn btn-primary mt-2" type="submit">
                  <i className="bi bi-search"></i>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <FoodDisplay category={category} searchText={searchText} />
    </>
  );
};

export default Explore;
