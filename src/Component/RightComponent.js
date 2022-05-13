import React, { useState } from 'react'
import './RightSide.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const RightComponent = ({ arg: {user, setUser, handleSubmit}}) => {
    const [status, setStatus]=useState(false);
    // const [firstEmo, setFirstEmo]=useState();

    const toggle = (e)=>{
      console.log((!status));
      setStatus({...status, [e.target.name]:e.target.value})
    }
    const alertMsg =()=>{
      toast.success('Successful');
      
    }
  return (
    <React.Fragment>
    <div className='col-lg-9 col-md-9 col-sm-9 right_side text-dark bg-light'>
    <form onSubmit={(e)=> handleSubmit(e)} className=' '>
    <div className='container text-center'>
      <label><h2 className='text-center'>Setting</h2></label>
      <div className="form-switch">
      <button name="setting" value={user.status}  onClick={toggle}  className={"px-3 btn btn-success rounded-pill " + (status ? "btn-danger": " ")}>
        {status ? 'Disable' : 'Enable'}
      </button>
      
    </div>
      
     <div className='row d-flex'>
        <div className="row d-flex">
        <div className="col-6">
          <div className="form-group text-start mb-3">
          <label className='text-start' HtmlFor="formGroupExampleInput">First Text</label>
            <input type="text" className="form-control" id="formGroupExampleInput" placeholder="hello" onChange={(e)=>setUser({...user, [e.target.name]:e.target.value})} name="firstText" value={user.firstText}/>
          </div>
        </div>
        <div className="col-6">
          <div className="form-group mb-3">
          <label HtmlFor=""></label>
            <select className="form-select" name="firstTextEmoji" onChange={(e)=>setUser({...user, [e.target.name]:e.target.value})} id="" aria-label="Floating label select example">
              <option value="&#128536;" selected>&#128536;</option>
              <option value="&#128525;">&#128525;</option>
              <option value="&#128540;">&#128540;</option>
              <option value="&#129300;">&#129300;</option>
            </select>
          </div>
        </div>
      </div>

      <div className="row d-flex">
        <div className="col-6">
          <div className="form-group text-start mb-3">
          <label className='' HtmlFor="formGroupExampleInput">Second Text</label>
            <input type="text" className="form-control" id="formGroupExampleInput" placeholder="me" onChange={(e)=> setUser({...user, [e.target.name]:e.target.value})} name="secondText" value={user.secondText}/>
          </div>
        </div>
        <div className="col-6">
          <div className="form-group mb-3">
          <label HtmlFor=""></label>
            <select className="form-select" onChange={(e)=> setUser({...user, [e.target.name]:e.target.value})} name="secondTextEmoji" id="" aria-label="Floating label select example">
            <option value="&#128536;" selected>&#128536;</option>
            <option value="&#128525;" >&#128525;</option>
            <option value="&#128540;" >&#128540;</option>
            <option value="&#129300;" >&#129300;</option>
            </select>
          </div>
        </div>
      </div>

      <div className="row d-flex">
        <div className="col-6">
          <div className="form-group mb-3">
          <label HtmlFor=""></label>
            <select className="form-select" name="icon" onChange={(e)=> setUser({...user, [e.target.name]:e.target.value})} id="" aria-label="Floating label select example">
            <option className='justify-content-end text-muted' value="1" selected disabled>Choose the icon</option>
            <option className='justify-content-end' value="Heartgift &#128157;">Heartgift &#128157; </option>
            <option className='justify-content-end' value="Fire &#128293; ">Fire &#128293; </option>
            <option className='justify-content-end' value="Home &#128146; ">Home &#128146; </option>
            <option className='justify-content-end' value="Diamond &#128142;">Diamond &#128142; </option>
            </select>
          </div>
        </div>
        <div className="col-6">
          <div className="form-group text-start mb-3">
          <label HtmlFor="formGroupExampleInput">Favicon Url</label>
            <input type="text" className="form-control" name="faviconUrl" value={user.faviconUrl}  id="formGroupExampleInput" placeholder="" onChange={(e)=> setUser({...user, [e.target.name]:e.target.value})} />
{//             <div className='row d-flex text-muted'>*if you want set your favicon then url should be this formate <br/>"https://www.example.com/favicon.ico".</div>
       }</div>
        </div>
      </div>
      <div className='row g-2'>
        <div className='form-group col-md'>
          <button type='submit' onClick={alertMsg} className='btn btn-primary px-5'>Submit</button>
        <ToastContainer/>
        </div>
      </div>
      
        </div>

     </div> 
     </form>  
    </div>
    </React.Fragment>
  )
}

export default RightComponent;
