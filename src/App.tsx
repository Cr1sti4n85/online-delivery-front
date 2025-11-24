import { Route, Routes } from "react-router";
import AddFood from "./pages/AddFood";
import ListFoods from "./pages/ListFoods";
import Orders from "./pages/Orders";
import AdminMenubar from "./components/admin/AdminMenubar";
import Sidebar from "./components/admin/Sidebar";
import { useState } from "react";
import { ToastContainer } from "react-toastify";
import AdminRoute from "./components/AdminRoute";
import Menubar from "./components/client/Menubar";

const App = () => {
  const [visibleSidebar, setVisibleSidebar] = useState<boolean>(true);

  const toggleSidebar = () => {
    setVisibleSidebar(!visibleSidebar);
  };

  return (
    <>
      <AdminRoute>
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
                <Route path="/admin" element={<ListFoods />} />
              </Routes>
            </div>
          </div>
        </div>
      </AdminRoute>

      <div className="d-flex flex-column">
        <Menubar />
      </div>
    </>
  );
};

export default App;
