import { assets } from "../assets/assets";

const AddFood = () => {
  return (
    <div className="container mt-2">
      <div className="row">
        <div className="card col-md-8">
          <div className="card-body">
            <h2 className="mb-4">Agregar comida</h2>
            <form>
              <div className="mb-3">
                <label htmlFor="name" className="form-label">
                  Nombre
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  required
                  name="name"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="price" className="form-label">
                  Precio
                </label>
                <input
                  type="number"
                  className="form-control"
                  id="price"
                  required
                  name="price"
                  min={0}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="category" className="form-label">
                  Categoría
                </label>
                <select name="category" id="category" className="form-control">
                  <option value="Burgers">Hamburguesas</option>
                  <option value="Pizzas">Pizzas</option>
                  <option value="Desserts">Postres</option>
                  <option value="Sushi">Sushi</option>
                  <option value="Salads">Ensaladas</option>
                </select>
              </div>
              <div className="mb-3">
                <label htmlFor="description" className="form-label">
                  Descripción
                </label>
                <textarea
                  className="form-control"
                  id="description"
                  rows={5}
                  required
                  name="description"
                ></textarea>
              </div>
              <div className="mb-3">
                <label htmlFor="image" className="form-label">
                  <img src={assets.upload} alt="upload icon" width={64} />
                </label>
                <input
                  type="file"
                  className="form-control"
                  id="image"
                  required
                  hidden
                />
              </div>
              <button type="submit" className="btn btn-primary">
                Guardar
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddFood;
