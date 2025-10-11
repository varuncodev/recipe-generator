import {configureStore} from "@reduxjs/toolkit"
import recipeSLiceREducer from "./RecipeSlice"
import cacheSliceReducer from "./CacheSlice"


const store = configureStore({
    reducer : {
        recipe : recipeSLiceREducer,
        cache : cacheSliceReducer
    }
})


export default store