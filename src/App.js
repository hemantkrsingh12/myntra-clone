import { Routes, Route } from "react-router-dom";
import "./App.css";
import Productdisplay from "./Productdisplay";
import Cart from "../src/Cart";
import React from "react";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/cart" element={<Cart/>}/>
        <Route path="/" element={<Productdisplay/>}/>
       
      </Routes>
      
    </div>
  );
}

export default App;
