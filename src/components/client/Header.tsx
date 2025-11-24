import { Link } from "react-router";

const Header = () => {
  return (
    <div className="p-5 mb-4 bg-light rounded-3 mt-1">
      <div className="container-fuid py-5">
        <h1 className="display-5 fw-bold">Pide tu plato favorito aquí</h1>
        <p className="col-md-8 fs-4">Descubre las mejores comidas y tragos</p>
        <Link to="/explore" className="btn btn-primary btn-lg">
          Explorar
        </Link>
      </div>
    </div>
  );
};

export default Header;
