import FoodDisplay from "../../components/client/FoodDisplay";

const Explore = () => {
  return (
    <>
      <div>
        <div className="row justify-content-center">
          <div className="col-md-6">
            <form>
              <div className="input-group mb-3">
                <select
                  className="form-select mt-2"
                  style={{ maxWidth: "150px" }}
                >
                  <option value="burgers">Hamburguesas</option>
                  <option value="pizzas">Pizzas</option>
                  <option value="sushi">Sushi</option>
                  <option value="desserts">Postres</option>
                  <option value="salads">Ensaladas</option>
                </select>
                <input
                  type="text"
                  className="form-control mt-2"
                  placeholder="Qué quieres comer hoy"
                />
                <button className="btn btn-primary mt-2" type="submit">
                  <i className="bi bi-search"></i>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <FoodDisplay />
    </>
  );
};

export default Explore;
