// countrySlice.js
import { createSlice } from '@reduxjs/toolkit';

const countrySlice = createSlice({
  name: 'country',
  initialState: {
    countryData: [
      { id: 1, city: 'Dubai', country: 'Dubai Emirates, United Arab Emirates' },
      { id: 2, city: 'Doha', country: 'Qatar' },
      { id: 3, city: 'Darling Harbour', country: 'Sydney, New South Wales, Australia' },
      { id: 4, city: 'Dhaka', country: 'Bangladesh' },
      { id: 5, city: 'Dubai International Airport', country: 'Dubai, Dubai Emirate, United Arab Emirates' },
      ],
  },
  reducers: {},
});

export default countrySlice.reducer;
export const selectCountryData = (state) => state.country.countryData;
