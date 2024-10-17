import React from 'react'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import About from './components/About'
import './App.css'
import Product from './components/Product'
import Services from './components/Services'
import Home from './components/Home'
import Header from './components/Header'
import Image from './components/about/Image'
import Location from './components/about/Location'
import Price from './components/about/Price'
import RefDemo from './components/RefDemo'

const App = () => {
  return (

    <>

    <RefDemo/>

    {/* <BrowserRouter>

      <Header/>
    
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/about' element={<About/>} >
          <Route path='image' element={<Image/>} />
          <Route path='location' element={<Location/>} />
          <Route path='price' element={<Price/>} />
        </Route>
        <Route path='/product' element={<Product/>} />
        <Route path='/services' element={<Services/>} />
      </Routes>
    </BrowserRouter> */}

    </>
  )
}

export default App