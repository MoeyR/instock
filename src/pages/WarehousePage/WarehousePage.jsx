import { Link } from "react-router-dom";
import "./WarehousePage.scss";

function WarehousePage(){
    return (
        <main className="warehouses">
            <section className="warehouses-title-section-wrap">
                <h1 className="warehouses__title">Warehouses</h1>
                <input className="form-input warehouses__search-bar" type="search" placeholder="search..." />
                <button className="primary-button warehouses__add-button">+ Add New Warehouse</button>
            </section>
            <section className="warehouses-list-section">
                <ul className="warehouses-list">
                    <li className="warehouses-list__item">
                        <section className="name-address-wrap">
                            <div className="heading-detail-wrap">
                                <h4 className="warehouses-list__heading">WAREHOUSE</h4>
                                <Link className="warehouses-list__detail">Manhattan</Link>
                            </div>
                            <div className="heading-detail-wrap">
                                <h4 className="warehouses-list__heading">ADDRESS</h4>
                                <p className="warehouses-list__detail">503 Broadway, New York, USA</p>
                            </div>
                        </section>
                        <section className="contact-name-info-wrap">
                            <div className="heading-detail-wrap">
                                <h4 className="warehouses-list__heading">CONTACT NAME</h4>
                                <p className="warehouses-list__detail">Parmin Aujla</p>
                            </div>
                            <div className="heading-detail-wrap">
                                <h4 className="warehouses-list__heading">CONTACT INFORMATION</h4>
                                <p className="warehouses-list__detail">+1 (629) 555-0129</p>
                                <p className="warehouses-list__detail">paujla@instock.com</p>
                            </div>
                        </section>
                        <section className="icons-wrap">
                            <div className="warehouses-list__delete-icon">delete icon</div>
                            <div className="warehouses-list__edit-icon">edit icon</div>
                        </section>
                    </li>
                </ul>
            </section>
        </main>
    )
}
export default WarehousePage;