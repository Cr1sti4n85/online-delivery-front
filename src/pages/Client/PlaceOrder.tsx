import { initMercadoPago, Wallet } from "@mercadopago/sdk-react";
import { useContext, useState } from "react";
import { toast } from "react-toastify";
import { placeOrder } from "../../http/apiRequests";
import { assets } from "../../assets/assets";
import type { FoodResponse, UserInfo } from "../../types";
import { calculateCartCosts } from "../../util/cartUtils";
import { StoreContext } from "../../context/storeContext";

initMercadoPago(import.meta.env.VITE_MP_PUBLIC_KEY);

const PlaceOrder = () => {
  const ctx = useContext(StoreContext);
  const [preferenceId, setPreferenceId] = useState("");
  const [userInfo, setUserInfo] = useState<UserInfo>({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    userAddress: "",
    country: "Chile",
    city: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setUserInfo((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const orderData = {
      userAddress: `${userInfo.firstName} ${userInfo.lastName}, ${userInfo.userAddress}, ${userInfo.city}, ${userInfo.country}`,
      email: userInfo.email,
      phoneNumber: userInfo.phoneNumber,
      orderedItems: cartItems.map((item) => ({
        foodId: item.id,
        name: item.name,
        quantity: ctx?.quantities ? ctx.quantities[item.id] : 0,
        price: item.price * (ctx?.quantities ? ctx.quantities[item.id] : 0),
        category: item.category,
        description: item.description,
        imageUrl: item.imageUrl,
      })),
      amount: total,
      orderStatus: "Preparing",
    };

    try {
      const response = await placeOrder(orderData, ctx!.token);
      if (response.status === 201) {
        setPreferenceId(response.data.order.preferenceId);
      }
    } catch {
      toast.error("Error al realizar pedido. Intenta nuevamente");
    }
  };

  if (!ctx) return null;

  //CartItems
  const cartItems: FoodResponse[] = ctx?.foodList.filter(
    (food) => ctx.quantities && ctx?.quantities[food.id] > 0
  );

  const { delivery, tax, total } = calculateCartCosts(cartItems, ctx);

  return (
    <div className="container mt-4">
      <main>
        <div className="py-2 text-center">
          <img
            className="d-block mx-auto"
            src={assets.logo}
            alt={"logo"}
            width={98}
            height={98}
          />
        </div>
        <div className="row g-5">
          <div className="col-md-5 col-lg-4 order-md-last">
            <h4 className="d-flex justify-content-between align-items-center mb-3">
              <span className="text-primary">Tu carrito</span>
              <span className="badge bg-primary rounded-pill">
                {cartItems.length}
              </span>
            </h4>
            <ul className="list-group mb-3">
              {cartItems.map((item) => (
                <li
                  key={item.id}
                  className="list-group-item d-flex justify-content-between lh-sm"
                >
                  <div>
                    <h6 className="my-0">{item.name}</h6>
                    <small className="text-body-secondary">
                      Cantidad: {ctx.quantities && ctx.quantities[item.id]}
                    </small>
                  </div>
                  <span className="text-body-secondary">
                    ${ctx.quantities && item.price * ctx.quantities[item.id]}
                  </span>
                </li>
              ))}
              <li className="list-group-item d-flex justify-content-between">
                <div>
                  <small className="text-body-secondary">Delivery</small>
                </div>
                <span className="text-body-secondary">${delivery}</span>
              </li>
              <li className="list-group-item d-flex justify-content-between">
                <div>
                  <small className="text-body-secondary">Impuesto (19%)</small>
                </div>
                <span className="text-body-secondary">${tax}</span>
              </li>

              <li className="list-group-item d-flex justify-content-between">
                <span>Total (CLP)</span> <strong>${total}</strong>
              </li>
            </ul>
          </div>
          <div className="col-md-7 col-lg-8">
            <h4 className="mb-3">Dirección de facturación</h4>
            <form className="needs-validation" onSubmit={handleSubmit}>
              <div className="row g-3">
                <div className="col-sm-6">
                  <label htmlFor="firstName" className="form-label">
                    Nombre
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="firstName"
                    placeholder="Pedro"
                    onChange={(e) => handleChange(e)}
                    value={userInfo.firstName}
                    name="firstName"
                    required
                  />
                </div>
                <div className="col-sm-6">
                  <label htmlFor="lastName" className="form-label">
                    Apellido
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="lastName"
                    placeholder="Rodríguez"
                    onChange={(e) => handleChange(e)}
                    value={userInfo.lastName}
                    name="lastName"
                    required
                  />
                </div>
                <div className="col-12">
                  <label htmlFor="username" className="form-label">
                    Email
                  </label>
                  <div className="input-group has-validation">
                    <span className="input-group-text">@</span>
                    <input
                      type="email"
                      className="form-control"
                      id="email"
                      placeholder="Email"
                      onChange={(e) => handleChange(e)}
                      value={userInfo.email}
                      name="email"
                      required
                    />
                  </div>
                </div>

                <div className="col-12">
                  <label htmlFor="phone" className="form-label">
                    Teléfono
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="phone"
                    placeholder="56912345678"
                    onChange={(e) => handleChange(e)}
                    value={userInfo.phoneNumber}
                    name="phoneNumber"
                    required
                  />
                </div>
                <div className="col-12">
                  <label htmlFor="address" className="form-label">
                    Dirección
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="address"
                    placeholder="Calle abc 123"
                    onChange={(e) => handleChange(e)}
                    value={userInfo.userAddress}
                    name="userAddress"
                    required
                  />
                </div>
                <div className="col-md-5">
                  <label htmlFor="country" className="form-label">
                    País
                  </label>
                  <select
                    className="form-select"
                    id="country"
                    required
                    onChange={(e) => handleChange(e)}
                    value={userInfo.country}
                    name="country"
                    disabled
                  >
                    <option value={"Chile"}>Chile</option>
                  </select>
                </div>
                <div className="col-md-4">
                  <label htmlFor="state" className="form-label">
                    Ciudad
                  </label>
                  <select
                    className="form-select"
                    id="state"
                    required
                    onChange={(e) => handleChange(e)}
                    value={userInfo.city}
                    name="city"
                  >
                    <option value={""}>Escoge tu ciudad</option>
                    <option>Santiago</option>
                    <option>Valparaíso</option>
                    <option>Viña del Mar</option>
                    <option>Concepción</option>
                  </select>
                </div>
              </div>
              <hr className="my-4" />
              <button
                className="w-100 btn btn-primary btn-lg"
                type="submit"
                disabled={cartItems.length === 0}
              >
                Aceptar
              </button>
              {preferenceId && (
                <div>
                  <Wallet initialization={{ preferenceId }} />
                </div>
              )}
            </form>
          </div>
        </div>
      </main>
    </div>
  );
};

export default PlaceOrder;
