import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from '../Pages/Home'
import Cart from '../Pages/Cart'
 import Product from '../Pages/Product'
import Shop from '../Pages/Shop'


const Routing = () =>{
   return(
    <div>   
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/product/:id" element={<Product />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/cart" element={<Cart />} />
        </Routes>
    </div>
   )
}
export default Routing