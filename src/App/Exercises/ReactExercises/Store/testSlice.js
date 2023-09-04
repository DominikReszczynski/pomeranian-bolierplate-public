import { createSlice } from '@reduxjs/toolkit';

export const testSlice = createSlice({
  name: 'store-test',
  initialState: {
    profile: 'business',
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
export const { toggleProfile } = testSlice.actions;
