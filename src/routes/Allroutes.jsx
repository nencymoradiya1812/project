import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../components/Home'
import Signup from '../components/Signup'

function Allroutes() {
  return (
    <div>
         <Routes>
                <Route path='/Home' element={<Home/>}/>
                <Route path='/Signup' elment={<Signup/>}/>
         </Routes>
    </div>
  )
}

export default Allroutes
