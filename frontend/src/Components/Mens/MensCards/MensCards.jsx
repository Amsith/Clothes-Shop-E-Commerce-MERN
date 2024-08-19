import React, { useEffect, useState } from 'react'
import './MensCards.css'
import { Link } from 'react-router-dom';

import { FaStar } from "react-icons/fa6";
import { FaStarHalfStroke } from "react-icons/fa6";
import { FaArrowDown } from "react-icons/fa";
import axios from 'axios';

/* The css match from POPULAR COLEECTIN Components */

const MensCards = () => {


    const [mensColeection, setMensCollection] = useState([]);

    const mens = () => {
        axios.get('http://localhost:8000/api/product')
            .then((res) => {
                const mensProduct = res.data.mensProduct;
                setMensCollection(mensProduct);
            })
            .catch((err) => {
                console.log("Fetching data error", err);
            });
    }

    useEffect(() => {
        mens();
    }, []);

    return (
        <>
            <div className='showing-page'>
                <div>Showing 1 - 10 Products</div>
                <button className='filter-button'>Sort by <FaArrowDown /> </button>

            </div>

            <div className='popular-div'>
                {mensColeection.map((mens, index) => (
                    <div key={index} className='popular-card-div'>
                        <Link to={`/about/${mens._id}`}> <div className='popular-sub-div'>
                            <div className='popular-img'>
                                <img src={`http://localhost:8000/${mens.image}`} alt="" />
                            </div>
                            <div className='popular-stars'>
                                <FaStar /> <FaStar /> <FaStar /> <FaStar /> <FaStarHalfStroke />
                            </div>
                            <h3 className='popular-title'>{mens.title}</h3>
                            <div className='popular-price'>
                                <h5>${mens.price}</h5>
                                <h5>${mens.discountprice}</h5>
                            </div>
                        </div>
                        </Link>
                    </div>
                ))}
            </div>



        </>
    )
}

export default MensCards