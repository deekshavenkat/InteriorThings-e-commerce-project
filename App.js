import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Navbar, Sidebar, Footer } from './components'
// to import like this the directory should always have index.ja which exports all the file 

import {Home, About, Error, Cart, Products, SingleProduct, Checkout, PrivateRoute, AuthWrapper} from "./pages"




function App() {
    return (
     <AuthWrapper>
      <Router>
      <Navbar />
      <Sidebar />
      <Routes>
      <Route path ="/" element ={<Home />} />
      <Route path ="/about" element ={<About />} />
      <Route path ="/products" element ={<Products />} />
      <Route path ="/products/:id" element ={<SingleProduct />} />
      <Route path ="/cart" element ={<Cart />}/>
      <Route path ="/checkout" element ={

        <PrivateRoute>
          <Checkout />
        </PrivateRoute>
      } />
      <Route path ="*" element ={<Error />} />
      
      </Routes>
      <Footer />
     </Router>
     </AuthWrapper>
    )
}

export default App
