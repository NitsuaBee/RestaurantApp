import React from 'react'
import './Header.css'
import { useState } from 'react'
import { Link } from 'react-router-dom'

// const [click, setClick] = useState("menu")


const Header = () => {
  return (
    <div className='header'>
        <div className="header-contents">
            <h2>Come and Enjoy Authentic Thai and Chinese Cuisine!</h2>
            <p>At Thai Cafe, we invite you to experience the vibrant and delicious world of Thai and Chinese cuisine. From savory curries to fragrant soups and perfectly balanced stir-fries, each dish is crafted with fresh ingredients and traditional recipes. Whether you're dining in or taking out, let the flavors of Thailand bring a little spice and joy to your day!</p>
            <Link to="menu">
                <button className='button-header'>View Menu</button>
            </Link>
            </div>
    </div>
  )
}

export default Header