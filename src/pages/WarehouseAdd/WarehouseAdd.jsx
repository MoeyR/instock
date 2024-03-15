import "./WarehouseAdd.scss";
import { Link } from "react-router-dom";
import backIcon from "../../assets/icons/arrow_back-24px.svg";

function WarehouseAdd() {
  return (
    <section className="main">
      {/* ----- title section ----- */}
      <section className="title-section">
        <Link to={"/"} className="title-section__back-link">
          <img
            className="title-section__back-icon"
            src={backIcon}
            alt="back-button"
          />
        </Link>
        <h1 className="title-section__page-title">Add New Warehouse</h1>
      </section>
      {/* ----- form ----- */}
      <form className="form">
        <section className="form-wrap">
          {/* warehouse details */}
          <section className="form__label-inputs-wrap">
            <h2 className="subtitle">Warehouse Details</h2>
            <label className="form__labels">
              <h3 className="label-text">Warehouse Name</h3>
              <input
                className="form-input"
                type="text"
                id="warehouseName"
                placeholder="Warehouse Name"
              />
            </label>
            <label className="form__labels" htmlFor="address">
              <h3 className="label-text">Street Address</h3>
              <input
                className="form-input"
                type="text"
                id="address"
                placeholder="Street Address"
              />
            </label>
            <label className="form__labels" htmlFor="city">
              <h3 className="label-text">City</h3>
              <input
                className="form-input"
                type="text"
                id="city"
                placeholder="City"
              />
            </label>
            <label className="form__labels" htmlFor="country">
              <h3 className="label-text">Country</h3>
              <input
                className="form-input"
                type="text"
                id="country"
                placeholder="Country"
              />
            </label>
          </section>
          {/* contact details */}
          <section className="form__label-inputs-wrap">
            <h2 className="subtitle">Contact Details</h2>
            <label className="form__labels" htmlFor="contactName">
              <h3 className="label-text">Contact Name</h3>
              <input
                className="form-input"
                type="text"
                id="contactName"
                placeholder="Contact Name"
              />
            </label>
            <label className="form__labels" htmlFor="position">
              <h3 className="label-text">Position</h3>
              <input
                className="form-input"
                type="text"
                id="position"
                placeholder="Position"
              />
            </label>
            <label className="form__labels" htmlFor="phoneNumber">
              <h3 className="label-text">Phone Number</h3>
              <input
                className="form-input"
                type="text"
                id="phoneNumber"
                placeholder="Phone Number"
              />
            </label>
            <label className="form__labels" htmlFor="email">
              <h3 className="label-text">Email</h3>
              <input
                className="form-input"
                type="text"
                id="email"
                placeholder="Email"
              />
            </label>
          </section>
        </section>
        <section className="form__buttons">
          <button className="secondary-button">Cancel</button>
          <button className="primary-button">+ Add Warehouse</button>
        </section>
      </form>
    </section>
  );
}
export default WarehouseAdd;
