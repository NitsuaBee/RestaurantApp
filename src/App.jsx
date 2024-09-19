import React from 'react'
import'./index.css'
import Navbar from './components/Navbar/NavBar';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/home/Home';
import Contact from './components/Contact/Contact';
import MenuOptions from './components/MenuOptions/MenuOptions';
import Header from './components/Header/Header';


export const App = () => {
  return (
    <>
      <div className='header-app'>
        <Navbar/>
      </div>
      <hr/>
      <div className="app">
        <Routes>
          < Route path='/' element ={<Home/>} />
          < Route path='/Menu' element={<MenuOptions/>} />
          < Route path='/Contact' element={<Contact/>} />
        </Routes>
      </div>
      <Contact/>
    </>
  )
}
export default App;
