import { createSlice } from '@reduxjs/toolkit';

export const filterSlice = createSlice({
  name: 'filter',
  initialState: {
    items: [],
  },
  reducers: {
    addItem: (state, action) => {
      state.items.push(action.payload);
    },
  },
});

export const { addItem } = filterSlice.actions;

export const filterReducer = filterSlice.reducer;
