import React, { useEffect } from "react";
import Head from "./Head";
import { useDispatch, useSelector } from "react-redux";
import { fetchdata, setProduct } from "./Slices/ProductSlice";
import Productone from "./Productone";
import { TailSpin } from "react-loader-spinner";

const Productdisplay = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchdata());
  }, []);
  const product = useSelector((state) => state.productSlice.product);
  let status = useSelector((state) => state.productSlice.status);
  
  if (status == "loading") {
    return (
      <div
        style={{
          display: "flex",
          height: "100vh",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <TailSpin
          height="100"
          width="100"
          color="#4fa94d"
          ariaLabel="tail-spin-loading"
          radius="3"
          wrapperStyle={{}}
          wrapperClass=""
          visible={true}
        />
      </div>
    );
  }
  return (
    <div>
      <Head />
      <div
        style={{
          margin: "100px 5px 5px 5px",
          display: "grid",
          gridTemplateColumns: "repeat(4,1fr)",
          gap: "10px",
        }}
      >
        {product.map((item, id) => {
          return <Productone key={item.id} product={item} />;
        })}
      </div>
    </div>
  );
};

export default Productdisplay;
