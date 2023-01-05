import { Link, NavLink } from 'react-router-dom';
import './SideBar.scss'
import LogoK from '../../assets/images/logo-k.png'
import LogoSubtitle from '../../assets/images/kairo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
    faEnvelope, 
    faHome, 
    faUser, 
    faScrewdriverWrench, 
    faPersonDigging, 
    faFile, 
    faBars, 
    faClose 
} from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { useState } from 'react';


const SideBar = () => {

    const [showNav, setShowNav] = useState(false);

    return (
        <div className='nav-bar'>
            <nav className={showNav ? 'mobile-show' : ''}>
                <NavLink 
                    onClick={() => setShowNav(false)}
                    exact='true' 
                    activeclassname='active'
                    to='/'
                >
                    <FontAwesomeIcon icon={faHome} color='#fff' />
                </NavLink>
                <NavLink 
                    onClick={() => setShowNav(false)}
                    exact='true' 
                    activeclassname='active' 
                    className='about-link' 
                    to='/about'
                >
                    <FontAwesomeIcon icon={faUser} color='#fff' />
                </NavLink>
                <NavLink 
                    onClick={() => setShowNav(false)}
                    exact='true' 
                    activeclassname='active'
                    className='skills-link' 
                    to='/skills'
                >
                    <FontAwesomeIcon icon={faScrewdriverWrench} color='#fff' />
                </NavLink>
                <NavLink 
                    onClick={() => setShowNav(false)}
                    exact='true' 
                    activeclassname='active' 
                    className='work-link' 
                    to='/work'
                >
                    <FontAwesomeIcon icon={faPersonDigging} color='#fff' />
                </NavLink>
                <NavLink 
                    onClick={() => setShowNav(false)}
                    exact='true' 
                    activeclassname='active' 
                    className='contact-link' 
                    to='/contact'
                >
                    <FontAwesomeIcon icon={faEnvelope} color='#fff' />
                </NavLink>
                <FontAwesomeIcon
                    onClick={() => setShowNav(false)} 
                    icon={faClose}
                    color='#ffd700'
                    size='3x'
                    className='close-icon'
                />
            </nav>
            <ul className='sideUl'>
            <li>
                    <a 
                        className='resume-link' 
                        target='blank'
                        rel='noreferrer'
                        href="data/resume.pdf"
                    >
                        <FontAwesomeIcon icon={faFile} color='#fff' />
                    </a>
                </li>
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
                        <FontAwesomeIcon icon={faGithub} color='#000' />
                    </a>
                </li>
            </ul>
            <FontAwesomeIcon 
                onClick={() => setShowNav(true)}
                icon={faBars}
                color='#ffd700'
                size='3x'
                className='hamburger-icon'
            />
        </div>
    );
}

export default SideBar;