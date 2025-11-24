import { Route, Routes } from "react-router";
import AddFood from "./pages/AddFood";
import ListFoods from "./pages/ListFoods";
import Orders from "./pages/Orders";
import Menubar from "./components/Menubar";
import Sidebar from "./components/Sidebar";
import { useState } from "react";
import { ToastContainer } from "react-toastify";

const App = () => {
  const [visibleSidebar, setVisibleSidebar] = useState<boolean>(true);

  const toggleSidebar = () => {
    setVisibleSidebar(!visibleSidebar);
  };

  return (
    <div className="d-flex" id="wrapper">
      <Sidebar visibleSidebar={visibleSidebar} />
      <div id="page-content-wrapper">
        <Menubar toggleSidebar={toggleSidebar} />
        <ToastContainer />
        <div className="container-fluid">
          <Routes>
            <Route path="/add" element={<AddFood />} />
            <Route path="/list" element={<ListFoods />} />
            <Route path="/orders" element={<Orders />} />
            <Route path="/" element={<ListFoods />} />
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default App;
