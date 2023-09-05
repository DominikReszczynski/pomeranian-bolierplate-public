import { configureStore } from '@reduxjs/toolkit';
import { counterSlice } from './counterSlice';
import { testSlice } from './testSlice';

export const store = configureStore({
  reducer: {
    testSlice: testSlice.reducer,
    counterSlice: counterSlice.reducer,
  },
});
