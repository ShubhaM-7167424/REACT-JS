import React from 'react'
import { Link } from 'react-router-dom'
import Header from './Header'

const Track = () => {
  return (
    <div>
      <h1>You have successfully logged In.</h1>
      <Link to={'/demo'}>Demo</Link>
      <Header/>
    </div>
  )
}

export default Track