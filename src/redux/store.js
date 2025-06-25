import { configureStore } from '@reduxjs/toolkit'
import countryReducer from './reducers/country.reducer'
export const store = configureStore({
  reducer: {
    country:countryReducer
  },
})