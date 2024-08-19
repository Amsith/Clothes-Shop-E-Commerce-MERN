import React from 'react'
import './Footer.css'
import shoplogo from '../../Frontend_Assets/nav-logo.png'
import { Link } from 'react-router-dom';

// icons
import { IoLogoYoutube } from "react-icons/io5";
import { FaFacebookSquare } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
const Footer = () => {
    return (
        <>
            <div className='footer-div'>
                <hr />
                <div>
                   <Link to={'/'}><img src={shoplogo} width={100} alt="" /></Link> 
                </div>
                <div className='footer-menu'>
                    <p>Company</p>
                    <p>Products</p>
                    <p>Offices</p>
                    <p>About</p>
                    <p>Contact</p>
                </div>
                <div className='footer-icons'>
                    <IoLogoYoutube />
                    <FaFacebookSquare />
                    <FaSquareInstagram />
                </div>
            </div>

        </>
    )
}

export default Footer