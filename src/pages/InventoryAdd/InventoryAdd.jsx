import "./InventoryAdd.scss";
import React, { useState, useEffect } from "react";
import backArrow from "../../assets/icons/arrow_back-24px.svg";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import errorIcon from "../../assets/icons/error-24px.svg";

function InventoryAdd() {
  const [warehouses, setWarehouses] = useState([]);
  const [categories, setCategories] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    item_name: "",
    description: "",
    category: "",
    status: "",
    quantity: "",
    warehouse_id: "",
  });

  useEffect(() => {
    axios
      .get("http://localhost:8080/api/inventory")
      .then((response) => {
        setCategories(response.data);
      })
      .catch((error) => {
        console.error("Error fetching inventory");
      });

    axios
      .get("http://localhost:8080/api/warehouses")
      .then((response) => {
        const warehouseMap = {};
        response.data.forEach((warehouse) => {
          warehouseMap[warehouse.id] = warehouse.warehouse_name;
        });
        setWarehouses(warehouseMap);
      })
      .catch((error) => {
        console.error("Error fetching warehouses", error);
      });
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();

    // Validation
    if (
      !formData.item_name.trim() ||
      !formData.description.trim() ||
      !formData.category.trim() ||
      !formData.quantity.trim() ||
      !formData.warehouse_id.trim()
    ) {
      setErrorMessage("This field is required");
      return;
    }

    axios
      .post("http://localhost:8080/api/inventory", formData)
      .then((response) => {
        console.log("Item added successfully");
        setFormData({
          item_name: "",
          description: "",
          category: "",
          status: "",
          quantity: "",
          warehouse_id: "",
        });

        setTimeout(() => {
          navigate("/inventory");
        }, 2000);
      })
      .catch((error) => {
        console.error("Error adding item", error);
      });
  };

  const handleClick = () => {
    window.history.back();
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;

    let updatedValue = value;

    if (name === "status" && value !== "in stock") {
      updatedValue = "";
    }

    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: updatedValue,
    }));
  };

  return (
    <main className="add-item">
      <section className="add-inv-title-wrap">
        <div className="add-inv-icon-title-wrap">
          <img
            onClick={handleClick}
            className="add-item__chevron"
            src={backArrow}
            alt="back arrow"
          />
          <h1 className="add-item__title">Add New Inventory Item</h1>
        </div>
      </section>
      <hr />
      <section className="add-item__form-section-add-inv">
        <form onSubmit={handleSubmit} className="form">
          <div className="form__tablet-container">
            <div className="form__left">
              <h2 className="form__header">Item Details</h2>
              <h3>Item Name</h3>
              <div className="form__error-container">
                <input
                  className={
                    formData.item_name.trim() === "" && errorMessage
                      ? "form-input form-input--error-state"
                      : "form-input"
                  }
                  type="text"
                  name="item_name"
                  placeholder="Item Name"
                  value={formData.item_name}
                  onChange={handleInputChange}
                />
                {formData.item_name.trim() === "" && errorMessage && (
                  <div className="form__error-wrapper-inventory-add">
                    <img
                      className="error-icon"
                      src={errorIcon}
                      alt="Error Icon"
                    />
                    <p className="error-message">{errorMessage}</p>
                  </div>
                )}
              </div>

              <h3>Description</h3>
              <div className="form__error-container">
                <textarea
                  className={
                    formData.item_name.trim() === "" && errorMessage
                      ? "form-input form__larger form-input--error-state"
                      : "form-input form__larger"
                  }
                  type="text"
                  name="description"
                  placeholder="Please enter a brief item description..."
                  value={formData.description}
                  onChange={handleInputChange}
                />
                {formData.item_name.trim() === "" && errorMessage && (
                  <div className="form__error-wrapper-inventory-add">
                    <img
                      className="error-icon"
                      src={errorIcon}
                      alt="Error Icon"
                    />
                    <p className="error-message">{errorMessage}</p>
                  </div>
                )}
              </div>

              <h3>Category</h3>
              <div className="form__error-container">
                <select
                  className={
                    formData.category.trim() === "" && errorMessage
                      ? "form-input form-input--error-state"
                      : "form__category-select"
                  }
                  name="category"
                  value={formData.category}
                  onChange={handleInputChange}
                >
                  <option value="">Please Select</option>
                  {[
                    ...new Set(categories.map((category) => category.category)),
                  ].map((singleCategory, index) => (
                    <option key={index}>{singleCategory}</option>
                  ))}
                </select>
                {formData.category.trim() === "" && errorMessage && (
                  <div className="form__error-wrapper-inventory-add">
                    <img
                      className="error-icon"
                      src={errorIcon}
                      alt="Error Icon"
                    />
                    <p className="error-message">{errorMessage}</p>
                  </div>
                )}
              </div>
            </div>
            <hr className="form__hr" />
            <div className="form__tablet-divider"></div>
            <div className="form__right">
              <h2 className="form__header">Item Availability</h2>
              <h3>Status</h3>
              <div className="form__radial-container">
                <div className="radial">
                  <input
                    className="radio"
                    type="radio"
                    name="status"
                    value="in stock"
                    checked={formData.status === "in stock"}
                    onChange={handleInputChange}
                  />
                  <label>In Stock</label>
                </div>
                <div className="radial">
                  <input
                    className="radio"
                    type="radio"
                    name="status"
                    value="out of stock"
                    checked={formData.status === "out of stock"}
                    onChange={handleInputChange}
                  />
                  <label>Out of Stock</label>
                </div>
              </div>

              {formData.status === "in stock" && (
                <>
                  <h3>Quantity</h3>
                  <div className="form__error-container">
                    <input
                      className={
                        formData.quantity.trim() === "" && errorMessage
                          ? "form-input form-input--error-state"
                          : "form-input"
                      }
                      type="text"
                      name="quantity"
                      value={formData.quantity}
                      onChange={handleInputChange}
                    />
                    {formData.quantity.trim() === "" && errorMessage && (
                      <div className="form__error-wrapper-inventory-add">
                        <img
                          className="error-icon"
                          src={errorIcon}
                          alt="Error Icon"
                        />
                        <p className="error-message">{errorMessage}</p>
                      </div>
                    )}
                  </div>
                </>
              )}

              <h3>Warehouse</h3>
              <div className="form__error-container">
                <select
                  className={
                    formData.warehouse_id.trim() === "" && errorMessage
                      ? "form-input form-input--error-state"
                      : "form__category-select"
                  }
                  name="warehouse_id"
                  value={formData.warehouse_id}
                  onChange={handleInputChange}
                >
                  <option value="">Please select</option>
                  {Object.keys(warehouses).map((warehouseId) => (
                    <option key={warehouseId} value={warehouseId}>
                      {warehouses[warehouseId]}
                    </option>
                  ))}
                </select>
                {formData.warehouse_id.trim() === "" && errorMessage && (
                  <div className="form__error-wrapper-inventory-add">
                    <img
                      className="error-icon"
                      src={errorIcon}
                      alt="Error Icon"
                    />
                    <p className="error-message">{errorMessage}</p>
                  </div>
                )}
              </div>
            </div>
          </div>

          <div className="form__buttons">
            <button
              className="secondary-button"
              type="button"
              onClick={handleClick}
            >
              Cancel
            </button>

            <button className="primary-button" type="submit">
              + Add Item
            </button>
          </div>
        </form>
      </section>
    </main>
  );
}

export default InventoryAdd;
