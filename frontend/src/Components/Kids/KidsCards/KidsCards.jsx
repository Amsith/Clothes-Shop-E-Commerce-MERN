import React, { useEffect, useState } from 'react'


import { FaStar } from "react-icons/fa6";
import { FaStarHalfStroke } from "react-icons/fa6";
import { FaArrowDown } from "react-icons/fa";
import axios from 'axios';
import { Link } from 'react-router-dom';

/* The css match from POPULAR COLEECTIN Components */

const KidsCards = () => {

    const [kidsColeection, setKidsCollection] = useState([]);

    const kids = () => {
        axios.get('http://localhost:8000/api/product')
            .then((res) => {
                const kidsProduct = res.data.kidsProduct;
                setKidsCollection(kidsProduct);
            })
            .catch((err) => {
                console.log("Fetching data error", err);
            });
    }

    useEffect(() => {
        kids();
    }, []);



    return (

        <>

            <div className='showing-page'>
                <div>Showing 1 - 10 Products</div>
                <button className='filter-button'>Sort by <FaArrowDown /> </button>

            </div>
            <div className='popular-div'>
                {kidsColeection.map((kids, index) => (
                    <div key={index} className='popular-card-div'>
                      <Link to={`/about/${kids._id}`}>  <div className='popular-sub-div'>
                            <div className='popular-img'>
                                <img src={`http://localhost:8000/${kids.image}`} alt="" />
                            </div>
                            <div className='popular-stars'>
                                <FaStar /> <FaStar /> <FaStar /> <FaStar /> <FaStarHalfStroke />
                            </div>
                            <h3 className='popular-title'>{kids.title}</h3>
                            <div className='popular-price'>
                                <h5>${kids.price}</h5>
                                <h5>${kids.discountprice}</h5>
                            </div>
                        </div>
                        </Link> 
                    </div>
                ))}
            </div>


        </>
    )
}

export default KidsCards