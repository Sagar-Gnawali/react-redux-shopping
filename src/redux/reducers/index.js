import { productReducer, selectedProductReducer } from "./productReducer";
import { combineReducers } from 'redux';
export const rootReduer = combineReducers({
    allProducts: productReducer,
    singleProduct: selectedProductReducer
});
