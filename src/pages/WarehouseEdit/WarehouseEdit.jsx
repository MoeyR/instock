import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import backIcon from '../../assets/icons/arrow_back-24px.svg';
import axios from 'axios';
import './WarehouseEdit.scss';

function WarehouseEdit() {
  const { id } = useParams();
  const [warehouseData, setWarehouseData] = useState({
    warehouse_name: '',
    address: '',
    city: '',
    country: '',
    contact_name: '',
    contact_position: '',
    contact_phone: '',
    contact_email: ''
  });
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchWarehouseData = async () => {
      try {
        const response = await axios.get(`http://localhost:8080/api/warehouses/${id}`);
        setWarehouseData(response.data);
        setIsLoading(false);
      } catch (error) {
        console.error('Error fetching warehouse data:', error);
        setIsLoading(false);
      }
    };

    fetchWarehouseData();
  }, [id]);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  const { warehouse_name, address, city, country, contact_name, contact_position, contact_phone, contact_email } = warehouseData;

  return (
    <section className="main">
      <section className="title-section">
        <Link to={"/"} className="title-section__back-link">
          <img className="title-section__back-icon" src={backIcon} alt="back-button" />
        </Link>
        <h1 className="title-section__page-title">Edit Warehouse</h1>
      </section>
      <form className="form">
        <section className="form-wrap">
          <section className="form__label-inputs-wrap">
            <h2 className="subtitle">Warehouse Details</h2>
            <label className="form__labels">
              <h3 className="label-text">Warehouse Name</h3>
              <input
                className="form-input"
                type="text"
                id="warehouseName"
                value={warehouse_name}
                placeholder="Warehouse Name"
              />
            </label>
            <label className="form__labels" htmlFor="address">
              <h3 className="label-text">Street Address</h3>
              <input
                className="form-input"
                type="text"
                id="address"
                value={address}
                placeholder="Street Address"
              />
            </label>
            <label className="form__labels" htmlFor="city">
              <h3 className="label-text">City</h3>
              <input
                className="form-input"
                type="text"
                id="city"
                value={city}
                placeholder="City"
              />
            </label>
            <label className="form__labels" htmlFor="country">
              <h3 className="label-text">Country</h3>
              <input
                className="form-input"
                type="text"
                id="country"
                value={country}
                placeholder="Country"
              />
            </label>
          </section>
          <section className="form__label-inputs-wrap">
            <h2 className="subtitle">Contact Details</h2>
            <label className="form__labels" htmlFor="contactName">
              <h3 className="label-text">Contact Name</h3>
              <input
                className="form-input"
                type="text"
                id="contactName"
                value={contact_name}
                placeholder="Contact Name"
              />
            </label>
            <label className="form__labels" htmlFor="position">
              <h3 className="label-text">Position</h3>
              <input
                className="form-input"
                type="text"
                id="position"
                value={contact_position}
                placeholder="Position"
              />
            </label>
            <label className="form__labels" htmlFor="phoneNumber">
              <h3 className="label-text">Phone Number</h3>
              <input
                className="form-input"
                type="text"
                id="phoneNumber"
                value={contact_phone}
                placeholder="Phone Number"
              />
            </label>
            <label className="form__labels" htmlFor="email">
              <h3 className="label-text">Email</h3>
              <input
                className="form-input"
                type="text"
                id="email"
                value={contact_email}
                placeholder="Email"
              />
            </label>
          </section>
        </section>
        <section className="form__buttons">
          <button className="secondary-button">Cancel</button>
          <button className="primary-button">Save</button>
        </section>
      </form>
    </section>
  );
}

export default WarehouseEdit;
