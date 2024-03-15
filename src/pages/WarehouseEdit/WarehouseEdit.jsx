import React, { useState, useEffect } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import backIcon from '../../assets/icons/arrow_back-24px.svg';
import axios from 'axios';
import './WarehouseEdit.scss';

function WarehouseEdit() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [warehouseName, setWarehouseName] = useState('');
  const [address, setAddress] = useState('');
  const [city, setCity] = useState('');
  const [country, setCountry] = useState('');
  const [contactName, setContactName] = useState('');
  const [contactPosition, setContactPosition] = useState('');
  const [contactPhone, setContactPhone] = useState('');
  const [contactEmail, setContactEmail] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchWarehouseData = async () => {
      try {
        const response = await axios.get(`http://localhost:8080/api/warehouses/${id}`);
        const { warehouse_name, address, city, country, contact_name, contact_position, contact_phone, contact_email } = response.data;
        setWarehouseName(warehouse_name);
        setAddress(address);
        setCity(city);
        setCountry(country);
        setContactName(contact_name);
        setContactPosition(contact_position);
        setContactPhone(contact_phone);
        setContactEmail(contact_email);
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`http://localhost:8080/api/warehouses/${id}`, {
        warehouse_name: warehouseName,
        address,
        city,
        country,
        contact_name: contactName,
        contact_position: contactPosition,
        contact_phone: contactPhone,
        contact_email: contactEmail
      });
      navigate('/warehouses');
    } catch (error) {
      console.error('Error updating warehouse data:', error);
    }
  };

  return (
    <section className="main">
      <section className="title-section">
        <Link to={"/"} className="title-section__back-link">
          <img className="title-section__back-icon" src={backIcon} alt="back-button" />
        </Link>
        <h1 className="title-section__page-title">Edit Warehouse</h1>
      </section>
      <form className="form" onSubmit={handleSubmit}>
        <section className="form-wrap">
          <section className="form__label-inputs-wrap">
            <h2 className="subtitle">Warehouse Details</h2>
            <label className="form__labels">
              <h3 className="label-text">Warehouse Name</h3>
              <input
                className="form-input"
                type="text"
                value={warehouseName}
                onChange={(e) => setWarehouseName(e.target.value)}
                placeholder="Warehouse Name"
              />
            </label>
            <label className="form__labels">
              <h3 className="label-text">Street Address</h3>
              <input
                className="form-input"
                type="text"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                placeholder="Street Address"
              />
            </label>
            <label className="form__labels">
              <h3 className="label-text">City</h3>
              <input
                className="form-input"
                type="text"
                value={city}
                onChange={(e) => setCity(e.target.value)}
                placeholder="City"
              />
            </label>
            <label className="form__labels">
              <h3 className="label-text">Country</h3>
              <input
                className="form-input"
                type="text"
                value={country}
                onChange={(e) => setCountry(e.target.value)}
                placeholder="Country"
              />
            </label>
          </section>
          <section className="form__label-inputs-wrap">
            <h2 className="subtitle">Contact Details</h2>
            <label className="form__labels">
              <h3 className="label-text">Contact Name</h3>
              <input
                className="form-input"
                type="text"
                value={contactName}
                onChange={(e) => setContactName(e.target.value)}
                placeholder="Contact Name"
              />
            </label>
            <label className="form__labels">
              <h3 className="label-text">Position</h3>
              <input
                className="form-input"
                type="text"
                value={contactPosition}
                onChange={(e) => setContactPosition(e.target.value)}
                placeholder="Position"
              />
            </label>
            <label className="form__labels">
              <h3 className="label-text">Phone Number</h3>
              <input
                className="form-input"
                type="text"
                value={contactPhone}
                onChange={(e) => setContactPhone(e.target.value)}
                placeholder="Phone Number"
              />
            </label>
            <label className="form__labels">
              <h3 className="label-text">Email</h3>
              <input
                className="form-input"
                type="text"
                value={contactEmail}
                onChange={(e) => setContactEmail(e.target.value)}
                placeholder="Email"
              />
            </label>
          </section>
        </section>
        <section className="form__buttons">
          <button className="secondary-button">Cancel</button>
          <button type="submit" className="primary-button">Save</button>
        </section>
      </form>
    </section>
  );
}

export default WarehouseEdit;
