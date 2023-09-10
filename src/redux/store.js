import { configureStore } from '@reduxjs/toolkit';
import { catalogReducer } from './catalog/catalogSlice';
import { favoritesReducer } from './favorites/favoritesSlice';
import { filterReducer } from './filter/filterSlice';

export const store = configureStore({
  reducer: {
    catalog: catalogReducer,
    favorites: favoritesReducer,
    filter: filterReducer,
  },
});
