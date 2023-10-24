import React from "react";
import "../style/nav.css";
import { Link } from "react-router-dom";
import { FaUser } from "react-icons/fa";
import { BsFillCartCheckFill } from "react-icons/bs";
function Nav() {
  return (
    <>
      <div>
        <div className="nav">
          <Link to={"/Home"} className="link">
            <img src="https://fleur.qodeinteractive.com/wp-content/uploads/2017/01/logo-light.png" alt="" />
          </Link>
          <Link to={"/Pages"} className="link">
            PAGES
          </Link>
          <Link to={"/Portfolio"} className="link">
            PORTFOLIO
          </Link>
          <Link to={"/Blog"} className="link">
            BLOG
          </Link>
          <Link to={"/Product"} className="link">
            PRODUCT
          </Link>
          <Link to={"/Element"} className="link">
            ELEMENT
          </Link>
          <Link to={"/Signup"} className="link">
            <FaUser />
          </Link>
          <Link to={"/Cart"} className="link">
            <BsFillCartCheckFill />
          </Link>
        </div>
      </div>
    </>
  );
}

export default Nav;
