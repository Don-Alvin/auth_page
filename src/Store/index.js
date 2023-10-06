import { configureStore } from "@reduxjs/toolkit";
import authReducer from '../Features/Auth/authSlice'

const store = configureStore({
    reducer: {
        user: authReducer,
    }
})

export default store