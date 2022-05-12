import React from 'react'
import Home from '../Pages/Home'
import Install from '../Pages/Install'
import { BrowserRouter, Routes, Route } from "react-router-dom";

const Index = () => {
  return (
    <BrowserRouter>
    <Routes>
        <Route exact path='/' element={<Install/>}/>
        <Route exact path='/home' element={<Home/>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default Index;
