import './Skills.scss'
import { useState, useEffect } from 'react';
import Loader from 'react-loaders';
import AnimatedLetters from '../AnimatedLetters/AnimatedLetters';


const Skills = () => {

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
        <div className='container skills-page'>
            <h1 className='page-title'>
                <AnimatedLetters 
                    letterClass={letterClass}
                    strArray={'Skills'.split('')}
                    idx={10}
                />
            </h1>
            <div className='skills-info'>
            <p>My skill set includes languages and 
                technologies like Javascript, Python, 
                React, Node, Express, Django, PostgreSQL, 
                MongoDB, Bootstrap, Google OAuth, HTML, and CSS.
            </p>
            <div className='skills-images'>
                <img src="/data/html.png" alt="HTML"/>
                <img src="/data/css.png" alt="CSS"/>
                <img src="/data/js.png" alt="JAVASCRIPT"/>
                <img src="/data/bootstrap.png" alt="BOOTSTRAP"/>
                <img src="/data/mongodb.png" alt="MONGODB"/>
                <img src="/data/express.png" alt="EXPRESS"/>
                <img src="/data/node.png" alt="NODEJS"/>
                <img src="/data/react.png" alt="REACT"/>
                <img src="/data/python.png" alt="PYTHON"/>
                <img src="/data/django.png" alt="DJANGO"/>
                <img src="/data/postgresql.png" alt="POSTGRESQL"/>
            </div>
            </div>
        </div>
        <Loader type='ball-pulse' />
        </>
    );
}

export default Skills;