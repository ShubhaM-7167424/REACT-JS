import React, { useContext } from 'react'
import { UserContext } from './App'


const Category = () => {

    const u = useContext(UserContext)

  return (
    <div className='category'>
        <h2>Category Component {u.username}</h2>
        <h2>Category Component {u.token}</h2>
        <button onClick={()=>{
            u.setUsername('rahul')
        }}>Change Name</button>
    </div>
  )
}

export default Category