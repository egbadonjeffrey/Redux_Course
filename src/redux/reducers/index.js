import { combineReducers } from "redux";
import { productReducer, selectedProductReducer } from "./product-reducer";

const reducers = combineReducers({
  productReducer: productReducer,
  selectedProductReducer: selectedProductReducer,
});

export default reducers;
