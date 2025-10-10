import { configureStore } from "@reduxjs/toolkit"; 

import wetherReducer from '../Features/WetherSlice'

export const Store = configureStore({
    reducer : wetherReducer
})