import React from 'react'
import './MenuOptions.css'
import { menuItems } from '../../assets/pictures'

const MenuOptions = () => {

    const MenuOptions = ({category, setCategory}) => {

    }

  return (
    <div className='menu-items' id='menu'>
        <h1>Menu Items</h1>
        <p>Take a look at our full menu and indulge in the finest Asian cuisine we have to offer!</p>
        <div className="menu-list">
            {menuItems.map((item, index) => {
                return(
                    <div key={index} className="menu-list-item">
                        <p>{item.menu_name}</p>
                        <img src={item.menu_image} alt=''/>
                    </div>
                )
            })}
        </div>
    </div>
  )
}

export default MenuOptions