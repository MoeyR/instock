import './WarehouseEdit.scss'
import { Link } from 'react-router-dom'
import arrowBack from '../../assets/icons/arrow_back-24px.svg'


function WarehouseEdit(){
    return (
      <section>
      <form className='warehouse'>
        <div className='WarehouseEdit_header'>
          <Link to="/warehouses" className='warehouseEdit__header-arrow'>
            <img src={arrowBack} alt={arrowBack} />
          </Link>
          <h2 className='warehouseEdit__header-title'>Edit Warehouse</h2>
        </div>  
        <div>
            <div className='warehouseEdit__wh-details'>
                <h3 className='warehouseEdit__wh-heading'>Warehouse Details</h3>
                
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
        </div>
        <div>
            <button>Cancel</button>
            <button>Save</button>
          </div>  
      </form>
      </section>
    );
};
export default WarehouseEdit;