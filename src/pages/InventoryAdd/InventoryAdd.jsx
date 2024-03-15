import "./InventoryAdd.scss";
import React from "react";
import backArrow from "../../assets/icons/arrow_back-24px.svg";

import { useState, useEffect } from "react";
import axios from "axios";

function InventoryAdd() {
  const [warehouses, setWarehouses] = useState([]);
  const [categories, setCategories] = useState([]);

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
        window.location.href = "http://localhost:8080/api/inventory";
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
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  return (
    <main className="add-item">
      <section className="add-item__title-wrap">
        <img
          onClick={handleClick}
          className="add-item__chevron"
          src={backArrow}
          alt="back arrow"
        />
        <h1 className="add-item__title">Add New Inventory Item</h1>
      </section>
      <hr />
      <section className="add-item__form-section">
        <div className="form__tablet-container">
          <div className="form__left">
            <h2 className="form__header">Item Details</h2>

            <form onSubmit={handleSubmit} className="form">
              <h3>Item Name</h3>
              <input
                className="form-input"
                type="text"
                name="item_name"
                placeholder="Item Name"
                value={formData.item_name}
                onChange={handleInputChange}
              ></input>
              <h3>Description</h3>
              <textarea
                className="form-input form__larger"
                type="text"
                name="description"
                placeholder="Please enter a brief item description..."
                value={formData.description}
                onChange={handleInputChange}
              ></textarea>

              <h3>Category</h3>
              <select
                className="form__category-select"
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
            </form>
          </div>
          <hr className="form__hr" />
          <div class="form__tablet-divider"></div>
          <div className="form__right">
            <h2 className="form__header">Item Availability</h2>
            <h3>Status</h3>
            <div className="form__radial-container">
              <div className="radial">
                <input
                  className="radio"
                  type="radio"
                  name="status"
                  value="in_stock"
                  checked={formData.status === "in_stock"}
                  onChange={handleInputChange}
                />
                <label>In Stock</label>
              </div>
              <div className="radial">
                <input
                  className="radio"
                  type="radio"
                  name="status"
                  value="out_of_stock"
                  checked={formData.status === "out_of_stock"}
                  onChange={handleInputChange}
                />
                <label>Out of Stock</label>
              </div>
            </div>

            {formData.status === "in_stock" && (
              <>
                <h3>Quantity</h3>
                <input
                  className="form-input"
                  type="text"
                  name="quantity"
                  value={formData.quantity}
                  onChange={handleInputChange}
                />
              </>
            )}

            <h3>Warehouse</h3>
            <select
              className="form__category-select"
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
      </section>
    </main>
  );
}
export default InventoryAdd;
