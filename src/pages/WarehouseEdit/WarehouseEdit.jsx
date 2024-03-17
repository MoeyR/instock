import React, { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import backIcon from "../../assets/icons/arrow_back-24px.svg";
import errorIcon from "../../assets/icons/error-24px.svg";
import axios from "axios";
import "./WarehouseEdit.scss";

function WarehouseEdit() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [warehouseData, setWarehouseData] = useState({
    warehouse_name: "",
    address: "",
    city: "",
    country: "",
    contact_name: "",
    contact_position: "",
    contact_phone: "",
    contact_email: "",
  });
  const [errorMessage, setErrorMessage] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  const phoneFormat = /^\+\d{1,3} \(\d{3}\) \d{3}-\d{4}$/;
  const emailFormat = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  useEffect(() => {
    const fetchWarehouseData = async () => {
      try {
        const response = await axios.get(
          `http://localhost:8080/api/warehouses/${id}`
        );
        setWarehouseData(response.data);
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching warehouse data:", error);
        setIsLoading(false);
      }
    };

    fetchWarehouseData();
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { id, ...requestData } = warehouseData;
    // Form validation
    if (
      !warehouseData.warehouse_name.trim() ||
      !warehouseData.address.trim() ||
      !warehouseData.city.trim() ||
      !warehouseData.country.trim() ||
      !warehouseData.contact_name.trim() ||
      !warehouseData.contact_position.trim() ||
      !warehouseData.contact_phone.trim() ||
      !warehouseData.contact_email.trim()
    ) {
      setErrorMessage("All fields are required");
      return;
    }

    if (!phoneFormat.test(warehouseData.contact_phone)) {
      setErrorMessage("Phone number must be in the format +1 (123) 456-7890");
      return;
    }

    if (!emailFormat.test(warehouseData.contact_email)) {
      setErrorMessage("Please enter a valid email address");
      return;
    }

    // Clear error message if form is valid
    setErrorMessage("");

    try {
      await axios.put(
        `http://localhost:8080/api/warehouses/${id}`,
        requestData
      );
      navigate("/warehouses");
    } catch (error) {
      console.error("Error updating warehouse data:", error);
    }
  };

  if (isLoading) {
    return <p>Loading...</p>;
  }

  const {
    warehouse_name,
    address,
    city,
    country,
    contact_name,
    contact_position,
    contact_phone,
    contact_email,
  } = warehouseData;

  return (
    <section className="warehouse-edit-main">
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
        <h1 className="title-section__page-title">Edit Warehouse</h1>
        </div>
        
      </section>
      {/* ----- form ----- */}
      <form className="form main-section-short-title" onSubmit={handleSubmit}>
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
                  value={warehouse_name}
                  onChange={(e) =>
                    setWarehouseData({
                      ...warehouseData,
                      warehouse_name: e.target.value,
                    })
                  }
                  placeholder="Warehouse Name"
                />
                {errorMessage && !warehouse_name.trim() && (
                  <div className="form__error-wrapper">
                    <img
                      className="error-icon"
                      src={errorIcon}
                      alt="Error Icon"
                    />
                    <p className="error-message">This field is required</p>
                  </div>
                )}
              </div>
            </label>

            <label className="form__labels">
              <h3 className="label-text">Street Address</h3>
              <div className="form__error-container">
                <input
                  className="form-input"
                  type="text"
                  value={address}
                  onChange={(e) =>
                    setWarehouseData({
                      ...warehouseData,
                      address: e.target.value,
                    })
                  }
                  placeholder="Street Address"
                />
                {errorMessage && !address.trim() && (
                  <div className="form__error-wrapper">
                    <img
                      className="error-icon"
                      src={errorIcon}
                      alt="Error Icon"
                    />
                    <p className="error-message">This field is required</p>
                  </div>
                )}
              </div>
            </label>
            <label className="form__labels">
              <h3 className="label-text">City</h3>
              <div className="form__error-container">
                <input
                  className="form-input"
                  type="text"
                  value={city}
                  onChange={(e) =>
                    setWarehouseData({ ...warehouseData, city: e.target.value })
                  }
                  placeholder="City"
                />
                {errorMessage && !city.trim() && (
                  <div className="form__error-wrapper">
                    <img
                      className="error-icon"
                      src={errorIcon}
                      alt="Error Icon"
                    />
                    <p className="error-message">This field is required</p>
                  </div>
                )}
              </div>
            </label>
            <label className="form__labels">
              <h3 className="label-text">Country</h3>
              <div className="form__error-container">
                <input
                  className="form-input"
                  type="text"
                  value={country}
                  onChange={(e) =>
                    setWarehouseData({
                      ...warehouseData,
                      country: e.target.value,
                    })
                  }
                  placeholder="Country"
                />
                {errorMessage && !country.trim() && (
                  <div className="form__error-wrapper">
                    <img
                      className="error-icon"
                      src={errorIcon}
                      alt="Error Icon"
                    />
                    <p className="error-message">This field is required</p>
                  </div>
                )}
              </div>
            </label>
          </section>
          <section className="form__label-inputs-wrap">
            <h2 className="subtitle">Contact Details</h2>
            <label className="form__labels">
              <h3 className="label-text">Contact Name</h3>
              <div className="form__error-container">
                <input
                  className="form-input"
                  type="text"
                  value={contact_name}
                  onChange={(e) =>
                    setWarehouseData({
                      ...warehouseData,
                      contact_name: e.target.value,
                    })
                  }
                  placeholder="Contact Name"
                />
                {errorMessage && !contact_name.trim() && (
                  <div className="form__error-wrapper">
                    <img
                      className="error-icon"
                      src={errorIcon}
                      alt="Error Icon"
                    />
                    <p className="error-message">This field is required</p>
                  </div>
                )}
              </div>
            </label>
            <label className="form__labels">
              <h3 className="label-text">Position</h3>
              <input
                className="form-input"
                type="text"
                value={contact_position}
                onChange={(e) =>
                  setWarehouseData({
                    ...warehouseData,
                    contact_position: e.target.value,
                  })
                }
                placeholder="Position"
              />
              {errorMessage && !contact_position.trim() && (
                <p className="error-message">This field is required</p>
              )}
            </label>
            <label className="form__labels">
              <h3 className="label-text">Phone Number</h3>
              <div className="form__error-container">
                <input
                  className="form-input"
                  type="text"
                  value={contact_phone}
                  onChange={(e) =>
                    setWarehouseData({
                      ...warehouseData,
                      contact_phone: e.target.value,
                    })
                  }
                  placeholder="Phone Number"
                />
                {errorMessage && !phoneFormat.test(contact_phone) && (
                  <div className="form__error-wrapper">
                    <img
                      className="error-icon"
                      src={errorIcon}
                      alt="Error Icon"
                    />
                    <p className="error-message">
                      Phone number must be in the format +1 (123) 456-7890
                    </p>
                  </div>
                )}
              </div>
            </label>
            <label className="form__labels">
              <h3 className="label-text">Email</h3>
              <div className="form__error-container">
                <input
                  className="form-input"
                  type="text"
                  value={contact_email}
                  onChange={(e) =>
                    setWarehouseData({
                      ...warehouseData,
                      contact_email: e.target.value,
                    })
                  }
                  placeholder="Email"
                />
                {errorMessage && !emailFormat.test(contact_email) && (
                  <div className="form__error-wrapper">
                    <img
                      className="error-icon"
                      src={errorIcon}
                      alt="Error Icon"
                    />
                    <p className="error-message">
                    Please enter a valid email address
                  </p>
                  </div>
                )}                 
              </div>
            </label>
          </section>
            
        </section>
        <section className="edit-warehouse-form-buttons">
              <button className="secondary-button">Cancel</button>
              <button type="submit" className="primary-button">
                Save
              </button>
          </section>
      </form>
    </section>
  );
}

export default WarehouseEdit;
