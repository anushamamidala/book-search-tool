import React from 'react'

import image from '../../assets/loader.gif'
import './style.css'

const Loader = () => {

  return (
    <div className='loading'>
      <img src={image} alt="Loading data" />
    </div>
  )
}

export default Loader
