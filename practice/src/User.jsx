import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const User = () => {
  return (
    <>
        <h1>Users</h1>
        <div className="users">
            <div className="user"><Link to={'/user/shubham'}>Shubham</Link></div>
            <div className="user"><Link to={'/user/vijay'}>Vijay</Link></div>
            <div className="user"><Link to={'/user/saurabh'}>Saurabh</Link></div>
        </div>
        <Outlet/>
    </>
  )
}

export default User