import './WarehouseList.scss';
import sortIcon from "../../assets/icons/sort-24px.svg";
import { useEffect, useState } from "react";
import axios from "axios";
import WarehouseListItem from '../WarehouseListItem/WarehouseListItem';

function WarehouseList () {
  const BASE_URL = "http://localhost:8080"; 

  const [warehouses, setWarehouses] = useState(null);
  const [dataLoading, setDataLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  useEffect(()=>{
    const fetchWarehouses = async ()=>{
      try {
        const response = await axios.get(`${BASE_URL}/api/warehouses`);
        const warehousesList = response.data;
        setDataLoading(false);
        setWarehouses(warehousesList);
      } catch (error) {
        setDataLoading(false);
        setHasError(true);
      }
    }
    fetchWarehouses();
  }, [warehouses])

  
  if (hasError) {
    return (
      <p>Unable to access warehouse data right now. Please try again later.</p>
    );
  }

  if (dataLoading) {
    return <p>Loading warehouses list...</p>;
  }


    return (
        <ul className="warehouses-list">
          {/* list main headings */}
          <li className="warehouses-list__main-headings">
            <div className="warehouse-headers-wrap">
              <div className="name-address-headers">
                <div className="main-headings-texts">
                  <h4 className="warehouse-headers">WAREHOUSE</h4>
                  <img className="sort-icon" src={sortIcon} alt="sort-icon" />
                </div>
                <div className="main-headings-texts address-header">
                  <h4 className="warehouse-headers">ADDRESS</h4>
                  <img className="sort-icon" src={sortIcon} alt="sort-icon" />
                </div>
              </div>
              <div className="contact-name-info-headers">
                <div className="main-headings-texts">
                  <h4 className="warehouse-headers">CONTACT NAME</h4>
                  <img className="sort-icon" src={sortIcon} alt="sort-icon" />
                </div>
                <div className="main-headings-texts contact-info-header">
                  <h4 className="warehouse-headers">CONTACT INFORMATION</h4>
                  <img className="sort-icon" src={sortIcon} alt="sort-icon" />
                </div>
              </div>
            </div>
            <h4 className="main-headings-texts action-text">ACTIONS</h4>
          </li>
          {warehouses.map((warehouse)=>{
            return <WarehouseListItem key={warehouse.id} warehouse={warehouse}/>
          })}
          
        </ul>
    );
}

export default WarehouseList;