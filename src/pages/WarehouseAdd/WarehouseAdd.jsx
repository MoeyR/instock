import "./WarehouseAdd.scss";
import { Link } from "react-router-dom";
import backIcon from "../../assets/icons/arrow_back-24px.svg";
import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import errorIcon from "../../assets/icons/error-24px.svg";

function WarehouseAdd() {
  const BASE_URL = "http://localhost:8080";

  const navigate = useNavigate();
  const [warehouseName, setWarehouseName] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");
  const [contactName, setContactName] = useState("");
  const [position, setPosition] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");

  const [errorMessage, setErrorMessage] = useState("");
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [hasError, setHasError] = useState(false);

  const handleWarehouseNameChange = (event) => {
    setWarehouseName(event.target.value);
  };

  const handleAddressChange = (event) => {
    setAddress(event.target.value);
  };

  const handleCityChange = (event) => {
    setCity(event.target.value);
  };

  const handleCountryChange = (event) => {
    setCountry(event.target.value);
  };

  const handleContactNameChange = (event) => {
    setContactName(event.target.value);
  };

  const handlePositionChange = (event) => {
    setPosition(event.target.value);
  };

  const handlePhoneChange = (event) => {
    setPhoneNumber(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const phoneFormat = /^[0-9]{10}$/;
  const emailFormat = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  //form submit
  const submitAddWarehouse = async (event) => {
    event.preventDefault();
    // form validation
    if (
      !warehouseName.trim() ||
      !address.trim() ||
      !city.trim() ||
      !country.trim() ||
      !contactName.trim() ||
      !position.trim() ||
      !phoneNumber.trim() ||
      !email.trim()
    ) {
      setErrorMessage("This field is required");
    } else if (!phoneFormat.test(phoneNumber)) {
      setErrorMessage("Phone number: must be 10 digits, with no space");
    } else if (!emailFormat.test(email)) {
      setErrorMessage("Please enter a valid email");
    } else {
      setErrorMessage("");
      try {
        const formattedNumber = `+1 (${phoneNumber.substring(
          0,
          3
        )}) ${phoneNumber.substring(3, 6)}-${phoneNumber.substring(6)}`;
        const newWarehouse = {
          warehouse_name: warehouseName,
          address,
          city,
          country,
          contact_name: contactName,
          contact_position: position,
          contact_phone: formattedNumber,
          contact_email: email,
        };

        await axios.post(`${BASE_URL}/api/warehouses`, newWarehouse);

        setSubmitSuccess(true);
        setTimeout(() => {
          navigate("/");
        }, 3000);
      } catch (error) {
        setHasError(true);
      }
    }
  };

  const clearForm = () => {
    setWarehouseName("");
    setAddress("");
    setCity("");
    setCountry("");
    setContactName("");
    setPosition("");
    setPhoneNumber("");
    setEmail("");
  };

  return (
    <section className="warehouse-add-main">
      {/* ----- title section ----- */}
      <section className="title-section">
        <div className="title-icon-wrap">
          <Link to={"/"} className="title-section__back-link">
            <img
              className="title-section__back-icon"
              src={backIcon}
              alt="back-button"
            />
          </Link>
          <h1 className="title-section__add-warehouse-page-title">
            Add New Warehouse
          </h1>
        </div>
      </section>
      {/* ----- form ----- */}
      <form
        className="form main-section-short-title"
        method="POST"
        onSubmit={submitAddWarehouse}
      >
        <section className="form-wrap">
          {/* warehouse details */}
          <section className="form__label-inputs-wrap">
            <h2 className="subtitle">Warehouse Details</h2>
            <label className="form__labels">
              <h3 className="label-text">Warehouse Name</h3>
              <div className="form__error-container">
                <input
                  className="form-input"
                  type="text"
                  name="warehouseName"
                  id="warehouseName"
                  placeholder="Warehouse Name"
                  onChange={handleWarehouseNameChange}
                />
                {warehouseName.trim() === "" && errorMessage && (
                  <div className="form__error-wrapper">
                    <img
                      className="error-icon"
                      src={errorIcon}
                      alt="Error Icon"
                    />
                    <p className="error-message">{errorMessage}</p>
                  </div>
                )}
              </div>
            </label>

            <label className="form__labels" htmlFor="address">
              <h3 className="label-text">Street Address</h3>
              <div className="form__error-container">
                <input
                  className="form-input"
                  type="text"
                  name="address"
                  id="address"
                  placeholder="Street Address"
                  onChange={handleAddressChange}
                />
                {address.trim() === "" && errorMessage && (
                  <div className="form__error-wrapper">
                    <img
                      className="error-icon"
                      src={errorIcon}
                      alt="Error Icon"
                    />
                    <p className="error-message">{errorMessage}</p>
                  </div>
                )}
              </div>
            </label>
            <label className="form__labels" htmlFor="city">
              <h3 className="label-text">City</h3>
              <div className="form__error-container">
                <input
                  className="form-input"
                  type="text"
                  name="city"
                  id="city"
                  placeholder="City"
                  onChange={handleCityChange}
                />
                {city.trim() === "" && errorMessage && (
                  <div className="form__error-wrapper">
                    <img
                      className="error-icon"
                      src={errorIcon}
                      alt="Error Icon"
                    />
                    <p className="error-message">{errorMessage}</p>
                  </div>
                )}
              </div>
            </label>
            <label className="form__labels" htmlFor="country">
              <h3 className="label-text">Country</h3>
              <div className="form__error-container">
                <input
                  className="form-input"
                  type="text"
                  name="country"
                  id="country"
                  placeholder="Country"
                  onChange={handleCountryChange}
                />
                {country.trim() === "" && errorMessage && (
                  <div className="form__error-wrapper">
                    <img
                      className="error-icon"
                      src={errorIcon}
                      alt="Error Icon"
                    />
                    <p className="error-message">{errorMessage}</p>
                  </div>
                )}
              </div>
            </label>
          </section>
          {/* contact details */}
          <section className="form__label-inputs-wrap">
            <h2 className="subtitle">Contact Details</h2>
            <label className="form__labels" htmlFor="contactName">
              <div className="form__error-container">
                <h3 className="label-text">Contact Name</h3>
                <input
                  className="form-input"
                  type="text"
                  name="contactName"
                  id="contactName"
                  placeholder="Contact Name"
                  onChange={handleContactNameChange}
                />
                {contactName.trim() === "" && errorMessage && (
                  <div className="form__error-wrapper">
                    <img
                      className="error-icon"
                      src={errorIcon}
                      alt="Error Icon"
                    />
                    <p className="error-message">{errorMessage}</p>
                  </div>
                )}
              </div>
            </label>
            <label className="form__labels" htmlFor="position">
              <h3 className="label-text">Position</h3>
              <div className="form__error-container">
                <input
                  className="form-input"
                  type="text"
                  name="position"
                  id="position"
                  placeholder="Position"
                  onChange={handlePositionChange}
                />
                {position.trim() === "" && errorMessage && (
                  <div className="form__error-wrapper">
                    <img
                      className="error-icon"
                      src={errorIcon}
                      alt="Error Icon"
                    />
                    <p className="error-message">{errorMessage}</p>
                  </div>
                )}
              </div>
            </label>
            <label className="form__labels" htmlFor="phoneNumber">
              <h3 className="label-text">Phone Number</h3>
              <div className="form__error-container">
                <input
                  className="form-input"
                  type="text"
                  name="phoneNumber"
                  id="phoneNumber"
                  placeholder="Phone Number"
                  onChange={handlePhoneChange}
                />
                {!phoneNumber.trim() && errorMessage && (
                  <div className="form__error-wrapper">
                    <img
                      className="error-icon"
                      src={errorIcon}
                      alt="Error Icon"
                    />
                    <p className="error-message">This field is required</p>
                  </div>
                )}
                {phoneNumber.trim() && !phoneFormat.test(phoneNumber) && (
                  <div className="form__error-wrapper">
                    <img
                      className="error-icon"
                      src={errorIcon}
                      alt="Error Icon"
                    />
                    <p className="error-message">
                      Phone number: must be 10 digits, with no space
                    </p>
                  </div>
                )}
              </div>
            </label>
            <label className="form__labels" htmlFor="email">
              <h3 className="label-text">Email</h3>
              <div className="form__error-container">
                <input
                  className="form-input"
                  type="text"
                  name="email"
                  id="email"
                  placeholder="Email"
                  onChange={handleEmailChange}
                />
                {!email.trim() &&
                  errorMessage && ( // Check if email is empty and error message exists
                    <div className="form__error-wrapper">
                      <img
                        className="error-icon"
                        src={errorIcon}
                        alt="Error Icon"
                      />
                      <p className="error-message">This field is required</p>
                    </div>
                  )}
                {email.trim() &&
                  !emailFormat.test(email) && ( // Check if email is not empty and format is invalid
                    <div className="form__error-wrapper">
                      <img
                        className="error-icon"
                        src={errorIcon}
                        alt="Error Icon"
                      />
                      <p className="error-message">
                        Please enter a valid email
                      </p>
                    </div>
                  )}
              </div>
            </label>
          </section>
        </section>
        {/* form buttons */}
        <section className="button-message-wrap">
          {submitSuccess && (
            <div className="success-message">
              Successfully added. Taking you to the Warehouse List page
            </div>
          )}
          {hasError && (
            <div className="error-message">
              Form has errors, please come back later
            </div>
          )}

          <section className="buttons-wrap">
            <button className="secondary-button" onClick={clearForm}>
              Cancel
            </button>
            <button className="primary-button" type="submit">
              + Add Warehouse
            </button>
          </section>
        </section>
      </form>
    </section>
  );
}

export default WarehouseAdd;
