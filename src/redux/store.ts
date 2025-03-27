//this is our redux store
"use client"
import { configureStore } from "@reduxjs/toolkit"
import { TypedUseSelectorHook, useSelector } from "react-redux"

// Import your reducers
import authReducer from "./features/auth-slice"; // Make sure this exists
// Add other reducers as needed

export const store = configureStore({
    reducer: {
        auth: authReducer,  // Add your reducers here
    },
})

//we export these type definitions
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

//this useAppSelector has type definitions added
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
