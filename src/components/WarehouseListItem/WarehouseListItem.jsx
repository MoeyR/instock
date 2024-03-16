import "./WarehouseListItem.scss";
import deleteIcon from "../../assets/icons/delete_outline-24px.svg";
import editIcon from "../../assets/icons/edit-24px.svg";
import { Link} from "react-router-dom";
import { useState } from "react";
import DeleteModal from "../DeleteWarehouseModal/DeleteWarehouseModal";

function WarehouseListItem({ warehouse }) {
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
      <li className="warehouses-list__item">
        {/* warehouses list details */}
        <section className="warehouse-details-wrap">
          <section className="name-address-wrap">
            <div className="heading-detail-wrap">
              <h4 className="warehouses-list__heading">WAREHOUSE</h4>
              <Link
                className="link-style warehouses-list__detail"
                to={`/warehouses/${warehouse.id}`}
              >
                <p>{warehouse.warehouse_name}</p>
                <span className="right-arrow"> </span>
              </Link>
            </div>
            <div className="heading-detail-wrap">
              <h4 className="warehouses-list__heading">ADDRESS</h4>
              <p className="warehouses-list__detail">
                {`${warehouse.address}, ${warehouse.city}, ${warehouse.country}`}
              </p>
            </div>
          </section>
          <section className="contact-name-info-wrap">
            <div className="heading-detail-wrap">
              <h4 className="warehouses-list__heading">CONTACT NAME</h4>
              <p className="warehouses-list__detail contact-name">
                {warehouse.contact_name}
              </p>
            </div>
            <div className="heading-detail-wrap">
              <h4 className="warehouses-list__heading">CONTACT INFORMATION</h4>
              <p className="warehouses-list__detail">
                {warehouse.contact_phone}
              </p>
              <p className="warehouses-list__detail">
                {warehouse.contact_email}
              </p>
            </div>
          </section>
        </section>
        {/* icons */}
        <section className="icons-wrap">
          <img
            className="warehouses-list__delete-icon"
            src={deleteIcon}
            alt="delete-icon"
            onClick={openModal}
          />
          <img
            className="warehouses-list__edit-icon"
            src={editIcon}
            alt="edit-icon"
          />
        </section>
      </li>
      <DeleteModal
        name={warehouse.warehouse_name}
        id={warehouse.id}
        isOpen={isModalOpen}
        onCancel={closeModal}
        onConfirm={handleConfirm}
      />
    </>
  );
}

export default WarehouseListItem;
