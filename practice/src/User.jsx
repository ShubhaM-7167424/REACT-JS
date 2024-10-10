import React from 'react'
import { useState } from 'react'

const User = () => {

        let [name, setName] = useState('rahul')
        let [age, setAge] = useState(20)

        function changeName() {
                setName('shubham')
                console.log(name);          
        }
        function changeAge() {
                setAge(89)
        }

  return (
    <div className='user'>
        <h2>{name}</h2>
        <h2>{age}</h2>
        <button onClick={changeName}>Change Name</button>
        <button onClick={changeAge}>Change Age</button>
    </div>
  )
}

export default User