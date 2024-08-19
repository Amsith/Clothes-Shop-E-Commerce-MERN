import React from 'react'
import './MensBanner.css'
import mensBanner from '../../../Frontend_Assets/mensbanner.jpeg'

//CSS applid form mensBanner componets

const MensBanner = () => {
  return (
    <div className='banner-div'>
        <div className='banner-img-div'>
            <img src={mensBanner} alt="" />
        </div>
    </div>
  )
}

export default MensBanner