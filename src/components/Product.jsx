import React from 'react'
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import {nencyapifatching} from '../redux/productsReduxe/action'

function Product() {
  const {data}=useSelector((store)=>store.Productreducer) ||[];
  console.log(data.Product);
  const dispatch=useDispatch();
  useEffect(()=>{
    dispatch(nencyapifatching)
  },[])
  return (
    <div>
      {data.map((e)=>{
           <div className="main-div" key={e.id}>
             <h1>{e.title}</h1>
             <img src={e.img} alt="" />
           </div>
      })}
    </div>
  )
}

export default Product
