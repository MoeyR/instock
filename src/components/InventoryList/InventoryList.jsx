import "./InventoryList.scss";
import sortIcon from "../../assets/icons/sort-24px.svg";
import { useEffect, useState } from "react";
import axios from "axios";
import InventoryListItem from "../InventoryListItem/InventoryListItem";

function InventoryList() {
  const [inventoryList, setInventoryList] = useState([]);
  const [dataLoading, setDataLoading] = useState(true);
  const [hasError, setHasError] = useState(false);
  const baseUrl = "http://localhost:8080";

  useEffect(() => {
    const fetchInventory = async () => {
      try {
        const response = await axios.get(`${baseUrl}/api/inventory`);
        document.title = "Inventory | InStock";
        setInventoryList(response.data);
      } catch (error) {
        console.error(`error:  ${error}`);
      }
    };
    fetchInventory();
  }, []);

  if (hasError) {
    return (
      <p>Unable to access inventory data right now. Please try again later.</p>
    );
  }

  if (dataLoading) {
    return <p>Loading inventory list...</p>;
  }

  return (
    <ul className="inventory-list">
      <li className="inventory-list__headings-container">
        <div className="inventory-list__headers">
          <div className="name-address-headers">
            <div className="inventory-list__headings">
              <h4 className="inventory-list__header-item">INVENTORY ITEM</h4>
              <img
                className="warehouse-items__sort-icon"
                src={sortIcon}
                alt="sort-icon"
              />
            </div>
            <div className="inventory-list__headings address-header">
              <h4 className="inventory-list__header-item">CATEGORY</h4>
              <img
                className="warehouse-items__sort-icon"
                src={sortIcon}
                alt="sort-icon"
              />
            </div>
          </div>
          <div className="contact-name-info-headers">
            <div className="inventory-list__headings">
              <h4 className="inventory-list__header-item">STATUS</h4>
              <img
                className="warehouse-items__sort-icon"
                src={sortIcon}
                alt="sort-icon"
              />
            </div>
            <div className="inventory-list__headings contact-info-header">
              <h4 className="inventory-list__header-item">QTY</h4>
              <img
                className="warehouse-items__sort-icon"
                src={sortIcon}
                alt="sort-icon"
              />
            </div>
          </div>
        </div>
        <h4 className="inventory-list__headings action-text">ACTIONS</h4>
      </li>
      {warehouses.map((warehouse) => {
        return <WarehouseListItem key={warehouse.id} warehouse={warehouse} />;
      })}
    </ul>
  );
}

export default InventoryList;
