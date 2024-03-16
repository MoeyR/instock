import { Link } from "react-router-dom";
import "./WarehousePage.scss";
import searchIcon from "../../assets/icons/search-24px.svg";
import WarehouseList from "../../components/WarehouseList/WarehouseList";

function WarehousePage() {
  return (
    <main className="warehouses">
      {/* ---- Title Section ---- */}
      <section className="warehouses-title-section-wrap">
        <h1 className="warehouses__title">Warehouses</h1>
        <section className="search-button-wrap">
          <div className="search-bar-wrap">
            <input
              className="form-input warehouses__search-bar"
              type="search"
              placeholder="Search..."
            />
            <img
              className="warehouses__search-icon"
              src={searchIcon}
              alt="search-icon"
            />
          </div>
          <Link to={`/warehouses/add`}>
            <button className="primary-button warehouses__add-button">
              + Add New Warehouse
            </button>
          </Link>
        </section>
      </section>
      {/* ---- Lists Section ---- */}
      <section className="warehouses-list-section">
        <WarehouseList />
      </section>
    </main>
  );
}
export default WarehousePage;
