import "./WarehouseDetailsEdit.scss"
import ErrorForm from "../ErrorForm/ErrorForm"

function WarehouseDetailsEdit({}) {
    return (
        <div>
        <div>
            <div>
                <h2>Warehouse Details</h2>
                <label htmlFor='warehouseName'>Warehouse Name</label>
                <input type='text' name='warehouseName' id='warehouseName' placeholder="Washington" required />
                <label htmlFor='streetAaddress'>Street Address</label>
                <input type='text' name='streetAddress' id='streetAddress' placeholder="33 Pearl Street SW" required />
                <label htmlFor='city'>City</label>
                <input type='text' name='city' id='city' placeholder="Washington" required />
                <label htmlFor='country'>Country</label>
                <input type='text' name='country' id='country' placeholder="USA" required />

            </div>
        </div>
    </div>
    )
}

export default WarehouseDetailsEdit;
