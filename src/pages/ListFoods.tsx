import { useEffect, useState } from "react";
import { deleteFood, getFoods } from "../http/apiRequests";
import type { FoodResponse } from "../types";
import { toast } from "react-toastify";

const ListFoods = () => {
  const [list, setList] = useState<FoodResponse[]>([]);

  const removeFood = async (id: string) => {
    const res = await deleteFood(id);
    if (res) {
      toast.success("Comida eliminada con éxito");
      setList((prev) => prev.filter((food) => food.id !== id));
    } else {
      toast.error("Error al eliminar la comida");
    }
  };

  useEffect(() => {
    const fetchFoods = async () => {
      try {
        const response = await getFoods();
        if (response.status === 200) setList(response.data);
      } catch {
        toast.error("Error al obtener la lista de comidas");
      }
    };

    fetchFoods();
  }, []);
  return (
    <div className="py-5 row justify-content-center">
      <div className="card col-11">
        <table className="table">
          <thead>
            <tr>
              <th>imagen</th>
              <th>Nombre</th>
              <th>Categoría</th>
              <th>Precio</th>
              <th>Acción</th>
            </tr>
          </thead>
          <tbody>
            {list.map((food, idx) => (
              <tr key={idx}>
                <td>
                  <img
                    src={food.imageUrl}
                    alt="food image"
                    height={48}
                    width={48}
                  />
                </td>
                <td className="align-middle">{food.name}</td>
                <td className="align-middle">{food.category}</td>
                <td className="align-middle">${food.price}</td>
                <td className="text-danger align-middle">
                  <i
                    className="bi bi-x-circle-fill"
                    onClick={() => removeFood(food.id)}
                  ></i>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ListFoods;
