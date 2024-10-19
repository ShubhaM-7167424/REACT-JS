import React from 'react'
import { Link, Outlet } from 'react-router-dom';

const Country = () => {
  return (
      <>
          <h1>Country</h1>
          <div className="countrys">
              <div className="country"><Link to={'/country/india'}>India</Link></div>
              <div className="country"><Link to={'/country/australia'}>Australia</Link></div>
              <div className="country"><Link to={'/country/singapore'}>Singapore</Link></div>
          </div>
              <Outlet/>
      </>
  );
}

export default Country