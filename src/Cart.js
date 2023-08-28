import React, { useEffect } from "react";
import { AiOutlineClose, AiOutlineDoubleRight } from "react-icons/ai";
import "./Cart.css";
import { useDispatch, useSelector } from "react-redux";
import { fetchdata, setSelected, setdelete } from "./Slices/ProductSlice";
import { Link } from "react-router-dom";

const Cart = () => {
  const dispatch = useDispatch();
  const dispatchs = useDispatch();
  const filteredProducts = useSelector((state) => state.productSlice.selected);
  const data = useSelector((state) => state.cartreducer.cart);
  useEffect(() => {
    dispatch(fetchdata());
    dispatch(setSelected(data));
  }, []);

  let element = 0;
  data.forEach((item) => {
    return (element += item.quantity);
  });
  let sum = 0;
  filteredProducts.forEach((item) => {
    return (sum += item.price);
  });

  return (
    <div className="container1">
      <div>
        <h1>Shopping Card</h1>
        <div className="subhead">
          <p className="nav">
            <Link to="/">Home</Link>
            <AiOutlineDoubleRight />
            Shopping Cart
          </p>

          <p>{element} item in the bag</p>
        </div>
        <hr />
        {filteredProducts.map((item, id) => {
          const matchingData = data.find((d) => d.id === item.id);
          console.log(matchingData);
          return (
            <div key={id}>
              <div className="dataselected">
                <img src={item.image} alt="" className="cartimg" />

                <div>
                  <h3>
                    {item.description.length > 40
                      ? item.description.substr(0, 40) + "..."
                      : item.description}
                  </h3>
                  <p>{item.title}</p>
                  <h1>${item.price}</h1>
                </div>
                <h3 className="quantity">{matchingData.quantity}</h3>
                <AiOutlineClose
                  style={{ cursor: "pointer" }}
                  onClick={() => dispatchs(setdelete(item.id))}
                />
              </div>
              <hr />
            </div>
          );
        })}

        <div className="footer">
          <div>
            <p>Have a promo code ?</p>
            <input type="text" className="promo" />
            <div className="arrow">
              <AiOutlineDoubleRight />
            </div>
          </div>
          <div>
            <p style={{ margin: "10px" }}>Subtotal &nbsp; &nbsp; ${sum}</p>
            <p style={{ margin: "10px" }}>
              Tax &nbsp; &nbsp; &nbsp;&nbsp;&nbsp; &nbsp;$6.7
            </p>
            <h3 style={{ margin: "10px" }}>Total &nbsp; &nbsp; ${sum + 6.7}</h3>
            <div className="checkout" style={{ margin: "10px" }}>
              Checkout
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
