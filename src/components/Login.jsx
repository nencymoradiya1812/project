import axios from "axios";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { userLogin } from "../redux/action";

function Login() {
const [email,setEmail]=useState("")
const [password,setPassword]=useState("")
const val = useSelector(store=>store)
const dispatch=useDispatch()
const handleSubmit=(e)=>{
   e.preventDefault()
   axios.get(`http://localhost:4000/users?email=${email}`)
   .then((res)=>{
    console.log(res.data)
      dispatch(userLogin(res.data[0]))
      alert("login successful")
   })
   
}
  return (
    <>
      <form onSubmit={handleSubmit} className="login">
        <label>Email : </label>
        <input type="email" placeholder="enter your email" onChange={(e)=>setEmail(e.target.value)}  required/>
        <label>Password :   </label>
        <input type="Password" placeholder="enter your password" onChange={(e)=>setPassword(e.target.value)} required/>
        <input type="submit" value="Login" />
      </form>
    </>
  );
}

export default Login;
