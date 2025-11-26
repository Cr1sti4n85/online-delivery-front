import { Link } from "react-router";
import { assets } from "../../assets/assets";

const Sidebar = () => {
  return (
    <div className="border-end bg-white" id="sidebar-wrapper">
      <div className="sidebar-heading border-bottom bg-light">
        <img src={assets.logo} alt="logo" height={48} width={48} />
      </div>
      <div className="list-group list-group-flush">
        <Link
          className="list-group-item list-group-item-action list-group-item-light p-3"
          to={"/admin/add"}
        >
          <i className="bi bi-plus-circle me-2"></i> Agregar comida
        </Link>
        <Link
          className="list-group-item list-group-item-action list-group-item-light p-3"
          to={"/admin/list"}
        >
          <i className="bi bi-list-ul me-2"></i> Ver comidas
        </Link>
        <Link
          className="list-group-item list-group-item-action list-group-item-light p-3"
          to={"/admin/orders"}
        >
          <i className="bi bi-cart me-2"></i> Órdenes
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
