import React from 'react'
import Home from '../Pages/Home'
import Install from '../Pages/Install'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NotFound from '../Pages/NotFound';
import Shopify from '../Pages/Shopify';

const Index = () => {
  return (
    <BrowserRouter>
    <Routes>
        <Route exact path='/' element={<Install/>}/>
        <Route exact path='/shopify' element={<Shopify/>}/>
        <Route exact path='/home' element={<Home/>}/>
        <Route exact path='*' element={<NotFound/>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default Index;
