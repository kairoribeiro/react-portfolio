import { Link, NavLink } from 'react-router-dom';
import './SideBar.scss'
import LogoK from '../../assets/images/logo-k.png'
import LogoSubtitle from '../../assets/images/kairo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faHome, faUser, faScrewdriverWrench, faPersonDigging, faFile } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';


const SideBar = () => {
    return (
        <div className='nav-bar'>
            <nav>
                <NavLink 
                    exact='true' 
                    activeclassname='active' 
                    to='/'
                >
                    <FontAwesomeIcon icon={faHome} color='#4d4d4e' />
                </NavLink>
                <NavLink 
                    exact='true' 
                    activeclassname='active' 
                    className='about-link' 
                    to='/about'
                >
                    <FontAwesomeIcon icon={faUser} color='#4d4d4e' />
                </NavLink>
                <NavLink 
                    exact='true' 
                    activeclassname='active'
                    className='skills-link' 
                    to='/skills'
                >
                    <FontAwesomeIcon icon={faScrewdriverWrench} color='#4d4d4e' />
                </NavLink>
                <NavLink 
                    exact='true' 
                    activeclassname='active' 
                    className='work-link' 
                    to='/work'
                >
                    <FontAwesomeIcon icon={faPersonDigging} color='#4d4d4e' />
                </NavLink>
                <NavLink 
                    exact='true' 
                    activeclassname='active' 
                    className='contact-link' 
                    to='/contact'
                >
                    <FontAwesomeIcon icon={faEnvelope} color='#4d4d4e' />
                </NavLink>
                <NavLink 
                    exact='true' 
                    activeclassname='active' 
                    className='resume-link' 
                    to='/resume'
                >
                    <FontAwesomeIcon icon={faFile} color='#4d4d4e' />
                </NavLink>
            </nav>
            <ul>
                <li>
                    <a 
                        target='blank'
                        rel='noreferrer'
                        href="https://www.linkedin.com/in/kairo-ribeiro/"
                    >
                        <FontAwesomeIcon icon={faLinkedin} color='#0072b1' />
                    </a>
                </li>
                <li>
                    <a 
                        target='blank'
                        rel='noreferrer'
                        href="https://github.com/kairoribeiro"
                    >
                        <FontAwesomeIcon icon={faGithub} color='#808080' />
                    </a>
                </li>
            </ul>
        
        </div>
    );
}

export default SideBar;