import React, { useState } from 'react';

const Modal = () => {
    const [modal, setModal]= useState({modal:''});
    const submitHandler=(e)=>{
        e.preventDefault();
        console.log(modal);
    }
  return (
    <React.Fragment>
    <div className="modal container fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
    <div className="modal-dialog modal-lg">
        <div className="modal-content">
        <div className="modal-header top_section">
            <h5 className="modal-title" id="staticBackdropLabel">Contact support for Tabicon App</h5>
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div className="modal-body text-dark ">
            <div className='d-flex'>
                <img src='https://tabicon.herokuapp.com/assets/fab.png' alt='..' style={{width: '8%'}}/>
                <div>
                <h5 className='text-start'>Tabicon</h5>
                <h6 className='text-muted'>by ENS Enterprises Pvt.Ltd.</h6>
                </div>
            </div>
            <div className='d-flex'>
            ENS Enterprises will be able to address any questions or issues you have with the tabicon app.
            </div>
            <hr/>
            <div>
                <form>
                <div className="row ">
                <label className='text-start' for="comment">Describe what you need in detail</label>
                <textarea className="form-control" name="Message" value={modal.message} onChange={(e)=>setModal({...modal, [e.target.name]:e.target.value})} rows='2' maxLength={30} id="comment"></textarea>
                <span className='text-start text-muted'>Minimum 30 characters</span>
                </div>
                </form>
            </div>
            <div className='text-start'>Replies will be sent to your account email: einsteinnephew@gmail.com</div>
        </div>
        <div className="modal-footer top_section">
            <button type="button" className="btn btn-light" data-bs-dismiss="modal">Close</button>
            <button type="button" className="btn btn-light" onClick={(e)=>submitHandler(e)} data-bs-dismiss="modal">Send Message</button>
        </div>
        </div>
    </div>
    </div> 
    </React.Fragment>
  )
}

export default Modal;
