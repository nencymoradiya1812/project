// import { Action } from "@remix-run/router";
import { LOGIN, SIGNUP } from "./actiontype";

let intial = {
  users: null,
  isSignup: false,
};

export const reduser = (state = intial, action) => {
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        user: action.payload,
        isSignup: false,
      };
      case SIGNUP:
                return{
                                ...state,
                                isSignup:true
                }
      default :
      return{
            ...state
      }
  }
};
