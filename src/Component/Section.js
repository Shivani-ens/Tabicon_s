import React from 'react'
import ImageLink from './ImageLink'

const Section = () => {
  return (
    <React.Fragment>
      <div className='row my-4 mx-0 p-0 text-dark text-center'>
        <h3>Some Other ENS Apps You Might Like</h3>
        <div className='row'>
            <ImageLink/>
        </div>
        <p>version 1.0.1</p>
        <p>©2020 ENS Enterprises Private Limited. All Rights Reserved.</p>
      </div>
    </React.Fragment>
  )
}

export default Section;
