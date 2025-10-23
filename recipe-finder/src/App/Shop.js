import { configureStore } from "@reduxjs/toolkit";
import RecipeReducer from "../Feature/RecipeSlice"

export const store = configureStore({
    reducer : RecipeReducer
})
