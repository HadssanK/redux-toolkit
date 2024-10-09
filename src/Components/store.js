import { configureStore } from "@reduxjs/toolkit";
import CounterReducer from "./todoslice"
export const Store = configureStore({
    reducer : {
        counter : CounterReducer
    }
})