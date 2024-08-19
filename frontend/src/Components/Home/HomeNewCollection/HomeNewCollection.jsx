import React, { useEffect, useState } from 'react'
import './HomeNewCollection.css'
import { FaStar } from "react-icons/fa6";
import { FaStarHalfStroke } from "react-icons/fa6";
import axios from 'axios';
import { Link } from 'react-router-dom';

const HomeNewCollection = () => {


    const [newcollection, setNewcollection] = useState([]);

    const newCollectionProducts = () => {
        axios.get('http://localhost:8000/api/product')
            .then((res) => {
                const latestproducts = res.data.latestproducts; // Ensure the backend sends this correctly
                setNewcollection(latestproducts);
            })
            .catch((err) => {
                console.log("Fetching data error", err);
            });
    }

    useEffect(() => {
        newCollectionProducts();
    }, []);

    return (
        <>
            <div className='popular-div'>
                {newcollection.map((latest, index) => (
                    <div key={index} className='popular-card-div'>
                      <Link to={`/about/${latest._id}`}><div className='popular-sub-div'>
                            <div className='popular-img'>
                                <img src={`http://localhost:8000/${latest.image}`} alt="" />
                            </div>
                            <div className='popular-stars'>
                                <FaStar /> <FaStar /> <FaStar /> <FaStar /> <FaStarHalfStroke />
                            </div>
                            <h3 className='popular-title'>{latest.title}</h3>
                            <div className='popular-price'>
                                <h5>${latest.price}</h5>
                                <h5>${latest.discountprice}</h5>
                            </div>
                        </div>
                        </Link> 
                    </div>
                ))}
            </div>







        </>
    )
}

export default HomeNewCollection