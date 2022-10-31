import logo from './logo.svg';
import './App.scss';
import { Route, Routes } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import Home from './components/Home/Home';
import About from './components/About/About';
import { useState, useEffect } from 'react';
import Contact from './components/Contact/Contact';


function App() {
  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
    setTimeout(() => {
        setLetterClass('text-animate-hover')
    }, 3000)
},[])


  return (
    <>
    <Routes>
      <Route path='/' element={<Layout/>}>
      <Route index element={<Home letterClass={letterClass} />}/>
      <Route path='/about' element={<About letterClass={letterClass} />}/>
      <Route path='/contact' element={<Contact letterClass={letterClass}/>} />
      </Route>
    </Routes>
    </>
  )
}

export default App;
