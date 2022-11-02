import './Work.scss'
import { useState } from 'react';
import AnimatedLetters from '../AnimatedLetters/AnimatedLetters';
import Loader from 'react-loaders';
import projectData from '../../data/project.json'


const Work = (props) => {

    const renderProject  = (projectData) => {
        return (
            <div className='images-container'>
                {
                    projectData.map((proj, idx) => {
                        return (
                            <div className='image-box' key={idx}>
                                <img 
                                    src={proj.image} 
                                    className="project-image" 
                                    alt="portfolio" />
                                <div className='content'>
                                    <p className='title'>{proj.title}</p>
                                    <h4 className='description'>{proj.description}</h4>
                                    <button 
                                        className='btn' 
                                        onClick={()=> window.open(proj.github)}
                                    >GITHUB</button>
                                    <button 
                                        className='btn'
                                        onClick={()=> window.open(proj.deployment)}
                                    >VIEW</button>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        );
    }

    return (
        <>
        <div className='container work-page'>
            <h1 className='page-title'>
                <AnimatedLetters
                    letterClass={props.letterClass}
                    strArray={'My Work'.split('')}
                    idx={10}
                />
            </h1>
            <div>{renderProject(projectData.projectData)}</div>
        </div>
        <Loader type='ball-pulse' />
        </>
    );
}

export default Work;