import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Blog from '../components/Blog'
import Elements from '../components/Elements'
import Home from '../components/Home'
import Pages from '../components/Pages'
import Portfolio from '../components/Portfolio'
import Product from '../components/Product'
import LoginSignup from '../pages/LoginSignup'
// import Signup from '../components/Singlep'
import Singlep from '../components/Singlep'
import Cart from '../components/Cart'

function Allroutes(e) {
  return (
    <div>
         <Routes>
                <Route path='/Home' element={<Home/>}/>
                <Route path='/Pages' element={<Pages/>}/>
                <Route path='/Portfolio' element={<Portfolio/>}/>
                <Route path='/Blog' element={<Blog/>}/>
                <Route path='/Element' element={<Elements/>}/>
                <Route path='/Signup' element={<LoginSignup/>}/>
                <Route path='/Product' element={<Product/>}/>
                <Route path='/Cart' element={<Cart/>}/>
                <Route path='/Product/:id' element={<Singlep/>}/>
         </Routes>
    </div>
  )
}

export default Allroutes
