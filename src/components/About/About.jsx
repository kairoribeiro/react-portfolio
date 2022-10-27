import { useState, useEffect} from 'react';
import AnimatedLetters from '../AnimatedLetters/AnimatedLetters';
import './About.scss'
import ReactDOM from "react-dom";


const About = () => {

    const [letterClass, setLetterClass] = useState('text-animate')

    useEffect(() => {
        setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 3000)
    }, [])

    return (
        <div className='container about-page'>
            <div className='text-zone'>
                <h1>
                    <AnimatedLetters
                    letterClass={letterClass}
                    strArray={['A', 'b', 'o','u','t',' ','m','e']}
                    idx={12}
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