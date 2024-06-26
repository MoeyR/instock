import "./InventoryEdit.scss";
import React, { useState, useEffect } from "react";
import backArrow from "../../assets/icons/arrow_back-24px.svg";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import errorIcon from "../../assets/icons/error-24px.svg";

function InventoryEdit() {
  const navigate = useNavigate();
  const [warehouses, setWarehouses] = useState([]);
  const [categories, setCategories] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");
  const { id } = useParams();

  const [formData, setFormData] = useState({
    id: "",
    item_name: "",
    description: "",
    category: "",
    status: "",
    quantity: "",
    warehouse_id: "",
  });

  //fetch data

  useEffect(() => {
    axios
      .get(`http://localhost:8080/api/inventories/${id}`)
      .then((response) => {
        const data = response.data;
        setFormData({
          id: data.id,
          item_name: data.item_name,
          description: data.description,
          category: data.category,
          status: data.status,
          quantity: data.quantity,
          warehouse_id: data.warehouse_id,
        });

        //prefill radials if quantity is greater than 0
        if (data.quantity > 0) {
          setFormData((prevFormData) => ({
            ...prevFormData,
            status: "in stock",
          }));
        } else {
          setFormData((prevFormData) => ({
            ...prevFormData,
            status: "out of stock",
          }));
        }
      })
      .catch((error) => {
        console.error("Error fetching inventory item:", error);
      });

    //fetch categories

    axios
      .get("http://localhost:8080/api/inventory")
      .then((response) => {
        setCategories(response.data);
      })
      .catch((error) => {
        console.error("Error fetching inventory data:", error);
      });

    //fetch warehouse names

    axios
      .get("http://localhost:8080/api/warehouses")
      .then((response) => {
        setWarehouses(response.data);
      })
      .catch((error) => {
        console.error("Error fetching warehouses information:", error);
      });
  }, [id]);

  const handleSubmit = (event) => {
    event.preventDefault();

    // validation
    if (
      !formData.item_name ||
      !formData.description ||
      !formData.category ||
      !formData.status ||
      !formData.quantity ||
      !formData.warehouse_id
    ) {
      setErrorMessage("All fields are required");
    }

    console.log(formData);

    //send put
    axios
      .put(`http://localhost:8080/api/inventories/${id}`, formData)
      .then((response) => {
        console.log("Item updated successfully");
        navigate("/inventory");
      })
      .catch((error) => {
        console.error("Error updating item", error);
      });
  };

  const handleClick = () => {
    window.history.back();
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;

    const updatedValue =
      name === "warehouse_id" && value !== "" ? parseInt(value) : value;

    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: updatedValue,
    }));
  };

  return (
    <main className="edit-item">
      <section className="edit-inv-title-wrap">
        <div className="edit-inv-icon-title-wrap">
          <img
            onClick={handleClick}
            className="edit-item__chevron"
            src={backArrow}
            alt="back arrow"
          />
          <h1 className="edit-item__title">Edit Inventory Item</h1>
        </div>
      </section>
      <hr />
      <section className="edit-item__form-section">
        <form onSubmit={handleSubmit} className="form">
          <div className="form__tablet-container">
            <div className="form__left">
              <h2 className="form__header">Item Details</h2>

              <h3>Item Name</h3>
              <div className="form__error-container">
                <input
                  className={
                    formData.item_name === "" && errorMessage
                      ? "form-input form-input--error-state"
                      : "form-input"
                  }
                  type="text"
                  name="item_name"
                  placeholder="Item Name"
                  value={formData.item_name}
                  onChange={handleInputChange}
                />
                {formData.item_name === "" && errorMessage && (
                  <div className="form__error-wrapper-inventory-edit">
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
                    formData.description === "" && errorMessage
                      ? "form-input form__larger form-input--error-state"
                      : "form-input form__larger"
                  }
                  type="text"
                  name="description"
                  placeholder="Please enter a brief item description..."
                  value={formData.description}
                  onChange={handleInputChange}
                />
                {formData.description === "" && errorMessage && (
                  <div className="form__error-wrapper-inventory-edit">
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
                    formData.category === "" && errorMessage
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
                {formData.category === "" && errorMessage && (
                  <div className="form__error-wrapper-inventory-edit">
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
                        formData.quantity === "" && errorMessage
                          ? "form-input form-input--error-state"
                          : "form-input"
                      }
                      type="text"
                      name="quantity"
                      value={formData.quantity}
                      onChange={handleInputChange}
                    />
                    {formData.quantity === "" && errorMessage && (
                      <div className="form__error-wrapper-inventory-edit">
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
                    formData.warehouse_id === "" && errorMessage
                      ? "form-input form-input--error-state"
                      : "form__category-select"
                  }
                  name="warehouse_id"
                  value={formData.warehouse_id}
                  onChange={handleInputChange}
                >
                  <option value="">Please select</option>
                  {warehouses.map((warehouse) => (
                    <option key={warehouse.id} value={warehouse.id}>
                      {warehouse.warehouse_name}
                    </option>
                  ))}
                </select>
                {formData.warehouse_id === "" && errorMessage && (
                  <div className="form__error-wrapper-inventory-edit">
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
              Save
            </button>
          </div>
        </form>
      </section>
    </main>
  );
}

export default InventoryEdit;
