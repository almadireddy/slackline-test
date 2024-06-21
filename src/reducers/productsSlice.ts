import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import { Product, products } from '../data/products';

interface ProductsState {
  data: Product[];
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: string | null;
}

const initialState: ProductsState = {
  data: [],
  status: 'idle',
  error: null,
};

export const fetchProducts = createAsyncThunk(
  'data/fetchData',
  async (): Promise<Product[]> => {
    return new Promise((resolve, reject) => {
      // simulate API Call 
      setTimeout(() => {
        if (Math.random() < 0.1) {
          reject("Failed!")
          return;
        }
        resolve(products);
      }, 350);
    });
  }
);

const productsReducer = createSlice({
  name: 'data',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchProducts.fulfilled, (state, action: PayloadAction<Product[]>) => {
        state.status = 'succeeded';
        state.data = action.payload;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message || 'Failed to fetch data';
      });
  },
});

export default productsReducer.reducer;
