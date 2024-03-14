import { Link } from "react-router-dom";
import "./WarehousePage.scss";
import searchIcon from "../../assets/icons/search-24px.svg";
import deleteIcon from "../../assets/icons/delete_outline-24px.svg";
import editIcon from "../../assets/icons/edit-24px.svg";
import sortIcon from "../../assets/icons/sort-24px.svg";

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
            <img className="warehouses__search-icon" src={searchIcon} alt="search-icon" />
          </div>
          <button className="primary-button warehouses__add-button">
            + Add New Warehouse
          </button>
        </section>
      </section>
      {/* ---- Lists Section ---- */}
      <section className="warehouses-list-section">
        <ul className="warehouses-list">
          {/* list main headings */}
          <li className="warehouses-list__main-headings">
            <div className="warehouse-headers-wrap">
                <div className="name-address-headers">
                    <div className="main-headings-texts">
                        <h4 className="warehouse-headers">WAREHOUSE</h4>
                        <img className="sort-icon" src={sortIcon} alt="sort-icon"/>
                    </div>
                    <div className="main-headings-texts">
                        <h4 className="warehouse-headers">ADDRESS</h4>
                        <img className="sort-icon" src={sortIcon} alt="sort-icon"/>
                    </div>
                </div>
                <div className="contact-name-info-headers">
                    <div className="main-headings-texts">
                        <h4 className="warehouse-headers">CONTACT NAME</h4>
                        <img className="sort-icon" src={sortIcon} alt="sort-icon"/>
                    </div>
                    <div className="main-headings-texts contact-info-header">
                        <h4 className="warehouse-headers">CONTACT INFORMATION</h4>
                        <img className="sort-icon" src={sortIcon} alt="sort-icon"/>
                    </div>
                </div>
            </div>
            <h4 className="main-headings-texts action-text">ACTIONS</h4>
          </li>
          <li className="warehouses-list__item">
            {/* warehouses list details */}
            <section className="warehouse-details-wrap">
              <section className="name-address-wrap">
                <div className="heading-detail-wrap">
                  <h4 className="warehouses-list__heading">WAREHOUSE</h4>
                  <Link className="link-style warehouses-list__detail">
                    <p>Manhattan</p>
                    <span className="right-arrow"> </span>
                  </Link>
                </div>
                <div className="heading-detail-wrap">
                  <h4 className="warehouses-list__heading">ADDRESS</h4>
                  <p className="warehouses-list__detail">
                    503 Broadway, New York, USA
                  </p>
                </div>
              </section>
              <section className="contact-name-info-wrap">
                <div className="heading-detail-wrap">
                  <h4 className="warehouses-list__heading">CONTACT NAME</h4>
                  <p className="warehouses-list__detail contact-name">Parmin Aujla</p>
                </div>
                <div className="heading-detail-wrap">
                  <h4 className="warehouses-list__heading">
                    CONTACT INFORMATION
                  </h4>
                  <p className="warehouses-list__detail">+1 (629) 555-0129</p>
                  <p className="warehouses-list__detail">paujla@instock.com</p>
                </div>
              </section>
            </section>
            {/* icons */}
            <section className="icons-wrap">
              <img className="warehouses-list__delete-icon" src={deleteIcon} alt="delete-icon"/>
              <img className="warehouses-list__edit-icon" src={editIcon} alt="delete-icon"/>
            </section>
          </li>
        </ul>
      </section>
    </main>
  );
}
export default WarehousePage;
