import React from 'react'
import { Link } from 'react-router-dom'
function Nav() {
  return (
    <div>
        <Link to={"/Home"}>Home</Link>
        <Link to={"/Signup"}>Signup</Link>
    </div>
  )
}

export default Nav
