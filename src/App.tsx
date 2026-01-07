import { Route, Routes, useLocation } from "react-router";
import AddFood from "./pages/Admin/AddFood";
import ListFoods from "./pages/Admin/ListFoods";
import Orders from "./pages/Admin/Orders";
import AdminMenubar from "./components/admin/AdminMenubar";
import Sidebar from "./components/admin/Sidebar";
import { ToastContainer } from "react-toastify";
import Menubar from "./components/client/Menubar";
import Home from "./pages/Client/Home";
import Explore from "./pages/Client/Explore";
import Contact from "./pages/Client/Contact";
import FoodDetails from "./pages/Client/FoodDetails";
import Cart from "./pages/Client/Cart";
import PlaceOrder from "./pages/Client/PlaceOrder";
import Login from "./pages/Client/Login";
import Register from "./pages/Client/Register";
import Success from "./pages/Client/Success";
import MyOrders from "./pages/Client/MyOrders";
import { useContext } from "react";
import { StoreContext } from "./context/storeContext";

const App = () => {
  const token = useContext(StoreContext)?.token;
  const location = useLocation();
  const path = location.pathname;

  return (
    <>
      {path.startsWith("/admin") ? (
        <div className="d-flex" id="wrapper">
          <Sidebar />
          <div id="page-content-wrapper">
            <AdminMenubar />
            <ToastContainer />
            <div className="container-fluid">
              <Routes>
                <Route path="/admin/add" element={<AddFood />} />
                <Route path="/admin/list" element={<ListFoods />} />
                <Route path="/admin/orders" element={<Orders />} />
                <Route path="/admin" element={<ListFoods />} />
              </Routes>
            </div>
          </div>
        </div>
      ) : (
        <div className="d-flex flex-column">
          <Menubar />
          <ToastContainer />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/explore" element={<Explore />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/food/:id" element={<FoodDetails />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/order" element={token ? <PlaceOrder /> : <Login />} />
            <Route path="/login" element={token ? <Home /> : <Login />} />
            <Route path="/register" element={token ? <Home /> : <Register />} />
            <Route path="/payment/success" element={<Success />} />
            <Route
              path="/my-orders"
              element={token ? <MyOrders /> : <Login />}
            />
          </Routes>
        </div>
      )}
    </>
  );
};

export default App;
