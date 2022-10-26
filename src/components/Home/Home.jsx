import LogoTitle from '../../assets/images/logo-k.png'
import { Link } from 'react-router-dom';
import './Home.scss'


const Home = () => {
    return ( 
    <div className="container home-page">
        <div className="text-zone">
            <h1>Hi, <br />I'm
            <img src={LogoTitle} alt="developer" />
            airo
            <br />
            web developer
            </h1>
            <h2>Fullstack Developer</h2>
            <Link to='/contact' className='flat-button'> CONTACT ME</Link>
        </div>
    </div>
    );
}

export default Home;