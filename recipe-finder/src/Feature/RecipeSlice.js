import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    Recipe : {text : "Arrabiata"}
}

export const RecipeSlice = createSlice({
    name : "Recipe",
    initialState,
    reducers: {
        addDish : (state , action) => {
            const rec = {
                text : action.payload
            }
            state.Recipe.text = rec.text
        }
    }
})

export const {addDish} = RecipeSlice.actions

export default RecipeSlice.reducer