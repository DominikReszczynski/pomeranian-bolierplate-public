import { createSlice } from '@reduxjs/toolkit';

export const counterSlice = createSlice({
  name: 'store-counter',
  initialState: {
    value: 0,
  },
  reducers: {
    toggleProfile: (sliceState) => {
      if (sliceState.profile === 'retail') {
        sliceState.profile = 'business';
      } else {
        sliceState.profile = 'retail';
      }
    },
  },
});
// export const { toggleProfile } = testSlice.actions;
// export const selectProfile = (state) => {
//   // return state.testSlice.user
// };
