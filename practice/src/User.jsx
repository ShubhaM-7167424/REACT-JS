import React from 'react'
import { useState } from 'react'

const User = () => {

      function doSomething(planet) {
        console.log('hello ' +planet);
        
      }

  return (
    <div className='user'>
        
        {/* this doSomething function is already getting called, which is not good */}
      <button onClick={doSomething('Pluto')}>Do Something</button>

        {/* 1st way to solve this */}
      <button onClick={doSomething.bind(this, 'Pluto')}>Do Something</button>

        {/* 2nd Way to solve this */}
      <button onClick={() => {doSomething('Pluto')}}>Do Something</button>

    </div>
  )
}

export default User