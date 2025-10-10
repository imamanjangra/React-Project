import { createSlice , nanoid } from "@reduxjs/toolkit";

const initialState = {
    wether : {text : "Delhi"}
}

export const WetherSlice = createSlice({
    name : "wether",
    initialState,
    reducers : {
        addcity : (state , action) => {
            const wet_r = {
                text : action.payload
            }
            state.wether.text =wet_r.text
        }
    }
})

export const {addcity} = WetherSlice.actions

export default WetherSlice.reducer