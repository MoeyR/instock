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
        setDataLoading(false);
      } catch (error) {
        console.error(`error:  ${error}`);
        setHasError(true);
        setDataLoading(false);
      }
    };
    fetchInventory();
  }, [inventoryList]);

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
        {/* inventory headers */}
        <section className="inventory-header-wrap">
          <section className="name-category">
            <div className="inventory-list__headings name-wrap">
              <h4 className="inventory-list__header-item">INVENTORY ITEM</h4>
              <img
                className="inventory-list__sort-icon"
                src={sortIcon}
                alt="sort icon"
              />
            </div>
            <div className="inventory-list__headings category-wrap">
              <h4 className="inventory-list__header-item">CATEGORY</h4>
              <img
                className="inventory-list__sort-icon"
                src={sortIcon}
                alt="sort icon"
              />
            </div>
          </section>
          
          <section className="status-qty-warehouse">
            <div className="inventory-list__headings status-wrap">
              <h4 className="inventory-list__header-item">STATUS</h4>
              <img
                className="inventory-list__sort-icon"
                src={sortIcon}
                alt="sort icon"
              />
            </div>
            
              <div className="inventory-list__headings qty-wrap">
                <h4 className="inventory-list__header-item">QTY</h4>
                <img
                  className="inventory-list__sort-icon"
                  src={sortIcon}
                  alt="sort icon"
                />
              </div>

              <div className="inventory-list__headings warehouse-wrap">
                <h4 className="inventory-list__header-item">WAREHOUSE</h4>
                <img
                  className="inventory-list__sort-icon"
                  src={sortIcon}
                  alt="sort icon"
                />
              </div>
          </section>
        </section>

        {/* action header */}
        <div className="inventory-list__headings-action">
          <h4 className="inventory-list__header-item">ACTIONS</h4>
        </div>

        {/* intentory list items */}
      </li>
      {inventoryList.map((inventoryItem) => {
        return (
          <InventoryListItem
            key={inventoryItem.id}
            inventoryItem={inventoryItem}
          />
        );
      })}
    </ul>
  );
}

export default InventoryList;
