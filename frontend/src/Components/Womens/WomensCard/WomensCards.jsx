import React, { useEffect, useState } from 'react'
import { FaStar } from "react-icons/fa6";
import { FaStarHalfStroke } from "react-icons/fa6";
import { FaArrowDown } from "react-icons/fa";
import axios from 'axios';
import { Link } from 'react-router-dom';

/* The css match from POPULAR COLEECTIN for cards  */
//CSS applid for filter in mens components

const WomensCards = () => {

    const [womenColeection, setWomenCollection] = useState([]);

    const womens = () => {
        axios.get('http://localhost:8000/api/product')
            .then((res) => {
                const womensProduct = res.data.womensProduct; 
                setWomenCollection(womensProduct);
            })
            .catch((err) => {
                console.log("Fetching data error", err);
            });
    }

    useEffect(() => {
        womens();
    }, []);

  return (
    
    <>
     <div className='showing-page'>
              <div>Showing 1 - 10 Products</div>
              <button className='filter-button'>Sort by <FaArrowDown /> </button>

            </div>

            <div className='popular-div'>
                {womenColeection.map((women, index) => (
                    <div key={index} className='popular-card-div'>
                        <Link to={`/about/${women._id}`}> <div className='popular-sub-div'>
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


    </>
  )
}

export default WomensCards