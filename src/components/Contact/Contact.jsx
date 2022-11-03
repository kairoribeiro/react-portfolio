import { useState, useEffect, useRef } from 'react';
import Loader from 'react-loaders';
import AnimatedLetters from '../AnimatedLetters/AnimatedLetters';
import './Contact.scss';
import emailjs from '@emailjs/browser';

const Contact = () => {

    const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
    const timer = setTimeout(() => {
        setLetterClass('text-animate-hover')
    }, 3000);

    return() => {
      clearTimeout(timer);
    }
});
    

    const form = useRef();

    const  {REACT_APP_PUBLIC_KEY,REACT_APP_TEMPLATE_ID,REACT_APP_SERVICE_ID} = process.env

    const sendEmail = (evt) => {
        evt.preventDefault();

        emailjs.sendForm(`${REACT_APP_SERVICE_ID}`,`${REACT_APP_TEMPLATE_ID}`, form.current, `${REACT_APP_PUBLIC_KEY}`)
            .then(() => {
                alert('Message successfully sent!');
                window.location.reload(false)
            }, () => {
                alert("Failed to send message, please try again");
            });
    };

    return (
        <>
            <div className='container contact-page'>
                <div className='text-zone'>
                    <h1>
                        <AnimatedLetters
                            letterClass={letterClass}
                            strArray={'Contact me'.split('')}
                            idx={10}
                        />
                    </h1>
                    <p>If you have any questions, please contact me
                    </p>

                    <div className='contact-form'>
                        <form ref={form} onSubmit={sendEmail}>
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