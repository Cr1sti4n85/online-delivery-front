import { Link } from "react-router";
import { assets } from "../../assets/assets";

const Menubar = () => {
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
              <Link className="nav-link" to="/">
                Home
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/explore">
                Explorar
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/contact">
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
                  3
                </span>
              </div>
            </Link>
            <button className="btn btn-outline-primary">Login</button>
            <button className="btn btn-outline-success">Registro</button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Menubar;
