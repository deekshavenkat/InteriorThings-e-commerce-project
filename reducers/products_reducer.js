import {
  SIDEBAR_OPEN,
  SIDEBAR_CLOSE,
  GET_PRODUCTS_BEGIN,
  GET_PRODUCTS_SUCCESS,
  GET_PRODUCTS_ERROR,
  GET_SINGLE_PRODUCT_BEGIN,
  GET_SINGLE_PRODUCT_SUCCESS,
  GET_SINGLE_PRODUCT_ERROR,
} from '../actions'

const products_reducer = (state, action) => {
   if(action.type === SIDEBAR_OPEN){
       return {...state, isSidebarOpen:true}
   }
    if(action.type === SIDEBAR_CLOSE){
    return {...state, isSidebarOpen:false}
   }
   if(action.type=== GET_PRODUCTS_BEGIN){
    return {...state, products_loading:true}
   }
   if(action.type === GET_PRODUCTS_SUCCESS){
      const featured_products  = action.payload.filter((product)=>product.featured === true)
      return {...state, products_loading :false, products:action.payload, featured_products :featured_products}
   }
   if(action.type === GET_PRODUCTS_ERROR){
    return {...state, products_loading :false, products_error:true}
   }

   if(action.type === GET_SINGLE_PRODUCT_BEGIN){
    return{...state, single_product_error: false, single_product_loading:true}
   }
   if(action.type === GET_SINGLE_PRODUCT_SUCCESS){
    return{...state, single_product :action.payload, single_product_loading:false}
   }
  
   if(action.type === GET_SINGLE_PRODUCT_ERROR){
    return{...state, single_product_error: true, single_product_loading:false}
   }
  // in single product make sure you set error to false becz in the application any error while 
  //rendering previous products got error that would dispaly here if we dont set error to false 
  throw new Error(`No Matching "${action.type}" - action type`)
}

export default products_reducer



// if(action.type ="SIDEBAR_OPEN"){
//   return {...state, isSidebarOpen:false}
// }
// Action string should match dispatch string 