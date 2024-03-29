import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { nencyapifatching } from "../redux/productsReduxe/action";
import style from "../style/product.css";

function Product() {
  const {data}  = useSelector((store) => store.Productreducer) || [];
  console.log(data);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(nencyapifatching);
  }, []);
  return (
    <>
    <div className="f-s"></div>
    <div className=" container  main-box">
    <div> 
    </div>
      <h2>RECOMENDED PRODUCTS</h2>
      <div class="star-line">
            <span class="square"></span>
          </div>
      <p className="pp">Lorem ipsum dolor sit amet, consectetuer gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auci elit consequat ipsutis sem niuis sed odio sit amet nibh</p>
      <div className="main-div">
      {data.map((e) => {
        return (
          <div key={e.id}>
            <Link className="product-link" to={`./${e.id}`}>
            <img src={e.image} alt="" />
            <div className="ti-pri">
              <h3>{e.title}</h3>
              <p className="price">${e.price}</p>
            </div>
            </Link>
          </div>
        );
      })}
      </div>
    </div>
    <div className="s-3">
               
    </div>
    </>
  );
}

export default Product;
