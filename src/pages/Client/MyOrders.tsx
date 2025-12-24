import { useContext, useEffect, useState } from "react";
import { StoreContext } from "../../context/storeContext";
import { toast } from "react-toastify";
import { getOrders } from "../../http/apiRequests";
import { assets } from "../../assets/assets";
import type { OrderResponse } from "../../types";

const MyOrders = () => {
  const token = useContext(StoreContext)?.token;
  const [data, setData] = useState<OrderResponse[]>([]);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        if (!token) return;
        const response = await getOrders(token);
        if (response.status === 200) {
          setData(response.data);
        }
      } catch {
        toast.error("Error al obtener datos");
      }
    };
    fetchOrders();
  }, [token]);

  return (
    <div className="container">
      <div className="py-5 row justify-content-center ">
        <div className="col-11 card">
          <table className="table table-responsive">
            <tbody>
              {data.map((order, idx) => (
                <tr key={idx}>
                  <td className="align-middle">
                    <img
                      src={assets.parcel}
                      alt="delivery image"
                      height={48}
                      width={48}
                    />
                  </td>
                  <td className="align-middle">
                    {order.orderedItems.map((item, idx) => {
                      if (idx === order.orderedItems.length - 1) {
                        return `${item.name} x ${item.quantity}`;
                      } else {
                        return `${item.name} x ${item.quantity}, `;
                      }
                    })}
                  </td>
                  <td className="align-middle">${order.amount}</td>
                  <td className="align-middle">
                    Items: {order.orderedItems.length}
                  </td>
                  <td className="fw-bold text-capitalize align-middle">
                    &#x25cf;{order.orderStatus}
                  </td>
                  <td className="align-middle">
                    <button
                      className="btn btn-sm btn-warning"
                      //   onClick={fetchOrders}
                    >
                      <i className="bi bi-arrow-clockwise"></i>
                    </button>
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

export default MyOrders;
