import React from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import "./Head.css";
import { useDispatch, useSelector } from "react-redux";
import { cardreset } from "./Slices/Cart";
import { Link } from "react-router-dom";

const Head = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.cartreducer.cart);
  console.log(data," cart selected")
  let element = 0;
  data.forEach((item) => (element += item.quantity));
  console.log(data);
  return (
    <div>
      <div className="container">
        <h1>Myntra</h1>
        <div className="sidebar">
          <button onClick={() => dispatch(cardreset(data))}>Reset</button>
          
          <Link to="/cart"> <AiOutlineShoppingCart /></Link>
         

          <p>{element}</p>
        </div>
      </div>
    </div>
  );
};

export default Head;
