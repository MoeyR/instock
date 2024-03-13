import "./inventoryPage.scss";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

function InventoryPage() {
  const [inventoryList, setInventoryList] = useState([]);
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

  console.log(inventoryList);

  return (
    <>
      <p>Hello InventoryPage!</p>
    </>
  );
}
export default InventoryPage;
