import React from 'react'

const ImageLink = () => {
  return (
    <React.Fragment>
      <div className='col-md-4 col-sm-4 col-4'>
        <a href='https://apps.shopify.com/cart-cloner' target="_blank" rel="noopener noreferrer"><img src='https://tabicon.herokuapp.com/assets/cartcloner.jpg' alt='..' className='w-100'/></a>
      </div>
      <div className='col-md-4 col-sm-4 col-4'>
        <a href='https://apps.shopify.com/smart-age-verification' target="_blank" rel="noopener noreferrer"><img src='https://tabicon.herokuapp.com/assets/sav.jpg' alt='..' className='w-100'/></a>
      </div>
      <div className='col-md-4 col-sm-4 col-4'>
        <a href='https://apps.shopify.com/product-timer' target="_blank" rel="noopener noreferrer"><img src='https://tabicon.herokuapp.com/assets/PRT.jpg' alt='..' className='w-100'/></a>
      </div>
    </React.Fragment>
  )
}

export default ImageLink
