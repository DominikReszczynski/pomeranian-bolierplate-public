import { configureStore, createSlice } from '@reduxjs/toolkit';

//redux inicialization

const testSlice = createSlice({
  name: 'store-test',
  initialState: {
    profile: 'retail',
  },
  reducers: {
    toggleProfile: (sliceState) => {
      if (sliceState.profile === 'retail') {
        sliceState.profile = 'buisness';
      } else {
        sliceState.profile = 'retail';
      }
    },
  },
});

export const { toggleProfile } = testSlice.actions;
export const store = configureStore({
  reducer: {
    testSlice: testSlice.reducer,
  },
});
