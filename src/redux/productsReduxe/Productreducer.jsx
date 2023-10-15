import { ERROR, LODING, SUCCESS } from "./actiontype";

let intial = {
  isLoding: false,
  isError: false,
  data: [],
};

export const Productreducer = (state = intial, { type, payload }) => {
  switch (type) {
    case LODING:
      return {
        ...state,
        isLoding: true,
      };
    case SUCCESS:
      return {
        ...state,
        isLoding: false,
        data: payload,
      };

    case ERROR:
      return {
        ...state,
        isError: true,
      };
    default:
      return state;
  }
};
