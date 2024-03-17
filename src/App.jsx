import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import WarehousePage from "./pages/WarehousePage/WarehousePage";
import WarehouseDetailPage from "./pages/WarehouseDetailPage/WarehouseDetailPage";
import WarehouseEdit from "./pages/WarehouseEdit/WarehouseEdit";
import WarehouseAdd from "./pages/WarehouseAdd/WarehouseAdd";
import InventoryPage from "./pages/InventoryPage/InventoryPage";
import InventoryDetailPage from "./pages/InventoryDetailPage/InventoryDetailPage";
import InventoryEdit from "./pages/InventoryEdit/InventoryEdit";
import InventoryAdd from "./pages/InventoryAdd/InventoryAdd";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<WarehousePage />} />
          <Route path="/warehouses" element={<WarehousePage />} />
          <Route path="/warehouses/:id" element={<WarehouseDetailPage />} />
          <Route path="/warehouses/:id/edit" element={<WarehouseEdit />} />
          <Route path="/warehouses/add" element={<WarehouseAdd />} />

          <Route path="/inventory" element={<InventoryPage />} />
          <Route path="/inventory/:id" element={<InventoryDetailPage />} />
          <Route path="/inventory/:id/edit" element={<InventoryEdit />} />
          <Route path="/inventory/add" element={<InventoryAdd />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
