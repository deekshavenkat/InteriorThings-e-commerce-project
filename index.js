import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import { ProductsProvider } from './context/products_context'
import { FilterProvider } from './context/filter_context'
import { CartProvider } from './context/cart_context'
import { UserProvider } from './context/user_context'
import { Auth0Provider } from '@auth0/auth0-react'
 
// dev-y281atpb.us.auth0.com
//YszHJSHnn3PXpC1rUPdkmuaYYl1Tk8Aw -- client id 
ReactDOM.render(
<Auth0Provider domain="dev-y281atpb.us.auth0.com"
  clientId="YszHJSHnn3PXpC1rUPdkmuaYYl1Tk8Aw"
  redirectUri={window.location.origin}
  cacheLocation="localstorage">
 <UserProvider>
 <ProductsProvider>
  <FilterProvider>
   <CartProvider>
     <App />
   </CartProvider>
  </FilterProvider>
 </ProductsProvider>
 </UserProvider>
</Auth0Provider>,
 document.getElementById('root'))


 // providing allProducts data from productsProvider to filterProvider
 // cacheLocation="Localstorage" -- 