import React, { useEffect, useRef } from 'react'
import { useState } from 'react'

const RefDemo = () => {
    let [name, setName] = useState('shubham')
    let normalVar = 5
    let refVar = useRef(10)

    useEffect(()=>{
        console.log(name);
        console.log(normalVar);
        console.log(refVar);
        
    })

    // When the UI re-render the normal variable will reset to its default value
    // but the useRef variable hold its value

  return (
    <div>
        <h1>{name}</h1>
        <button onClick={()=>{
            setName('Thor')
            normalVar = 0
            refVar.current = 20
        }} >Change Name</button>
    </div>
  )
}

export default RefDemo