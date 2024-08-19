import React from 'react'
import './HomeTitle.css'

const HomeTitle = (props) => {
  return (
    <div className='home-title'>
       <h1>{props.title}</h1>
       <span></span>
    </div>
  )
}

export default HomeTitle