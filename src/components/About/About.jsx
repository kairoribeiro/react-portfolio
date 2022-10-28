import { useState, useEffect} from 'react';
import AnimatedLetters from '../AnimatedLetters/AnimatedLetters';
import './About.scss'
import ReactDOM from "react-dom";
import Loader from 'react-loaders';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
    faCss3,
    faGithub,
    faHtml5,
    faJsSquare,
    faReact,
    faNode,
    faMdb

} from '@fortawesome/free-brands-svg-icons';


const About = (props) => {

    const [strArray, setStrArray] = useState(['A', 'b', 'o','u','t',' ','m','e'])
    const [idx, setIdx] = useState(12)


    return (
        <>
        <div className='container about-page'>
            <div className='text-zone'>
                <h1>
                    <AnimatedLetters
                    letterClass={props.letterClass}
                    strArray={strArray}
                    idx={idx}
                    />
                </h1>
                <p>As a Software Engineer with a background in civil 
                    engineering, my passion for learning new skills 
                    and technologies pairs well with my drive for 
                    constant self-improvement.
                </p>
                <p>I have always been involved in solving problems 
                    creatively and I enjoy working in diverse and 
                    inclusive environments that allow me to build 
                    authentic relationships and collaborate with those around me.
                </p>
            </div>

            <div className='stage-cube-cont'>
                <div className='cubespinner'>
                    <div className='face1'>
                        <FontAwesomeIcon icon={faNode} color="#7CfC00" />
                    </div>
                    <div className='face2'>
                        <FontAwesomeIcon icon={faHtml5} color="#f06529" />
                    </div>
                    <div className='face3'>
                        <FontAwesomeIcon icon={faCss3} color="#28a4d9" />
                    </div>
                    <div className='face4'>
                        <FontAwesomeIcon icon={faReact} color="#5ed4f4" />
                    </div>
                    <div className='face5'>
                        <FontAwesomeIcon icon={faJsSquare} color="#efd81d" />
                    </div>
                    <div className='face6'>
                        <FontAwesomeIcon icon={faGithub} color='#000000'/>
                    </div>
                </div>
            </div>
        </div>
        <Loader type='pacman' />
        </>
    )
}

export default About;