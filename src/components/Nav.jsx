import React from "react";
import "../style/nav.css";
import { Link } from "react-router-dom";
import { FaUser } from "react-icons/fa";
import { BsFillCartCheckFill } from "react-icons/bs";
import Home from "./Home";
function Nav() {
  return (
    <>
      <div>
        <div className="nav">
          <Link to={"/"} className="link">
            <img src="https://fleur.qodeinteractive.com/wp-content/uploads/2017/01/logo-light.png" alt=""  className="logo"/>
          </Link>
          <Link to={"/Product"} className="link">
            PRODUCT
          </Link>
          <Link to={"#"} className="link">
            PAGES
          </Link>
          <Link to={"#"} className="link">
            PORTFOLIO
          </Link>
          <Link to={"#"} className="link">
            BLOG
          </Link>
       
          <Link to={"#"} className="link">
            ELEMENT
          </Link>
          <Link to={"/Signup"} className="link" id="signup">
            <FaUser />
          </Link>
          <Link to={"/Cart"} className="link" id="cart">
            <BsFillCartCheckFill />
          </Link>
          {/* <Home/> */}
        </div>
      </div>
    </>
  );
}
export default Nav;


