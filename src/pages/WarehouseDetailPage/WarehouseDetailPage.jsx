import backarrow from "../../assets/icons/arrow_back-24px.svg";
import "./WarehouseDetailPage.scss";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
function WarehouseDetailPage() {
  const params = useParams();
  const [activeWarehouse, setActiveWarehouse] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const baseUrl = "http://localhost:8080";

  useEffect(() => {
    const fetchDetailbyId = async () => {
      try {
        const response = await axios.get(
          `${baseUrl}/api/warehouses/${Number(params.id)}`
        );
        document.title = `${response.data.warehouse_name} | InStock`;
        setIsLoading(false);
        setActiveWarehouse(response.data);
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
  const {
    warehouse_name,
    address,
    city,
    country,
    contact_name,
    contact_position,
    contact_phone,
    contact_email,
  } = activeWarehouse;

  return (
    <div className="warehouse-detail">
      <div className="warehouse-detail__title">
        <div className="warehouse-detail__imgname">
          <img
            src={backarrow}
            alt="back"
            onClick={handleClick}
            className="warehouse-detail__img"
          />
          <h1>{warehouse_name}</h1>
        </div>
        <Link to={`/warehouses/${params.id}/edit`}>
          <button className="warehouse-detail__edit">Edit</button>
        </Link>
      </div>
      <div className="warehouse-detail__info">
        <div className="warehouse-detail__address">
          <h4>WAREHOUSE ADDRESS:</h4>
          <div className="warehouse-detail__addressCity">
            <p className="p2">{address},</p>
            <p className="p2">
              {city},{country}
            </p>
          </div>
        </div>
        <div className="warehouse-detail__contact">
          <div className="warehouse-detail__contactName">
            <h4>CONTACT NAME:</h4>
            <p className="p2">{contact_name}</p>
            <p className="p2">{contact_position}</p>
          </div>
          <div className="warehouse-detail__contactInfo">
            <h4>CONTACT INFORMATION:</h4>
            <p className="p2">{contact_phone}</p>
            <p className="p2">{contact_email}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default WarehouseDetailPage;
