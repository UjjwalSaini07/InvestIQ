import { configureStore } from '@reduxjs/toolkit'
import authReducer from '../components/utils/authSlice'

export const store = configureStore({
  reducer: {
    auth: authReducer,
  },
})