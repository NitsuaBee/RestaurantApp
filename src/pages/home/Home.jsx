import React, { useState } from 'react';
import './Home.css';
import Header from '../../components/Header/Header'
import MenuOptions from '../../components/MenuOptions/MenuOptions';
import Contact from '../../components/Contact/Contact';

const Home = () => {

    const [category, setCategory] = useState('All');

  return (
    <div>
        <Header/>
        <MenuOptions/>
    </div>
  )
}

export default Home