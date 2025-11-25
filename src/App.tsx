import { Route, Routes } from "react-router";
import AddFood from "./pages/AddFood";
import ListFoods from "./pages/ListFoods";
import Orders from "./pages/Orders";
import AdminMenubar from "./components/admin/AdminMenubar";
import Sidebar from "./components/admin/Sidebar";
import { useState } from "react";
import { ToastContainer } from "react-toastify";
import Menubar from "./components/client/Menubar";
import Home from "./pages/Client/Home";
import Explore from "./pages/Client/Explore";
import Contact from "./pages/Client/Contact";
import FoodDetails from "./pages/Client/FoodDetails";

const App = () => {
  const [visibleSidebar, setVisibleSidebar] = useState<boolean>(true);
  const isAdmin = true;
  const toggleSidebar = () => {
    setVisibleSidebar(!visibleSidebar);
  };

  return (
    <>
      {isAdmin ? (
        <div className="d-flex" id="wrapper">
          <Sidebar visibleSidebar={visibleSidebar} />
          <div id="page-content-wrapper">
            <AdminMenubar toggleSidebar={toggleSidebar} />
            <ToastContainer />
            <div className="container-fluid">
              <Routes>
                <Route path="/admin/add" element={<AddFood />} />
                <Route path="/admin/list" element={<ListFoods />} />
                <Route path="/admin/orders" element={<Orders />} />
                <Route path="/" element={<ListFoods />} />
              </Routes>
            </div>
          </div>
        </div>
      ) : (
        <div className="d-flex flex-column">
          <Menubar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/explore" element={<Explore />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/food/:id" element={<FoodDetails />} />
          </Routes>
        </div>
      )}
    </>
  );
};

export default App;
