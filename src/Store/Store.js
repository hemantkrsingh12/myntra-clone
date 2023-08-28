import { configureStore } from "@reduxjs/toolkit";
import ProductSlice from "../Slices/ProductSlice";
import Cart from "../Slices/Cart";

export default configureStore({
  reducer: {
    productSlice: ProductSlice,
    cartreducer: Cart,
  },
});
