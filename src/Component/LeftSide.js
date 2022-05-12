import React from 'react'
import Modal from './Modal';

const LeftSide = () => {
  return (
    <React.Fragment>
      <div className='col-lg-3 col-md-3 col-sm-3 side text-center'>
      <div>
      <img className='side_img' src="https://tabicon.herokuapp.com/assets/gift.gif" alt=".."/>
      </div>
      <h3 className='h3'>Welcome</h3>
      <p>Let's bring back lost customers</p>
      <button type="button" className="btn btn-light rounded-pill px-5 my-2" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
        Help
      </button>
        <React.Fragment>
        <Modal/>
        </React.Fragment>
      <h3>By ENS Enterprises</h3>
      </div>
    </React.Fragment>
  )
}

export default LeftSide;
