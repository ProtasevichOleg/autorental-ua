import { createSlice } from '@reduxjs/toolkit';

export const favoritesSlice = createSlice({
  name: 'favorites',
  initialState: {
    items: [],
  },
  reducers: {
    addItem: (state, action) => {
      state.items.push(action.payload);
    },
  },
});

export const { addItem } = favoritesSlice.actions;

export const favoritesReducer = favoritesSlice.reducer;
