import React from 'react'
import './OfferBanner.css'
import ExcluOfferBanner from '../../../Frontend_Assets/exclusive-offer-banner.png'


const OfferBanner = () => {
    return (
        <div className='offer-banner-div'>
            <div className='offer-banner'>
                <img src={ExcluOfferBanner} alt="" />
                <div className='offer-banner-about'>
                    <h1>Exclusive Offer</h1>
                    <p>Our short suit is a perfect fashion item for a perfect apparel to create a stylish and trendy look</p>
                    <button>Order Now!</button>
                </div>
            </div>
        </div>
    )
}

export default OfferBanner