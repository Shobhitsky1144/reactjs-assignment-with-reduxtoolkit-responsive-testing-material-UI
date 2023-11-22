// store.js
import { configureStore } from '@reduxjs/toolkit';
import countryReducer from './countrySlice';
import cardSlice from './cardSlice';

const store = configureStore({
  reducer: {
    country: countryReducer,
    card:cardSlice
  },
});

export default store;
