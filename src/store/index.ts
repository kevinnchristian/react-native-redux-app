import { combineReducers } from 'redux';
import { configureStore } from '@reduxjs/toolkit';

import cartData from './modules/cart/reducer';

// Opção para fazer um combine de vários reducers
const rootReducers = combineReducers({
  cart: cartData,
});

// Configurando o store com reducers importados
const store = configureStore({
  reducer: rootReducers
});

export default store;