import './Header.scss';
import { Link, useLocation } from 'react-router-dom';
import instockLogo from '../../assets/logo/InStock-Logo.svg';

function Header(){

    const location = useLocation();

    const isWarehousePage = location.pathname.startsWith('/warehouses');
    const isInventoryPage = location.pathname.startsWith('/inventory');
    const isRootPath = location.pathname === '/';

    return (
        <header className='header'>
            <div className='header__content-main-wrap'>
                <Link to="/" className='header-logo-link'>
                    <img className='header__logo' src={instockLogo} alt="instock-logo" />
                </Link>
                <nav className='header__nav'>
                    <ul className='header-list'>
                        <li className='header-list__item'>
                            <Link to="/warehouses" className={`header-list__link ${isWarehousePage || isRootPath ? 'header-list__link--active' : ''}`}>Warehouses</Link>
                        </li>
                        <li className='header-list__item'>
                            <Link to="/inventory" className={`header-list__link ${isInventoryPage ? 'header-list__link--active' : ''}`}>Inventory</Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}
export default Header;