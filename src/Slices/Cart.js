import { createSlice } from "@reduxjs/toolkit";
const cart = createSlice({
  name: "cart",
  initialState: {
    cart: [],
  },
  reducers: {
    cartinc: (state, action) => {
      const carditem = state.cart.find((item, id) => {
        return item.id == action.payload;
      });
      if (carditem) {
        carditem.quantity += 1;
        return;
      }
      state.cart.push({
        quantity: 1,
        id: action.payload,
        
      });
    },
    cartdec: (state, action) => {
      const carditem = state.cart.find((item, id) => {
        return item.id == action.payload;
      });
      if (carditem) {
        carditem.quantity -= 1;
        if (carditem.quantity == -1) {
          state.cart = state.cart.filter((item) => item.id !== action.payload);
        }
      }
    },
    cardreset: (state, action) => {
      state.cart = action.payload;
      state.cart.splice(0, state.cart.length);
    },
    setDeleteselect:(state,action)=>{
     
    },
  },
});
export default cart.reducer;
export const { cartinc, cartdec, cardreset} = cart.actions;
