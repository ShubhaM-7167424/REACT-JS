import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from './components/Login'
import Register from './components/Register'
import NotFound from './components/NotFound'
import './App.css'

const App = () => {
  return (
    <div>
      <BrowserRouter>

        <Routes>

          <Route path='/' element={<Login />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='*' element={<NotFound />} />

        </Routes>

      </BrowserRouter>
    </div>
  )
}

export default App