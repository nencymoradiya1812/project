import React from 'react'
import { useState } from 'react'
import Signup from '../components/Signup'
import Login from '../components/Login'
import { useSelector } from 'react-redux'
import style from '../style/ls.css'

function LoginSignup() {
  const [toggle,setToggle]=useState(true)
  const val = useSelector(store =>store)
  console.log(val)
  return (
    <div className='lsmain'>
       <div className='form'>
        {toggle?<Signup/>:<Login/>}
       </div>
      
       <h3 onClick={()=>setToggle(!toggle)} >
       {toggle?<span>Already have a accont</span>:<span>Don't have Account </span>}
       </h3>
     
    </div>
  )
}

export default LoginSignup
