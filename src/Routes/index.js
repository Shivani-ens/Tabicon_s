import React from 'react'
import Home from '../Pages/Home'
import Install from '../Pages/Install'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NotFound from '../Pages/NotFound';
import Shopify from '../Pages/Shopify';
import AppInstall from '../Pages/AppInstall';

const Index = () => {
  return (
    <BrowserRouter>
    <Routes>
        <Route exact path='/' element={<Install/>}/>
        <Route exact path='/home' element={<Home/>}/>
        <Route exact path='/AppInstall' element={<AppInstall/>}/>
        <Route exact path='/Shopify' element={<Shopify/>}/>
        <Route exact path='*' element={<NotFound/>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default Index;
