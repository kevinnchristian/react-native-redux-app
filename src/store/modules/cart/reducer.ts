import {
  createSlice,
  PayloadAction,
} from '@reduxjs/toolkit';

import {
  IProduct,
  ICart,
  ICartState
} from '../../../types';

const initialState = {
  cart: []
}

const CartData = createSlice({
  name: 'cartData',
  initialState,
  reducers: {
    addNewItem: (state: ICart, action) => {
      state.cart = [...state.cart, action.payload];
    },
    removeCartItem: (state: ICart, action) => {
      const { payload } = action;
      state.cart.splice(payload, 1);
    }
  }
});

export const { addNewItem, removeCartItem } = CartData.actions;

export const cartStateData = (state: ICartState) => state.cart.cart;

export default CartData.reducer;