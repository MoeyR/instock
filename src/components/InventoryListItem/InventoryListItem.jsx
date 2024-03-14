import "./InventoryListItem.scss";
import deleteIcon from "../../assets/icons/delete_outline-24px.svg";
import editIcon from "../../assets/icons/edit-24px.svg";
import { Link } from "react-router-dom";

function InventoryListItem({ inventoryItem }) {
  return (
    <li className="warehouses-list__item">
      {/* warehouses list details */}
      <section className="warehouse-details-wrap">
        <div className="heading-detail-wrap">
          <h4 className="warehouses-list__heading">INVENTORY ITEM</h4>
          <Link className="link-style warehouses-list__detail">
            <p>{inventoryItem.item_name}</p>
            <span className="right-arrow"> </span>
          </Link>
        </div>
        <div className="heading-detail-wrap">
          <h4 className="warehouses-list__heading">CATEGORY</h4>
          <p className="warehouses-list__detail">{inventoryItem.category}</p>
        </div>

        <div className="heading-detail-wrap">
          <h4 className="warehouses-list__heading">STATUS</h4>
          <p className="warehouses-list__detail contact-name">
            {inventoryItem.status}
          </p>
        </div>
        <div className="heading-detail-wrap">
          <h4 className="warehouses-list__heading">QTY</h4>
          <p className="warehouses-list__detail">{inventoryItem.quantity}</p>
        </div>
        <div className="heading-detail-wrap">
          <h4 className="warehouses-list__heading">WAREHOUSE</h4>
          <p className="warehouses-list__detail">{inventoryItem.warehouse_name}</p>
        </div>
      </section>
      {/* icons */}
      <section className="icons-wrap">
        <img
          className="warehouses-list__delete-icon"
          src={deleteIcon}
          alt="delete-icon"
        />
        <img
          className="warehouses-list__edit-icon"
          src={editIcon}
          alt="delete-icon"
        />
      </section>
    </li>
  );
}

export default InventoryListItem;
