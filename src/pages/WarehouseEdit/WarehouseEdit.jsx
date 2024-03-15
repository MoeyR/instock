import React, { useState, useEffect } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import backIcon from '../../assets/icons/arrow_back-24px.svg';
import axios from 'axios';
import './WarehouseEdit.scss';

function WarehouseEdit() {
  const { id } = useParams();
  const navigate = useNavigate();
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
  const [phoneError, setPhoneError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const phoneRegex = /^\+\d{1,3} \(\d{3}\) \d{3}-\d{4}$/;

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

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validatePhoneNumber(contact_phone)) {
      setPhoneError(true);
      setErrorMessage("Please enter a valid phone number");
      return;
    }
    if (!validateEmail(contact_email)) {
      setEmailError(true);
      setErrorMessage("Please enter a valid email");
      return;
    }

    try {
      await axios.put(`http://localhost:8080/api/warehouses/${id}`, {
        warehouse_name,
        address,
        city,
        country,
        contact_name,
        contact_position,
        contact_phone,
        contact_email
      });
      navigate('/warehouses');
    } catch (error) {
      console.error('Error updating warehouse data:', error);
    }
  };

  const validatePhoneNumber = (value) => phoneRegex.test(value);
  const validateEmail = (value) => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value);

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
                value={warehouse_name}
                onChange={(e) => setWarehouseData({ ...warehouseData, warehouse_name: e.target.value })}
                placeholder="Warehouse Name"
              />
            </label>
            <label className="form__labels">
              <h3 className="label-text">Street Address</h3>
              <input
                className="form-input"
                type="text"
                value={address}
                onChange={(e) => setWarehouseData({ ...warehouseData, address: e.target.value })}
                placeholder="Street Address"
              />
            </label>
            <label className="form__labels">
              <h3 className="label-text">City</h3>
              <input
                className="form-input"
                type="text"
                value={city}
                onChange={(e) => setWarehouseData({ ...warehouseData, city: e.target.value })}
                placeholder="City"
              />
            </label>
            <label className="form__labels">
              <h3 className="label-text">Country</h3>
              <input
                className="form-input"
                type="text"
                value={country}
                onChange={(e) => setWarehouseData({ ...warehouseData, country: e.target.value })}
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
                value={contact_name}
                onChange={(e) => setWarehouseData({ ...warehouseData, contact_name: e.target.value })}
                placeholder="Contact Name"
              />
            </label>
            <label className="form__labels">
              <h3 className="label-text">Position</h3>
              <input
                className="form-input"
                type="text"
                value={contact_position}
                onChange={(e) => setWarehouseData({ ...warehouseData, contact_position: e.target.value })}
                placeholder="Position"
              />
            </label>
                        <label className="form__labels">
              <h3 className="label-text">Phone Number</h3>
              <input
                className={`form-input ${phoneError ? 'error' : ''}`}
                type="text"
                value={contact_phone}
                onChange={(e) => {
                  setWarehouseData({ ...warehouseData, contact_phone: e.target.value });
                  setPhoneError(false);
                }}
                placeholder="Phone Number"
              />
              {phoneError && <p className="error-message">Please enter a valid phone number</p>}
            </label>
            <label className="form__labels">
              <h3 className="label-text">Email</h3>
              <input
                className={`form-input ${emailError ? 'error' : ''}`}
                type="text"
                value={contact_email}
                onChange={(e) => {
                  setWarehouseData({ ...warehouseData, contact_email: e.target.value });
                  setEmailError(false);
                }}
                placeholder="Email"
              />
              {emailError && <p className="error-message">Please enter a valid email</p>}
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
  

