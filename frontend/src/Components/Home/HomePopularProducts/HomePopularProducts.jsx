import React, { useEffect, useState } from 'react';
import './HomePopularProducts.css';
import { FaStar, FaStarHalfStroke } from "react-icons/fa6";
import axios from 'axios';
import { Link } from 'react-router-dom';

const HomePopularProducts = () => {

    const [womenPopular, setWomenPopular] = useState([]);

    const popularwomen = () => {
        axios.get('http://localhost:8000/api/product')
            .then((res) => {
                //Random data
                const popularInWomen = res.data.popularInWomen;
                setWomenPopular(popularInWomen);
            })
            .catch((err) => {
                console.log("Fetching data error", err);
            });
    }

    useEffect(() => {
        popularwomen();
    }, []);

    return (
        <div className='popular-div'>
            {womenPopular.map((women, index) => (
                <div key={index} className='popular-card-div'>
                    <Link to={`/about/${women._id}`}><div className='popular-sub-div'>
                        <div className='popular-img'>
                            <img src={`http://localhost:8000/${women.image}`} alt="" />
                        </div>
                        <div className='popular-stars'>
                            <FaStar /> <FaStar /> <FaStar /> <FaStar /> <FaStarHalfStroke />
                        </div>
                        <h3 className='popular-title'>{women.title}</h3>
                        <div className='popular-price'>
                            <h5>${women.price}</h5>
                            <h5>${women.discountprice}</h5>

                        </div>
                    </div>
                    </Link>
                </div>
            ))}
        </div>
    );
}

export default HomePopularProducts;
