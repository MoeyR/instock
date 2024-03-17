import backarrow from "../../assets/icons/arrow_back-24px.svg";
import "./InventoryDetailPage.scss";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
function InventoryDetailPage() {
  const params = useParams();
  const [activeInventory, setActiveInventory] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [classNameStatus, setClassNameStatus] = useState(
    "inventory-detail__statustext"
  );
  const baseUrl = "http://localhost:8080";

  useEffect(() => {
    const fetchDetailbyId = async () => {
      try {
        const response = await axios.get(
          `${baseUrl}/api/inventories/${Number(params.id)}`
        );
        document.title = `${response.data.item_name} | InStock`;
        setIsLoading(false);
        setActiveInventory(response.data);
        let className = "";
        if (
          response.data.status === "In Stock" ||
          response.data.status === "in stock"
        ) {
          className = "inventory-detail__statustext tag--instock";
        } else {
          if (
            response.data.status === "Out of Stock" ||
            response.data.status === "out of stock"
          ) {
            className = "inventory-detail__statustext tag--outofstock";
          }
        }
        setClassNameStatus(className);
      } catch (error) {
        setIsLoading(false);
        console.error(`error:  ${error}`);
      }
    };
    fetchDetailbyId();
  }, [params.id]);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  const handleClick = () => {
    window.history.back();
  };
  const { item_name, description, category, status, quantity, warehouse_name } =
    activeInventory;

  return (
    <div className="inventory-detail">
      <div className="page-title-section">
        <div className="inv-detail-title-icon-wrap">
          <div className="inventory-detail__imgname">
            <img
              src={backarrow}
              alt="back"
              onClick={handleClick}
              className="inventory-detail__img"
            />
            <h1>{item_name}</h1>
          </div>
          <Link to={`/inventory/${params.id}/edit`}>
            <button className="inventory-detail__edit">Edit</button>
          </Link>
        </div>
      </div>
      <div className="inventory-detail__info">
        <div className="inventory-detail__descat">
          <div className="inventory-detail__description">
            <h4>ITEM DESCRIPTION:</h4>
            <p className="p2">{description}</p>
          </div>
          <div className="inventory-detail__category">
            <h4>CATEGRORY:</h4>
            <p className="p2">{category}</p>
          </div>
        </div>
        <div className="inventory-detail__statusquantitywarehouse">
          <div className="inventory-detail__statusquantity">
            <div className="inventory-detail__status">
              <h4 className="inventory-detail__statustitle">STATUS:</h4>
              <p className={classNameStatus}>{status.toUpperCase()}</p>
            </div>
            <div className="inventory-detail__quantity">
              <h4>QUANTITY:</h4>
              <p className="p2">{quantity}</p>
            </div>
          </div>
          <div className="inventory-detail__warehouse">
            <h4>WAREHOUSE:</h4>
            <p className="p2">{warehouse_name}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default InventoryDetailPage;
