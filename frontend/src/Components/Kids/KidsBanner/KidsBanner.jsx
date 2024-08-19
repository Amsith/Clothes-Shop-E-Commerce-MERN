import React from 'react'
import kidsBanner from '../../../Frontend_Assets/kidsbanner.jpeg'


//CSS applid form Mens componets
const KidsBanner = () => {
  return (
    <div className='banner-div'>
        <div className='banner-img-div'>
            <img src={kidsBanner} alt="" />
        </div>
    </div>
  )
}

export default KidsBanner