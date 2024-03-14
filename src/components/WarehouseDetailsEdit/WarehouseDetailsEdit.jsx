import "./WarehouseDetailsEdit.scss"

function WarehouseDetailsEdit({}) {
    return (
        <div>
            <div>
                <h2>Warehouse Details</h2>
                <label htmlFor='warehouseName'>Warehouse Name</label>
                <input type='text' name='name' id='name' placeholder="Washington" required />
                <label htmlFor='streetAaddress'>Street Address</label>
                <input type='text' name='streetAddress' id='streetAddress' placeholder="streetAddress" required />
                <label htmlFor='city'>City</label>
                <input type='text' name='city' id='city' placeholder="Washington" required />
                <label htmlFor='country'>Country</label>
                <input type='text' name='country' id='country' placeholder="USA" required />

            </div>
        </div>
    )
}
