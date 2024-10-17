import React from 'react'
import { Link } from 'react-router-dom';

const Header = () => {
  return (
      <>
          <nav className="nav">
              <ul>
                  <li>
                      <Link to={"/"}>Home</Link>
                  </li>
                  <li>
                      <Link to={"/about"}>About</Link>
                  </li>
                  <li>
                      <Link to={"/product"}>Product</Link>
                  </li>
                  <li>
                      <Link to={"/services"}>Services</Link>
                  </li>
              </ul>
          </nav>
      </>
  );
}

export default Header