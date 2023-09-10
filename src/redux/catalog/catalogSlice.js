import { createSlice } from '@reduxjs/toolkit';

export const catalogSlice = createSlice({
  name: 'catalog',
  initialState: {
    items: [],
  },
  reducers: {
    addItem: (state, action) => {
      state.items.push(action.payload);
    },
  },
});

export const { addItem } = catalogSlice.actions;

export const catalogReducer = catalogSlice.reducer;
