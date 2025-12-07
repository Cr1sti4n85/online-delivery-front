import { Link, useNavigate } from "react-router";
import { assets } from "../../assets/assets";
import { useContext, useState } from "react";
import { StoreContext } from "../../context/storeContext";
import { Dropdown } from "react-bootstrap";

const Menubar = () => {
  const [active, setActive] = useState("home");
  const ctx = useContext(StoreContext);
  const navigate = useNavigate();

  const uniqueItemsInCart =
    ctx?.quantities &&
    Object.values(ctx.quantities).filter((item) => item > 0).length;

  const logout = () => {
    localStorage.removeItem("jwt");
    ctx?.setToken("");
    navigate("/");
  };

  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container">
        <Link to={"/"}>
          <img
            src={assets.logo}
            alt="logo"
            className="mx-2"
            height={48}
            width={48}
          />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link
                className={
                  active === "home" ? "nav-link fw-bold active" : "nav-link"
                }
                to="/"
                onClick={() => setActive("home")}
              >
                Home
              </Link>
            </li>

            <li className="nav-item">
              <Link
                className={
                  active === "explore" ? "nav-link fw-bold active" : "nav-link"
                }
                to="/explore"
                onClick={() => setActive("explore")}
              >
                Explorar
              </Link>
            </li>

            <li className="nav-item">
              <Link
                className={
                  active === "contact" ? "nav-link fw-bold active" : "nav-link"
                }
                to="/contact"
                onClick={() => setActive("contact")}
              >
                Contacto
              </Link>
            </li>
          </ul>
          <div className="d-flex align-items-center menubar-right gap-4">
            <Link to={"/cart"}>
              <div className="position-relative">
                <i className="bi bi-cart4" style={{ fontSize: "1.5rem" }}></i>
                <span
                  className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
                  style={{ fontSize: "0.75rem" }}
                >
                  {uniqueItemsInCart}
                </span>
              </div>
            </Link>
            {!ctx?.token ? (
              <>
                <button
                  className="btn btn-outline-primary"
                  onClick={() => navigate("/login")}
                >
                  Login
                </button>
                <button
                  className="btn btn-outline-success"
                  onClick={() => navigate("/register")}
                >
                  Registro
                </button>
              </>
            ) : (
              <Dropdown>
                <Dropdown.Toggle id="dropdown-basic" className="rounded-full">
                  Opciones
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item onClick={() => navigate("/orders")}>
                    Órdenes
                  </Dropdown.Item>
                  <Dropdown.Item onClick={logout}>Cerrar sesión</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Menubar;
