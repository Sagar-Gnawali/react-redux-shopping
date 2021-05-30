import { ActionTypes } from "../contants/actionTypes";
export const setProducts_ac = (products) => {
    return {
        type: ActionTypes.SET_PRODUCTS,
        payload: products
    }
}
export const selectedProduct_ac = (product) => {
    return {
        type: ActionTypes.SELECTED_PRODUCT,
        payload: product
    }
}
export const removeSelectedProduct = ()=>{
    return{
        type:ActionTypes.REMOVE_SELECTED_PRODUCT
         
    }
}