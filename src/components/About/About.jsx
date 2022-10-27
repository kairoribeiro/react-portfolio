import { useState, useEffect} from 'react';
import AnimatedLetters from '../AnimatedLetters/AnimatedLetters';
import './About.scss'
import ReactDOM from "react-dom";


const About = (props) => {

    const [strArray, setStrArray] = useState(['A', 'b', 'o','u','t',' ','m','e'])
    const [idx, setIdx] = useState(12)


    return (
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

        </div>
    )
}

export default About;