import "./InventoryListItem.scss";
import deleteIcon from "../../assets/icons/delete_outline-24px.svg";
import editIcon from "../../assets/icons/edit-24px.svg";
import { Link } from "react-router-dom";

function InventoryListItem({ inventoryItem }) {
  return (
    <li className="inventory-items">
      <div className="tablet-wrap">
        <section className="inventory-items__wrap">
          <div className="inventory-items__item-wrap">
            <h4 className="inventory-items__heading">INVENTORY ITEM</h4>
            <Link className="link-style inventory-items__detail">
              <p>{inventoryItem.item_name}</p>
              <span className="right-arrow"> </span>
            </Link>
          </div>
          <div className="inventory-items__item-wrap">
            <h4 className="inventory-items__heading">CATEGORY</h4>
            <p className="inventory-items__detail">{inventoryItem.category}</p>
          </div>
          <div className="qty-warehouse">
            <div className="inventory-items__item-wrap">
              <h4 className="inventory-items__heading">STATUS</h4>
              <p
                className={`inventory-items__detail ${
                  inventoryItem.status === "In Stock"
                    ? "in-stock"
                    : "out-of-stock"
                }`}
              >
                {inventoryItem.status}
              </p>
            </div>

            <div className="inventory-items__item-wrap">
              <h4 className="inventory-items__heading">QTY</h4>
              <p className="inventory-items__detail">
                {inventoryItem.quantity}
              </p>
            </div>
          </div>

          <div className="inventory-items__item-wrap">
            <h4 className="inventory-items__heading">WAREHOUSE</h4>
            <p className="inventory-items__detail">
              {inventoryItem.warehouse_name}
            </p>
          </div>
        </section>

        {/* icons */}
        <div className="inventory-items__item-wrap">
          <div className="inventory-items__icons-wrap">
            <img
              className="inventory-items__heading__delete-icon"
              src={deleteIcon}
              alt="delete icon"
            />
            <img
              className="inventory-items__heading__edit-icon"
              src={editIcon}
              alt="delete icon"
            />
          </div>
        </div>
      </div>
    </li>
  );
}

export default InventoryListItem;
