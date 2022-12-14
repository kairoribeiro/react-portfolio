import logo from './logo.svg';
import './App.scss';
import { Route, Routes } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import Home from './components/Home/Home';
import About from './components/About/About';
import { useState, useEffect } from 'react';
import Contact from './components/Contact/Contact';
import Skills from './components/Skills/Skills'
import Work from './components/Work/Work'


function App() {
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
    <Routes>
      <Route path='/' element={<Layout/>}>
      <Route index element={<Home letterClass={letterClass} />}/>
      <Route path='/about' element={<About letterClass={letterClass} />}/>
      <Route path='/skills' element={<Skills letterClass={letterClass}/> }/>
      <Route path='/work' element={<Work letterClass={letterClass}/>}/>
      <Route path='/contact' element={<Contact letterClass={letterClass}/>}/>
      </Route>
    </Routes>
    </>
  )
}

export default App;
