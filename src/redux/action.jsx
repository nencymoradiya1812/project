import { LOGIN, SIGNUP } from "./actiontype"


export const userLogin=(data)=>{
        return{type:LOGIN,playload:data}  
}

export const userSignup=()=>{
     return{type:SIGNUP}
}