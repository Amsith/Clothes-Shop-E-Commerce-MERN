import React from 'react'
import './HomeBanner.css'
import homebanner from '../../../Frontend_Assets/home-image.png'
import { FaArrowRightLong } from "react-icons/fa6";


const HomeBanner = () => {
  return (
    <>
    <div className='home-div'>
        <div className='home-banner'>
            <img src={homebanner} alt="" />
        </div>
        <div className='home-about'>
            <hr />
            <p>Style is a way to say <br /> who you are without having to speak</p>
            <button>Latest Collection <FaArrowRightLong /></button>
            <hr />
        </div>
    </div>
</>
  )
}

export default HomeBanner