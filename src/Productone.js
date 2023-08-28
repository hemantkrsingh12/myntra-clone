import React from "react";
import "./Productone.css";
import { useDispatch, useSelector } from "react-redux";
import { cartdec, cartinc } from "./Slices/Cart";
const Productone = (props) => {
  const dispatch = useDispatch();
  const value = useSelector((state) => state.cartreducer.cart);
  const curitem = value.find((item, id) => item.id == props.product.id);
  const curelement = curitem ? curitem.quantity : 0;

  return (
    <div className="containerCart">
      <img
        className="cardimg"
        src={props.product.image}
        alt={props.product.title}
      />
      <h3 className="cardtitle">
        {props.product.title.length > 40
          ? props.product.title.substr(0, 40) + "...."
          : props.product.title}
      </h3>
      <h3 className="cardprice">{props.product.price} </h3>
      <div className="cartbtn">
        <button
          onClick={() => {
            dispatch(cartdec(props.product.id));
          }}
        >
          -
        </button>
        <h4>{curelement}</h4>
        <button
          onClick={() => {
            dispatch(cartinc(props.product.id));
          }}
        >
          +
        </button>
      </div>
    </div>
  );
};

export default Productone;
