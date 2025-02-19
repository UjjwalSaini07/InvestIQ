import { configureStore } from '@reduxjs/toolkit'
import authReducer from '../components/utlis/authSlice'

export const store = configureStore({
  reducer: {
    auth: authReducer,
  },
})