import React from 'react'
import '../style/nav.css'
import { Link } from 'react-router-dom'
import { FaUser } from "react-icons/fa";
function Nav() {
  return (
    <>
        <div>
        <div className='nav'>
        <h4> <span>N</span>ency</h4>
        <Link  to={"/Home"} className="link">HOME</Link>
        <Link  to={"/Pages"} className="link">PAGES</Link>
        <Link  to={"/Portfolio"} className="link">PORTFOLIO</Link>
        <Link  to={"/Blog"} className="link">BLOG</Link>
        <Link to={"/Product"} className="link">PRODUCT</Link>
        <Link to={"/Element"} className="link">ELEMENT</Link>
        <Link to={"/Signup"} className="link"><  FaUser/ ></Link>
        </div>
        </div>
    </>
  )
}

export default Nav
