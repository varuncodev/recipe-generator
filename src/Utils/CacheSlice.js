import {createSlice} from "@reduxjs/toolkit"

const cacheSlice = createSlice({
    name : "Cache",
    initialState : [],
    reducers : {
        addRecipe : (state, action) => {
            state.push(action.payload)
        }
    }
})



export default cacheSlice.reducer
export const{addRecipe} = cacheSlice.actions