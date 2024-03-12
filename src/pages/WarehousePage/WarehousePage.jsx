
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import DeleteModal from "../../components/DeleteModal/DeleteModal"; 
function WarehousePage(){
    const navigate = useNavigate();
    const [isModalOpen, setIsModalOpen] = useState(false);
    const warehousename = "Washington";
    const handleClick = async(event)=>{
        setIsModalOpen(true);
    }
    return (
        <>
            <p>Hello WarehousePage!</p>
            <button onClick={handleClick}>Delete</button>
            <DeleteModal
        name={warehousename}
        isOpen={isModalOpen}
        onCancel={() => setIsModalOpen(false)}
        onConfirm={() => navigate("/")}
      />
        </>
    )
}
export default WarehousePage;