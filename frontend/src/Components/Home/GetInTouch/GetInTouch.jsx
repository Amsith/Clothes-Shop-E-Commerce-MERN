import React from 'react'
import './GetInTouch.css'
import getinBanner from '../../../Frontend_Assets/getintouch.jpeg'

const GetInTouch = () => {
    return (
        <>
            <div className='getInTouch-banner-div'>
                <div className='getInTouch-banner'>
                    <img src={getinBanner} alt="" />
                </div>
                <div className='getin-about-section'>
                    <div>
                        <h1 className='getin-h1'>Get in Touch With Shopper</h1>
                    </div>
                    <div>
                        <form className='getin-form' action="">
                            <div className='getin-form-labelss'>
                                <label htmlFor="">Name</label> <br />
                                <input type="text" placeholder='Enter Your Name' />
                            </div>
                            <div className='getin-form-labelss'>
                                <label htmlFor="">Email Address</label> <br />
                                <input type="email" placeholder='Enter Your Email Address' />
                            </div>
                            <div className='getin-form-labelss'>
                                <label htmlFor="">Your Message</label> <br />
                                <textarea name=""  id="" placeholder='Enter Your Message'></textarea>
                            </div>

                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default GetInTouch