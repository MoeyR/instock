import "./WarehouseItemList.scss";
import sortIcon from "../../assets/icons/sort-24px.svg";
import { useEffect, useState } from "react";
import axios from "axios";
import WarehouseItemListItem from "../WarehouseItemListItem/WarehouseItemListItem";

function WarehouseItemList({ warehouseId }) {
  const [inventoryList, setInventoryList] = useState([]);
  const [dataLoading, setDataLoading] = useState(true);
  const [hasError, setHasError] = useState(false);
  const baseUrl = "http://localhost:8080";

  useEffect(() => {
    const fetchInventory = async () => {
      const warehouseNameToIdMap = {
        Manhattan: 1,
        Washington: 2,
        Jersey: 3,
        SF: 4,
        "Santa Monica": 5,
        Seattle: 6,
        Miami: 7,
        Boston: 8,
      };

      try {
        const response = await axios.get(`${baseUrl}/api/inventory`);

        const mappedInventory = response.data.map((item) => ({
          ...item,
          warehouse_id: warehouseNameToIdMap[item.warehouse_name],
        }));

        const filteredInventoryList = mappedInventory.filter(
          (inventory) => inventory.warehouse_id === parseInt(warehouseId, 10)
        );

        setInventoryList(filteredInventoryList);
        setDataLoading(false);
      } catch (error) {
        console.error(`Error fetching inventory data: ${error}`);
        setHasError(true);
        setDataLoading(false);
      }
    };
    fetchInventory();
  }, [warehouseId]);

  if (hasError) {
    return (
      <p>Unable to access inventory data right now. Please try again later.</p>
    );
  }

  if (dataLoading) {
    return <p>Loading inventory list...</p>;
  }

  console.log(inventoryList);
  return (
    <ul className="inventory-list">
      <li className="inventory-list__headings-container">
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
          </section>
        </section>

        <div className="inventory-list__headings-action">
          <h4 className="inventory-list__header-item">ACTIONS</h4>
        </div>
      </li>
      {inventoryList.map((inventoryItem) => (
        <WarehouseItemListItem
          key={inventoryItem.id}
          inventoryItem={inventoryItem}
          warehouseId={warehouseId}
        />
      ))}
    </ul>
  );
}

export default WarehouseItemList;
