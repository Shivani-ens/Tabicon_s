import React from 'react'
import LeftSide from '../Component/LeftSide'
import RightSide from '../Component/RightSide'
import Section from '../Component/Section'


const Home = () => {
  return (
    <React.Fragment>
      <div className='row top_section m-0'>
        <LeftSide/>
        <RightSide/>
      </div>
      <Section/>
    </React.Fragment>
  )
}

export default Home
