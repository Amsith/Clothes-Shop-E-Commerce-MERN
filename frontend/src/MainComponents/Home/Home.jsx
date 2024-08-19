import React from 'react'
import './Home.css'
import HomeBanner from '../../Components/Home/HomeBanner/HomeBanner'
import HomePopularProducts from '../../Components/Home/HomePopularProducts/HomePopularProducts'
import HomeTitle from '../../Components/Home/HomeTitle/HomeTitle'
import OfferBanner from '../../Components/Home/ExclusiveOfferBanner/OfferBanner'
import HomeNewCollection from '../../Components/Home/HomeNewCollection/HomeNewCollection'
import GetInTouch from '../../Components/Home/GetInTouch/GetInTouch'

export const Home = () => {
    return (
        <>
           <HomeBanner/>
           <HomeTitle title={'Popular in Women'}/>
           <HomePopularProducts/>
           <OfferBanner/>
           <HomeTitle title={'New Collections'}/>
           <HomeNewCollection/>
           <GetInTouch/>

        </>
    )
}
