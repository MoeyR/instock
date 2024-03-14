import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import DeleteModal from "../../components/DeleteModal/DeleteModal";

function WarehousePage() {
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const warehousename = "Washington";
  const handleClick = async (event) => {
    setIsModalOpen(true);
  };

  const handleConfirm = async (event) => {
    try {
      // await axios.delete("http://localhost:8080/warehouses/{id}");
      navigate("/");
    } catch (error) {
      console.log(`error is ${error}`);
    }
  };
  return (
    <>
      <p>Hello WarehousePage!</p>
      <button onClick={handleClick}>Delete</button>
      <DeleteModal
        name={warehousename}
        isOpen={isModalOpen}
        onCancel={() => setIsModalOpen(false)}
        onConfirm={handleConfirm}
      />
    </>
  );
}
export default WarehousePage;
