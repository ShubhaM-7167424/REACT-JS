import React from 'react'
import { Link, Outlet } from 'react-router-dom';

const Products = () => {
  return (
      <>
      <h1>Products</h1>
          <div className="products">
              <div className="product"><Link to={'/products/apple'}>Apple</Link></div>
              <div className="product"><Link to={'/products/watch'}>Watch</Link></div>
              <div className="product"><Link to={'/products/banana'}>Banana</Link></div>
          </div>
          <Outlet/>
      </>
  );
}

export default Products