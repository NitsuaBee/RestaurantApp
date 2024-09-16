import React from 'react'
import { pictures } from '../../assets/pictures'
import './Contact.css'

const Contact = () => {
  return (
    <div className='contact-panel' id="contact">
        <div className="contact-left">
            <img src={pictures.ThaiCafeLogo} alt=""/>
                <p> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Amet nemo, consequuntur tempore itaque, eos laudantium nostrum qui soluta nihil cumque quas, saepe consequatur quaerat. Ipsum, magnam. A doloribus veniam voluptatum.</p>          
        </div>
        <div className="contact-right">
            <div className="contact-info">
                <h2>Contact Us</h2>
                <ul>
                    <li>1+123-456-789</li>
                    <li>123 Main St</li>
                    <li>ThaiCafe@ThaiCafe.com</li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Contact