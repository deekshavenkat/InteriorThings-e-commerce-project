import React, { useEffect, useContext, useReducer } from 'react'
import reducer from '../reducers/cart_reducer'
import {
  ADD_TO_CART,
  REMOVE_CART_ITEM,
  TOGGLE_CART_ITEM_AMOUNT,
  CLEAR_CART,
  COUNT_CART_TOTALS,
} from '../actions'


const getLocalStorage =()=>{
  let cart = localStorage.getItem("cart")
  if(cart){
    // in storage we have stored as string so we have to parse it before sending in to the cart
    return JSON.parse(localStorage.getItem("cart"))
  }else{
    return []
  }
}
const initialState = {
  cart: getLocalStorage(),
  total_items:0,
  total_amount :0,
  shipping_fee: 1000,


}

const CartContext = React.createContext()

export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState)


  //add to cart 
  const addToCart =(id, color, amount, product)=>{
    
      dispatch({type:ADD_TO_CART, payload:{id, color, amount, product}})
  }

  //remove item 
  const removeItem =(id)=>{
   dispatch({type:REMOVE_CART_ITEM, payload: id})
  }

   //toggle amount 
   const toggleAmount =(id, value) =>{
    // console.log(id, value)
         dispatch({type:TOGGLE_CART_ITEM_AMOUNT, payload:{id, value}})
   }
   // clear cart 
   const clearCart =()=>{
      dispatch({type:CLEAR_CART})
   }

   useEffect(()=>{
    dispatch({type:COUNT_CART_TOTALS})
      localStorage.setItem("cart", JSON.stringify(state.cart))
      //localStorage will accept 2 parameters 1st is key that we have passed as cart 
      // second is value(this should always be string) so JSON.stringify(our value )
   },[state.cart])
   // we have initialised cart as empty string --- whenever user navigats to cart and back to products then to cart 
   // then cart will be reset becz we set inital cart value as empty array to avoid this we created function called getLocalStorage()

  return (
    <CartContext.Provider value={{...state, addToCart, removeItem, toggleAmount, clearCart}}>{children}</CartContext.Provider>
  )
}
// wrapped in index.js 
// make sure use
export const useCartContext = () => {
  return useContext(CartContext)
}



