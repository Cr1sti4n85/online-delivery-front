import { useContext } from "react";
import { StoreContext } from "../../context/storeContext";
import type { FoodResponse } from "../../types";
import { Link, useNavigate } from "react-router";
import { calculateCartCosts } from "../../util/cartUtils";

const Cart = () => {
  const ctx = useContext(StoreContext);
  const navigate = useNavigate();
  if (!ctx) return null;

  //CartItems
  const cartItems: FoodResponse[] = ctx?.foodList.filter(
    (food) => ctx.quantities && ctx?.quantities[food.id] > 0
  );

  const { subTotal, delivery, tax, total } = calculateCartCosts(cartItems, ctx);

  return (
    <div className="container py-5">
      <h1 className="mb-5">Tu carrito de compras</h1>
      <div className="row">
        <div className="col-lg-8">
          {/* Cart Items */}
          {cartItems.length === 0 ? (
            <p>Tu carrito está vacío</p>
          ) : (
            <div className="card mb-4">
              <div className="card-body">
                {cartItems.map((food) => (
                  <div key={food.id} className="row cart-item mb-3">
                    <div className="col-md-3">
                      <img
                        src={food.imageUrl}
                        alt={food.name}
                        className="img-fluid rounded"
                        width={100}
                      />
                    </div>
                    <div className="col-md-5">
                      <h5 className="card-title">{food.name}</h5>
                      <p className="text-muted">Categoría: {food.category}</p>
                    </div>
                    <div className="col-md-2">
                      <div className="input-group">
                        <button
                          className="btn btn-outline-secondary btn-sm"
                          type="button"
                          onClick={() => ctx.decreaseQty(food.id)}
                        >
                          -
                        </button>
                        <input
                          style={{ maxWidth: "100px" }}
                          type="text"
                          className="form-control  form-control-sm text-center quantity-input"
                          value={
                            (ctx?.quantities && ctx.quantities[food.id]) || 0
                          }
                          readOnly
                        />
                        <button
                          className="btn btn-outline-secondary btn-sm"
                          type="button"
                          onClick={() => ctx.increaseQty(food.id)}
                        >
                          +
                        </button>
                      </div>
                    </div>
                    <div className="col-md-2 text-end">
                      <p className="fw-bold">
                        $
                        {ctx.quantities && food.price * ctx.quantities[food.id]}
                      </p>
                      <button
                        className="btn btn-sm btn-outline-danger"
                        onClick={() => ctx.removeFromCart(food.id)}
                      >
                        <i className="bi bi-trash"></i>
                      </button>
                    </div>
                    <hr />
                  </div>
                ))}
              </div>
            </div>
          )}
          {/* Continue Shopping Button */}
          <div className="text-start mb-4">
            <Link to={"/"} className="btn btn-outline-primary">
              <i className="bi bi-arrow-left me-2"></i>Continua comprando
            </Link>
          </div>
        </div>
        <div className="col-lg-4">
          {/* Cart Summary */}
          <div className="card cart-summary">
            <div className="card-body">
              <h5 className="card-title mb-4">Resumen de compra</h5>
              <div className="d-flex justify-content-between mb-3">
                <span>Subtotal</span>
                <span>${subTotal}</span>
              </div>
              <div className="d-flex justify-content-between mb-3">
                <span>Delivery</span>
                <span>${delivery}</span>
              </div>
              <div className="d-flex justify-content-between mb-3">
                <span>Impuesto</span>
                <span>${tax}</span>
              </div>
              <hr />
              <div className="d-flex justify-content-between mb-4">
                <strong>Total</strong>
                <strong>${total}</strong>
              </div>
              <button
                className="btn btn-primary w-100"
                disabled={cartItems.length === 0}
                onClick={() => navigate("/order")}
              >
                Continuar
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
