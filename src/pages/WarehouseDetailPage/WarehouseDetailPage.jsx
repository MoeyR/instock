import backarrow from "../../assets/icons/arrow_back-24px.svg";
import "./WarehouseDetailPage.scss";
import { useParams } from "react-router-dom";
function WarehouseDetailPage() {
  const params = useParams();
  const warehouseId = params.id;
  const getDetailbyId = (id) => {
    const detail = {
      name: "Washington",
      address: "33 Pearl Street SW",
      city: "Washington",
      country: "USA",
      contact_name: "Greame Lyon",
      contact_position: "Warehouse Manager",
      contact_phone: "+1 (646) 123-1234",
      contact_email: "glyon@instock.com",
    };
    return detail;
  };
  return (
    <div className="warehouse-detail">
      <div className="warehouse-detail__title">
        <div className="warehouse-detail__imgname">
          <img src={backarrow} alt="back" />
          <h1>{getDetailbyId(warehouseId).name}</h1>
        </div>
        <button className="warehouse-detail__edit">Edit</button>
      </div>
      <div className="warehouse-detail__info">
        <div className="warehouse-detail__address">
          <h4>WAREHOUSE ADDRESS:</h4>
          <div className="warehouse-detail__addressCity">
            <p className="p2">{getDetailbyId(warehouseId).address}</p>
            <p className="p2">
              {getDetailbyId(warehouseId).city},
              {getDetailbyId(warehouseId).country}
            </p>
          </div>
        </div>
        <div className="warehouse-detail__contact">
          <div className="warehouse-detail__contactName">
            <h4>CONTACT NAME:</h4>
            <p className="p2">{getDetailbyId(warehouseId).contact_name}</p>
            <p className="p2">{getDetailbyId(warehouseId).contact_position}</p>
          </div>
          <div className="warehouse-detail__contactInfo">
            <h4>CONTACT INFORMATION:</h4>
            <p className="p2">{getDetailbyId(warehouseId).contact_phone}</p>
            <p className="p2">{getDetailbyId(warehouseId).contact_email}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default WarehouseDetailPage;
