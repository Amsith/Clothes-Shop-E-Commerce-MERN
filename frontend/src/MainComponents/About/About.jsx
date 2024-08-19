import React, { useContext, useEffect, useState } from 'react'
import './About.css'

//Icons
import { FaStar } from "react-icons/fa6";
import { FaStarHalfStroke } from "react-icons/fa6";
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { shopperCart } from '../../App';

const About = () => {

    const { id } = useParams();
    const [about, setAbout] = useState({})

    function aboutShow() {
        axios.get(`http://localhost:8000/api/product/${id}`)
            .then((res) => { setAbout(res.data) })
            .catch((error) => { console.log(error) })
    }

    useEffect(() => {
        aboutShow()
    }, [id])



    //Add to Cart
    const { cart, setCart } = useContext(shopperCart)

    const addCart = (about) => {
        setCart([...cart, about])
      }
      function removeCart(about) {
        setCart(cart.filter(c => c._id !== about._id));
      }
       // Helper function to check if student is in cart
       const isInCart = (aboutID) => {
        return cart.some(c => c._id === aboutID);
      };



    return (
        <>

            <div className='about-div'>


                <div className='about-img'>
                    <img src={`http://localhost:8000/${about.image}`} alt="" />
                </div>
                <div className='about-details'>
                    <h3 className='about-title'>{about.title}</h3>
                    <div className='about-stars'> <FaStar /> <FaStar /> <FaStar /> <FaStar /> <FaStarHalfStroke /></div>
                    <p className='about-about'>{about.about}</p>
                    <div className='about-price-div'>
                        <div className='about-price'>${about.price}</div>
                        <div className='about-discount-price'>${about.discountprice}</div>
                    </div>
                    <div className='about-sizes'>
                        <p className={({ isActive }) => isActive ? 'selected' : ''}>XS</p>
                        <p className={({ isActive }) => isActive ? 'selected' : ''}>S</p>
                        <p>M</p>
                        <p>L</p>
                        <p>XL</p>
                    </div>
                    <div >
                        {isInCart(about._id) ?
                            <button className='remove-cart-btn' onClick={() => removeCart(about)}>Remove from Cart</button> :
                            <button className='addto-cart-btn' onClick={() => addCart(about)}>Add to Cart</button>
                        }
                    </div>
                </div>


            </div>
        </>
    )
}

export default About;