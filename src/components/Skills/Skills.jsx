import './Skills.scss'
import { useState } from 'react';
import Loader from 'react-loaders';
import AnimatedLetters from '../AnimatedLetters/AnimatedLetters';


const Skills = (props) => {

    return ( 
        <>
        <div className='container skills-page'>
            <h1 className='page-title'>
                <AnimatedLetters 
                    letterClass={props.letterClass}
                    strArray={'Skills'.split('')}
                    idx={10}
                />
            </h1>
        </div>
        <Loader type='ball-pulse' />
        </>
    );
}

export default Skills;