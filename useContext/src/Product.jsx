import React, { useContext } from 'react'
import Category from './Category'
import { UserContext } from './App'

const Product = () => {

    const p = useContext(UserContext)

  return (
    <div className='product'>
        <h1>Product Component {p.username}</h1>
        <h1>Product Component {p.token}</h1>
        <Category  />
    </div>
  )
}

export default Product