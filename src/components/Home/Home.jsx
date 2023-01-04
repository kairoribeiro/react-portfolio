import LogoTitle from '../../assets/images/logo-k.png'
import { Link } from 'react-router-dom';
import './Home.scss'
import { useState, useEffect} from 'react';
import AnimatedLetters from '../AnimatedLetters/AnimatedLetters';
import Loader from 'react-loaders';
import Img from '../Img/Img';


const Home = () => {

    const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
    const timer = setTimeout(() => {
        setLetterClass('text-animate-hover')
    }, 3000);

    return() => {
      clearTimeout(timer);
    }
});

    
    return ( 
    <>
    <div className="container home-page">
        <div className="text-zone">
            <h1>
                <span className={letterClass}>H</span>
                <span className={`${letterClass} _12`}>i,</span>
            <br />
                <span className={`${letterClass} _13`}>I</span>
                <span className={`${letterClass} _14`}>'m</span>
            <AnimatedLetters 
                letterClass={letterClass}
                strArray={' Kairo'.split('')}
                idx={12}
            />
            <br />
            <AnimatedLetters 
                letterClass={letterClass}
                strArray={'Software Engineer'.split('')}
                idx={15}
            />
            </h1>
            <h2>Full Stack Developer</h2>
            <Link to='/contact' className='flat-button'> CONTACT ME</Link>
        </div>
        <Img />
    </div>
    <Loader type='ball-pulse' />
    </>
    );
}

export default Home;