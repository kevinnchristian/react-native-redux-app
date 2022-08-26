import {
  configureStore,
} from '@reduxjs/toolkit';

import cartData from './modules/cart/reducer';

export default configureStore({
  reducer: {
    cart: cartData
  }
});