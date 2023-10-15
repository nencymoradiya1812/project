import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Blog from '../components/Blog'
import Elements from '../components/Elements'
import Home from '../components/Home'
import Pages from '../components/Pages'
import Portfolio from '../components/Portfolio'
import Product from '../components/Product'
import Signup from '../components/Signup'
import LoginSignup from '../pages/LoginSignup'

function Allroutes() {
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
               
         </Routes>
    </div>
  )
}

export default Allroutes
