import axios from "axios";
import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { userSignup } from "../redux/action";
function Signup() {
  const [name,setName]=useState("")
  const[email,setEmail]=useState("")
  const [password,setPassword]=useState("")
  const val= useSelector(store=>store)
  const dispatch = useDispatch()
  
  const handleSubmit=(e)=>{
      e.preventDefault()
       let obj={
        name:name,
        email:email,
        password:password
       }
    axios.post(`https://productfleur.onrender.com/users`,obj) 
    .then((res)=>{
        console.log(res.data)
        dispatch(userSignup())
        alert("Users Register sucessfully")
    })
    .catch((err)=>{
        console.log(err)
    })
  }
  return (
    <>
          <form onSubmit={handleSubmit} className="signup">
             <label>Name: </label>
             <input type="text" placeholder="enter your name" onChange={(e)=>setName(e.target.value)} required />
             <label>Email:  </label>
             <input type="email" placeholder="enter your email" onChange={(e)=>setEmail(e.target.value)} required />
             <label>Password: </label>
             <input type="password" onChange={(e)=>setPassword(e.target.value)} placeholder="enter your password" required />
             <input type="submit" value="signup"/>
          </form>
    </>
  );
}

export default Signup;