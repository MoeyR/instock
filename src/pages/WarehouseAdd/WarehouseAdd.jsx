import './WarehouseAdd.scss';
import { Link } from 'react-router-dom';
import backIcon from '../../assets/icons/arrow_back-24px.svg';

function WarehouseAdd(){
    return (
        <section className='main'>
            {/* ----- title section ----- */}
            <section className='title-section'>
                <Link to={'/'} className='title-section__back-link'>
                    <img className='title-section__back-icon' src={backIcon} alt="back-button" />
                </Link>
                <h1 className='title-section__page-title'>Add New Warehouse</h1>
            </section>
            {/* ----- form ----- */}
            <form>
                <section>
                    <section>

                    </section>
                    <section>
                        
                    </section>
                </section>
                <section className='buttons'>

                </section>
            </form>
            
        </section>
    )
}
export default WarehouseAdd;