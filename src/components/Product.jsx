import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { nencyapifatching } from "../redux/productsReduxe/action";
import style from "../style/product.css";

function Product() {
  const { data } = useSelector((store) => store.Productreducer) || [];
  console.log(data.Product);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(nencyapifatching);
  }, []);
  return (
    <div className=" container  main-box">
    <div className="f-s">
      
    </div>
      <h2>RECOMENDED PRODUCTS</h2>
      <p>Lorem ipsum dolor sit amet, consectetuer gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auci elit consequat ipsutis sem niuis sed odio sit amet nibh</p>
      <div className="main-div">
      {data.map((e) => {
        return (
          <div key={e.id}>
            <Link className="product-link" to={`./${e.id}`}>
            <img src={e.image} alt="" />
            <div className="ti-pri">
              <h3>{e.title}</h3>
              <p>${e.price}</p>
            </div>
            </Link>
          </div>
        );
      })}
      </div>
     
    </div>
  );
}

export default Product;
