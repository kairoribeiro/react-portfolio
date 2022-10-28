import { useState } from 'react';
import Loader from 'react-loaders';
import AnimatedLetters from '../AnimatedLetters/AnimatedLetters';
import './Contact.scss';

const Contact = (props) => {


    const [strArray, setStrArray] = useState(['C','o','n','t','a','c','t', ' ','m','e'])

    return ( 
        <>
        <div className='container contact-page'>
            <div className='text-zone'>
                <h1>
                    <AnimatedLetters
                        letterClass={props.letterClass}
                        strArray={strArray}
                        idx={10}
                    />
                </h1>
                <p>If you have any questions, please contact me
                </p>

                <div className='contact-form'>
                    <form>
                        <ul>
                            <li className='half'>
                                <input 
                                    type="text" 
                                    name='name' 
                                    placeholder='Name' 
                                    required 
                                />
                            </li>
                            <li className='half'>
                                <input
                                    type="email" 
                                    name='email' 
                                    placeholder='Email' 
                                    required 
                                />
                            </li>
                            <li>
                                <input
                                    type='text'
                                    name='subject'
                                    placeholder='Subject'
                                    required />
                            </li>
                            <li>
                                <textarea 
                                    name="message"
                                    placeholder='Message'
                                    required
                                ></textarea>
                            </li>
                            <li>
                                <input 
                                    type="submit" 
                                    className='flat-button' 
                                    value='SEND' />
                            </li>
                        </ul>
                    </form>
                </div>
            </div>
        </div>
        <Loader type='ball-pulse' />
        </>
    )
}

export default Contact;