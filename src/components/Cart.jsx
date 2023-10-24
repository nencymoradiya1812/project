import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";

function Cart() {
  let [data, setData] = useState([]);
  useEffect(() => {
    axios.get("https://productfleur.onrender.com/cart")
      .then((res) => {
        console.log(res.data);
        setData(res.data)
      })
      .catch((err) => {
        console.log(err);
      });
  });
  return (
    <div>
      {data.map((e) => {
        
     return(<div>
            <img src={e.image} alt="" />
            <h2>{e.title}</h2>
          </div>
     )
      })}
    </div>
  );
}

export default Cart;
