import './App.scss';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import WarehousePage from './pages/WarehousePage/WarehousePage';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        {/* <Header /> */}
        <Routes>

          <Route path="/" element={<WarehousePage />}/>
          <Route path="/warehouses" element={<WarehousePage />}/>
          {/* <Route path="/warehouses/:id" element={<WarehouseDetailPage />}/>
          <Route path="/warehouses/:id/edit" element={<WarehouseEdit />}/>
          <Route path="/warehouses/add" element={<WareHouseAdd />}/>

          <Route path="/inventory" element={<InventoryPage />}/>
          <Route path="/inventory/:id" element={<InventoryDetailPage />}/>
          <Route path="/inventory/:id/edit" element={<InventoryEdit />}/>
          <Route path="/inventory/add" element={<InventoryAdd />}/> */}
        </Routes>
        {/* <Footer /> */}
      </BrowserRouter>
    </div>
  );
}

export default App;
