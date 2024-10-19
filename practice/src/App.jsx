import React from 'react'
import Country from './Country'
import './App.css'
import Products from './Products'
import User from './User'
import India from './Country/India'
import Australia from './Country/australia'
import Singapore from './Country/singapore'
import Watch from './Products/Watch'
import Banana from './Products/Banana'
import Apple from './Products/Apple'
import Shubham from './User/Shubham'
import Vijay from './User/Vijay'
import Saurabh from './User/Saurabh'
import Home from './Home'
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom'

const App = () => {
  return (
      <div>
          <BrowserRouter>
              <div className="homebutton">
                  <Link to={'/'} >Home</Link>
              </div>
              <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/country" element={<Country />}>
                      <Route path="india" element={<India />} />
                      <Route path="australia" element={<Australia />} />
                      <Route path="singapore" element={<Singapore />} />
                  </Route>
                  <Route path="/products" element={<Products />}>
                      <Route path="watch" element={<Watch />} />
                      <Route path="banana" element={<Banana />} />
                      <Route path="apple" element={<Apple />} />
                  </Route>
                  <Route path="/user" element={<User />}>
                      <Route path="shubham" element={<Shubham />} />
                      <Route path="vijay" element={<Vijay />} />
                      <Route path="saurabh" element={<Saurabh />} />
                  </Route>
              </Routes>
          </BrowserRouter>
      </div>
  );
}

export default App