import React from 'react'
import Products from './Products'
import './App.css'
import { useState } from 'react'

const App = () => {
      let [showProducts, setShowProducts] = useState(false)
  return (
    <div>
      <h1>All Products</h1>
      <button onClick={()=>{setShowProducts(true)}}>Show</button>
      <button onClick={()=>{setShowProducts(false)}}>Hide</button>
      {
            showProducts ? <Products /> : <h1>Product Not Availabel</h1>
      }
    </div>
  )
}

export default App