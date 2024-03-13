import './WarehouseEdit.scss'


function WarehouseEdit(){
    return (
      <form>
        <div>
          <h2>Edit Warehouse</h2>
        </div>
        
        <div>
            <div>
                <h3>Warehouse Details</h3>
                <label htmlFor='name' >Warehouse Name</label>
                <input type='text' name='name' id='name' placeholder="Washington" required />
                <label htmlFor='address'>Street Address</label>
                <input type='text' name='address' id='address' placeholder="300 Pearl Street SW" required />
                <label htmlFor='city'>City</label>
                <input type='text' name='city' id='city' placeholder="Washington" required />
                <label htmlFor='country'>Country</label>
                <input type='text' name='country' id='country' placeholder="USA" required />
            </div>
             <div>
                <h3>Contact Details</h3>
                <label htmlFor='contact'>Contact Name</label>
                <input type='text' name='contact' id='contact' placeholder="Graeme Lyon" required />
                <label htmlFor='position'>Position</label>
                <input type='text' name='position' id='position' placeholder="Warehouse Manager" required />
                <label htmlFor='phone'>Phone Number</label>
                <input type='tel' name='phone' id='phone' placeholder="+1(647) 504-0911" required />
                <label htmlFor='email'>Email</label>
                <input type='email' id='email' placeholder="glyon@instock.com" required />
            </div>
            <div>
              <button>Cancel</button>
              <button>Save</button>
            </div>            
        </div>
      </form>
    )
}
export default WarehouseEdit;