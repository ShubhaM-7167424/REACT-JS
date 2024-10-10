import React from 'react'

const Product = (props) => {

  let {name, price, specs, category} = props

  return (
    <div className='product'>
      <h2>{name}</h2>
      <h2>{price}</h2>
      <h2>{specs.ram}</h2>
      <h2>{category[0]}</h2>
    </div>
  )
}

export default Product