import {createStore , applyMiddleware,combineReducers} from 'redux';
import {addToCart} from '../reducers/userReducer.js';
import {addreshReducer} from '../reducers/addreshReducer.js';
const logger=(store)=>(next)=>(action)=>{
//  console.log("store",store);
  //console.log("action",action);
  next(action)
}
export const store =createStore(combineReducers({addToCart,addreshReducer}));
