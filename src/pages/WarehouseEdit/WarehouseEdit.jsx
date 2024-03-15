import './WarehouseEdit.scss'
import { Link } from 'react-router-dom'
import WarehouseDetailsEdit from '../../components/WarehouseDetailsEdit/WarehouseDetailsEdit';
import ContactDetailsEdit from '../../components/ContactDetailsEdit/ContactDetailsEdit';
import arrowBack from '../../assets/icons/arrow_back-24px.svg'


function WarehouseEdit(){
    return (
      <section>   
        <div >
          <Link to="/warehouses" className='warehouseEdit__header-arrow'>
            <img src={arrowBack} alt={arrowBack} />
          </Link>
          <h1>Edit Warehouse</h1>
        </div>
        <form>
          <div>
            <WarehouseDetailsEdit />
            <ContactDetailsEdit />
          </div>
          <div>
            <div>
             <button>Cancel</button>
             <button>Save</button>
            </div>
          </div>
      </form>
      </section>
    );
};
export default WarehouseEdit;