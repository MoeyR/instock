import "./InventoryListItem.scss";
import deleteIcon from "../../assets/icons/delete_outline-24px.svg";
import editIcon from "../../assets/icons/edit-24px.svg";
import { Link } from "react-router-dom";
import { useState } from "react";
import DeleteModal from "../DeleteInventoryModal/DeleteInventoryModal";

function InventoryListItem({ inventoryItem }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };
  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleConfirm = async (event) => {
    closeModal();
  };

  return (
    <>
      <li className="inventory-items">
        <div className="tablet-wrap">
          <section className="inventory-items__wrap">
            <div className="name-category">
              <div className="inventory-items__item-wrap item-link-wrap">
                  <h4 className="inventory-items__heading">INVENTORY ITEM</h4>
                  <Link
                    className="link-style inventory-items__detail"
                    to={`/inventory/${inventoryItem.id}`}
                  >
                    <p>{inventoryItem.item_name}</p>
                    <span className="right-arrow"> </span>
                  </Link>
                </div>
              
              <div className="inventory-items__item-wrap">
                <h4 className="inventory-items__heading">CATEGORY</h4>
                <p className="inventory-items__detail">
                  {inventoryItem.category}
                </p>
              </div>
            </div>
            <div className="status-qty-warehouse">
              <div className="inventory-items__item-wrap status-wrap">
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

              <div className="inventory-items__item-wrap">
                <h4 className="inventory-items__heading">WAREHOUSE</h4>
                <p className="inventory-items__detail">
                  {inventoryItem.warehouse_name}
                </p>
              </div>
            </div>
          </section>

          {/* icons */}
          <div className="inventory-items__icons-wrap">
            <img
              className="delete-icon"
              src={deleteIcon}
              alt="delete icon"
              onClick={openModal}
            />
            <img className="edit-icon" src={editIcon} alt="edit icon" />
          </div>
        </div>
      </li>
      <DeleteModal
        name={inventoryItem.item_name}
        id={inventoryItem.id}
        isOpen={isModalOpen}
        onCancel={closeModal}
        onConfirm={handleConfirm}
      />
    </>
  );
}

export default InventoryListItem;