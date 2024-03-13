import './Header.scss';
import { Link } from 'react-router-dom';
import instockLogo from '../../assets/logo/InStock-Logo.svg';

function Header(){
    return (
        <header className='header'>
            <div className='header__content-main-wrap'>
                <Link to="/" className='header-logo-link'>
                    <img className='header__logo' src={instockLogo} alt="instock-logo" />
                </Link>
                <nav className='header__nav'>
                    <ul className='header-list'>
                        <li className='header-list__item'>
                            <Link to="/warehouses" className='header-list__link header-list__link--active'>Warehouses</Link>
                        </li>
                        <li className='header-list__item'>
                            <Link to="/inventory" className='header-list__link'>Inventory</Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}
export default Header;