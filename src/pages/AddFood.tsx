import React, { useState } from "react";
import { assets } from "../assets/assets";
import type { FoodData } from "../types";
import { addFood } from "../http/apiRequests";

const AddFood = () => {
  const [image, setImage] = useState<File | null>(null);
  const [foodData, setFoodData] = useState<FoodData>({
    name: "",
    price: 0,
    category: "Burgers",
    description: "",
  });
  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setImage(e.target.files[0]);
    }
  };

  const handleDataChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFoodData((prevData) => ({
      ...prevData,
      [name]: name === "price" ? Number(value) : value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!image) {
      alert("Por favor, selecciona una imagen.");
      return;
    }

    const formData = new FormData();
    formData.append("food", JSON.stringify(foodData));
    formData.append("file", image);

    try {
      const res = await addFood(formData);
      if (res.status === 201) {
        alert("Comida agregada exitosamente.");
        setFoodData({
          name: "",
          price: 0,
          category: "Burgers",
          description: "",
        });
        setImage(null);
      }
    } catch (error: unknown) {
      alert("Error al agregar la comida.");
      console.log(error);
    }
  };

  return (
    <div className="container mt-2">
      <div className="row">
        <div className="card col-md-8">
          <div className="card-body">
            <h2 className="mb-4">Agregar comida</h2>
            <form onSubmit={handleSubmit}>
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
                  onChange={handleDataChange}
                  value={foodData.name}
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
                  onChange={handleDataChange}
                  value={foodData.price}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="category" className="form-label">
                  Categoría
                </label>
                <select
                  name="category"
                  id="category"
                  className="form-control"
                  required
                  onChange={handleDataChange}
                  value={foodData.category}
                >
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
                  onChange={handleDataChange}
                  value={foodData.description}
                ></textarea>
              </div>
              <div className="mb-3">
                <label htmlFor="image" className="form-label">
                  <img
                    src={image ? URL.createObjectURL(image) : assets.upload}
                    alt="upload icon"
                    width={64}
                  />
                </label>
                <input
                  type="file"
                  className="form-control"
                  id="image"
                  required
                  hidden
                  onChange={handleImageChange}
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
