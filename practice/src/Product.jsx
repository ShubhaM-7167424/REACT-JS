import React from 'react'

const Product = (props) => {
  return (
    <div className='product'>
      <h2>{props.name}</h2>
      <h2>{props.price}</h2>
      <h2>{props.specs.ram}</h2>
      <h2>{props.category[0]}</h2>
    </div>
  )
}

export default Product