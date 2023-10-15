import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import { Productreducer } from "./productsReduxe/Productreducer";
import thunk from "redux-thunk";
import { reduser } from "./reduser";

const mainreduser=combineReducers({
                reduser,
                Productreducer
})
 const store = legacy_createStore(mainreduser,applyMiddleware(thunk))

 export default store