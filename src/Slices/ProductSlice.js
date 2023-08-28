import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchdata = createAsyncThunk("product/fetch", async () => {
  const response = await fetch("https://fakestoreapi.com/products");
  const jsondata = await response.json();
  return jsondata;
});
const productSlice = createSlice({
  name: "Product",
  initialState: {
    selected: [],
    product: [],
    status: "idle",
    error: null,
  },
  reducers: {
    setSelected: (state, action) => {
      const filterd = state.product.filter((items) => {
        return action.payload.some((item) => item.id === items.id);
      });
      state.selected = filterd;
    },
    setdelete: (state, action) => {
    state.selected= state.selected.filter(item=>item.id !== action.payload);
    },
  },

  extraReducers: function (builder) {
    builder
      .addCase(fetchdata.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(fetchdata.fulfilled, (state, action) => {
        state.status = "Success";
        state.product = action.payload;
      })
      .addCase(fetchdata.rejected, (state, action) => {
        state.status = "Failed";
        state.error = action.error.message;
      });
  },
});
export default productSlice.reducer;
export const { setSelected, setdelete } = productSlice.actions;
