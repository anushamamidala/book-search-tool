import React from 'react'

import image from '../../assets/loading.svg'
import './style.css'

const Loader = () => {

  return (
    <div className='loading'>
      <img src={image} width='100px' height='100px' alt="Loading data" />
    </div>
  )
}

export default Loader
