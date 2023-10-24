import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import style from '../style/singalepage.css'

const Singlep = () => {
  const [data, setData] = useState("");
  const { id } = useParams();
  console.log(id);
  useEffect(() => {
    
     axios.get(`https://productfleur.onrender.com/product/${id}`)
      .then((res) => {
        setData(res.data);
        console.log(res.data)
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  const handleSubmit = () => {
    let obj = {
      ...data,
      count: 1,
    };
    console.log(obj);
    axios.post("https://productfleur.onrender.com/cart",obj)
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div className="container single d-flex" >
     <img src={data.image} alt={data.title} width={"20%"} className="img"/>
     <div className="content">
     <h3>{data.title}</h3>
       <p>${data.price}</p>
       <p>{data.description}</p>
       <button onClick={handleSubmit}>Add to cart</button>
       <p>SKU:{data.SKU}</p>
       <p>Category:{data.Category}</p>
       <p>Tag:{data.tag}</p>
     </div>
    </div>
  );
};

export default Singlep;
