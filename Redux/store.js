// src/store.js
import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './Reducer/rootReducer';

const store = configureStore({
  reducer: rootReducer,
});

export default store;
