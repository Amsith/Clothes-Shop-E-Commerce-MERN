import React from 'react'
import womensBanner from '../../../Frontend_Assets/womensbanner.jpeg'

//CSS applid form mensBanner componets
const WomensBanner = () => {
  return (
    <div className='banner-div'>
        <div className='banner-img-div'>
            <img src={womensBanner} alt="" />
        </div>
    </div>
  )
}

export default WomensBanner