import { Link, NavLink } from 'react-router-dom';
import './SideBar.scss'
import LogoK from '../../assets/images/logo-k.png'
import LogoSubtitle from '../../assets/images/kairo.png'


const SideBar = () => {
    return (
        <div className='nav-bar'>
            <Link className='logo' to='/'>
                <img src={LogoK} alt="logo" />
                <img className='sub-logo' src={LogoSubtitle} alt="logoSubtitle" />
            </Link>
            <nav>
                <NavLink>

                </NavLink>
            </nav>
        
        </div>
    );
}

export default SideBar;