import "./inventoryPage.scss";
import searchIcon from "../../assets/icons/search-24px.svg";
import InventoryList from "../../components/InventoryList/InventoryList";
import { Link } from "react-router-dom";

function InventoryPage() {
  return (
    <main className="warehouses">
      {/* ---- Title Section ---- */}
      <section className="warehouses-title-section-wrap">
        <h1 className="warehouses__title">Inventory</h1>
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
          <Link to="/inventory/add">
            <button className="primary-button warehouses__add-button">
              + Add New Item
            </button>
          </Link>
        </section>
      </section>
      {/* ---- Lists Section ---- */}
      <section className="warehouses-list-section">
        <InventoryList />
      </section>
    </main>
  );
}
export default InventoryPage;
