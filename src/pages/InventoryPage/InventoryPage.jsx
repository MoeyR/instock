import "./inventoryPage.scss";
import searchIcon from "../../assets/icons/search-24px.svg";
import InventoryList from "../../components/InventoryList/InventoryList";
import { Link } from "react-router-dom";

function InventoryPage() {
  return (
    <main className="inventory-container">
      {/* ---- Title Section ---- */}
      <section className="inv-page-title-section">
        <h1 className="inv-title">Inventory</h1>
        <section className="search-button-wrap-inv">
          <div className="search-bar-wrap">
            <input
              className="inv-search-bar"
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
      <section className="inventory-main-section">
        <InventoryList />
      </section>
    </main>
  );
}
export default InventoryPage;
