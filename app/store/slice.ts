import { IAddToCardPayload, IInitialState } from './types';
import { PayloadAction, createSlice } from '@reduxjs/toolkit';

import { cart } from '../data/cart.data';

const initialState: IInitialState = {
  items: cart,
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<IAddToCardPayload>) => {
      const id = state.items.length;
      state.items.push({ ...action.payload, id });
    },
    removeFromCart: (state, action: PayloadAction<{ id: number }>) => {
      state.items = state.items.filter((item) => item.product.id !== action.payload.id);
    },
  },
});
