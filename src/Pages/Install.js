import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const Install = () => {
    const [shop, setShop]=useState({shopName:''});
    const handleInstall=(e)=>{
        e.preventDefault();
        console.log(shop);
    }
    const navigate= useNavigate();
    // const verifyShop=()=>{
        
    // }
  return (
    <React.Fragment>
     <div className='container m-5'>
      <form method='post' onSubmit={(e)=>handleInstall(e)}>
        <input className='mb-4'  type="text" name="shopName" value={shop.shopName} onChange={(e)=>setShop({[e.target.name]:e.target.value})} placeholder="Enter the shop name" /><br/>
        <input className='btn btn-dark' type="submit" onClick={(e)=>{navigate('/shopify');}} value="Install" />
        <input className='btn btn-dark mx-4' type="submit" onClick={(e)=>{navigate('/home');}} value="Home" />
      </form>
      </div>
    </React.Fragment>
  )
}

export default Install;
