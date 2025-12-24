import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { getAllOrders, updateOrderStatus } from "../http/apiRequests";
import { assets } from "../assets/assets";
import type { OrderResponse } from "../types.d";

const Orders = () => {
  const [data, setData] = useState<OrderResponse[]>([]);

  const fetchOrders = async () => {
    try {
      const response = await getAllOrders();
      if (response.status === 200) {
        setData(response.data);
      }
    } catch {
      toast.error("Error al obtener datos");
    }
  };

  const handleOrderStatus = async (
    orderId: string,
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    const newStatus = event.target.value;
    const response = await updateOrderStatus(orderId, newStatus);
    if (response.status === 204) {
      toast.success("Estado de la orden actualizado");
      await fetchOrders();
    }
  };

  useEffect(() => {
    fetchOrders();
  }, []);

  return (
    <div className="container">
      <div className="py-5 row justify-content-center ">
        <div className="col-11 card">
          <table className="table table-responsive">
            <tbody>
              {data.map((order, idx) => (
                <tr key={idx}>
                  <td>
                    <img
                      src={assets.parcel}
                      alt="delivery image"
                      height={48}
                      width={48}
                    />
                  </td>
                  <td>
                    <div>
                      {order.orderedItems.map((item, idx) => {
                        if (idx === order.orderedItems.length - 1) {
                          return `${item.name} x ${item.quantity}`;
                        } else {
                          return `${item.name} x ${item.quantity}, `;
                        }
                      })}
                    </div>
                    <div>{order.userAddress}</div>
                  </td>
                  <td>${order.amount}</td>
                  <td>Items: {order.orderedItems.length}</td>

                  <td>
                    <select
                      className="form-control"
                      value={order.orderStatus}
                      onChange={(e) => handleOrderStatus(order.id, e)}
                    >
                      <option value="En preparación">En preparación</option>
                      <option value="En camino">En camino</option>
                      <option value="Entregado">Entregado</option>
                    </select>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Orders;
