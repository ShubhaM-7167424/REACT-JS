import { useState } from 'react'
import React from 'react'
import './App.css'
import Product from './Product'

const App = () => {

  let [showProducts, setShowProducts] = useState(true)

  return (
    <>
      <h1>useEffect Demo</h1>
      <button onClick={()=>{setShowProducts(true)}}>Show</button> 
      <button onClick={()=>{setShowProducts(false)}}>Hide</button>

      {
        showProducts ? <Product /> : <h1>Product Not Available</h1>
      }
    </>
  )
}

export default App