import axios from "axios";
import { ERROR, LODING, SUCCESS } from "./actiontype";

export const nencyapifatching = (dispatch) => {
  dispatch({ type: LODING });
  axios
    .get(`https://productfleur.onrender.com/product`)
    .then((res) => {
      console.log(res.data);
      dispatch({
        type: SUCCESS,
        payload: res.data,
      });
    })
    .catch((err) => {
      console.log(err);
      dispatch({ type: ERROR });
    });
};
