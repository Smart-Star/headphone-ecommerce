import { configureStore } from '@reduxjs/toolkit';
import popupReducer from './components/features/PopupSlice';

export const store = configureStore({
  reducer: {
    popup: popupReducer,
  },
});
