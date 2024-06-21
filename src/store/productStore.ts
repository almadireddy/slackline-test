import { configureStore } from '@reduxjs/toolkit';
import productsReducer from '../reducers/productsSlice';

const productStore = configureStore({
  reducer: {
    data: productsReducer,
  },
});

export type ProductState = ReturnType<typeof productStore.getState>;
export type ProductDispatch = typeof productStore.dispatch;

export default productStore;