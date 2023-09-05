import { createSlice } from '@reduxjs/toolkit';
const initialValue = 0;
export const saveToLocalStorage = (value) => {
  localStorage.setItem('storedValue', JSON.stringify(value));
};
export const getFromLocalStorage = () => {
  const storedValue = localStorage.getItem('storedValue');
  if (!storedValue) return initialValue;
  else return JSON.parse(storedValue);
};
export const counterSlice = createSlice({
  name: 'store-counter',
  initialState: {
    value: getFromLocalStorage(),
    errorMessage: '',
  },
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    incrementBy: (state, action) => {
      console.log(action);
      state.value += action.payload;
      state.errorMessage = '';
      saveToLocalStorage(state.value);
    },
    decrementBy: (state, action) => {
      console.log(action);
      if (state.value - action.payload < 0) {
        state.errorMessage = 'error < 0';
      } else {
        state.value -= action.payload;
        saveToLocalStorage(state.value);
      }
    },
  },
});
export const { increment, incrementBy, decrementBy } = counterSlice.actions;
// export const selectProfile = (state) => {
//   // return state.testSlice.user
// };
