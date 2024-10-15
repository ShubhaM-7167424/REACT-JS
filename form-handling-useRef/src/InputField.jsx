import React, { useState } from 'react'

const InputField = () => {

    let [name, setName] = useState('')
    let [email, setEmail] = useState('')

    function nameHandler(event) {
        setName(event.target.value)        
    }
    function emailHandler(event) {
        setEmail(event.target.value)
    }

    // 1 way binding => if the input field changes we want to update the state variable
    // 2 way binding => if the state variable changes and we want to update the input field
                 //  => in this case we have to write value = {name}

  return (
    <div className='form-data'>
        <h2>{name}</h2>
        <h2>{email}</h2>
        <button onClick={()=>{setName('Saurabh')}}>Change Name</button>
        <input onChange={nameHandler} type="text" placeholder='Enter your name' value={name} />
        <input onChange={emailHandler} type="email" placeholder='Enter your email' />
    </div>
  )
}

export default InputField