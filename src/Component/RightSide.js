import React, { useState } from 'react'
import RightComponent from './RightComponent';

const RightSide = () => {

  const [user, setUser] = useState({
    setting:'', firstText:'', firstTextEmoji:'', secondText:'', secondTextEmoji:'', icon:'', faviconUrl:''
  });
  const handleSubmit= (e)=>{
    e.preventDefault();
    console.log(user);
  }

  return (
    <React.Fragment>
      <RightComponent arg={{user, setUser, handleSubmit}}/>
    </React.Fragment>
  )
}

export default RightSide;
