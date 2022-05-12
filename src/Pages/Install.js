import React, { useState } from 'react'

const Install = () => {
    const [shop, setShop]=useState({shopName:''});
    const handleInstall=(e)=>{
        e.preventDefault();
        console.log(shop);
    }
    const verifyShop=()=>{
        console.log('Installed');
    }
  return (
    <React.Fragment>
     <div className='container m-5'>
      <form onSubmit={(e)=>handleInstall(e)}>
        <input className='mb-4'  type="text" name="shopName" value={shop.shopName} onChange={(e)=>setShop({[e.target.name]:e.target.value})} placeholder="Enter the shop name" /><br/>
        <input className='btn btn-dark mb-4' type="submit" onClick={verifyShop()} value="Install" />
      </form>
      </div>
    </React.Fragment>
  )
}

export default Install;
