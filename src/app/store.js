import { configureStore } from "@reduxjs/toolkit";
import UserSlice from "../features/UserReducer";


 const Store = configureStore({
    reducer:{
        user: UserSlice
    }
})

export default Store