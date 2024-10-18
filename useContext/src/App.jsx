import React, { useState , useContext } from 'react'
import Product from './Product'
import './App.css'
import { createContext } from 'react'

export const UserContext = createContext()

const App = () => {
  let [username, setUsername] = useState('shubham')
  let [token, setToken] =useState('wii350183')

  return (
      <>
          <UserContext.Provider value={{username, token, setUsername}}>
              <h1>App Component {username}</h1>
              <Product />
          </UserContext.Provider>
      </>
  );
}

export default App