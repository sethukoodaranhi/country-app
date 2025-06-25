import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  countries:[]
}

export const countrySlice = createSlice({
  name: 'country',
  initialState,
  reducers: {
    setcountryList: (state, action) => {
      state.countries= action.payload
    },
  },
})

export const { setcountryList} = countrySlice.actions

export default countrySlice.reducer