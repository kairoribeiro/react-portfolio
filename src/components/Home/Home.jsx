import LogoTitle from '../../assets/images/logo-k.png'
import { Link } from 'react-router-dom';
import './Home.scss'
import { useState, useEffect} from 'react';
import AnimatedLetters from '../AnimatedLetters/AnimatedLetters';
import Loader from 'react-loaders';


const Home = (props) => {

    const [nameArray, setNameArray] = useState([' ','K','a', 'i', 'r', 'o'])
    const [jobArray, setJobArray] = useState(['w','e','b',' ','d','e','v','e','l','o','p','e','r','.'])

    
    return ( 
    <>
    <div className="container home-page">
        <div className="text-zone">
            <h1>
                <span className={props.letterClass}>H</span>
                <span className={`${props.letterClass} _12`}>i,</span>
            <br />
                <span className={`${props.letterClass} _13`}>I</span>
                <span className={`${props.letterClass} _14`}>'m,</span>
            {/* <img src={LogoTitle} alt="developer" /> */}
            <AnimatedLetters 
                letterClass={props.letterClass}
                strArray={nameArray}
                idx={12}
            />
            <br />
            <AnimatedLetters 
                letterClass={props.letterClass}
                strArray={jobArray}
                idx={15}
            />
            </h1>
            <h2>Full Stack Developer</h2>
            <Link to='/contact' className='flat-button'> CONTACT ME</Link>
        </div>
    </div>
    <Loader type='ball-pulse' />
    </>
    );
}

export default Home;