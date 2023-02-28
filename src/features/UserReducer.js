import { createSlice } from "@reduxjs/toolkit";
import { initialState } from "../app/initialState";

import { useNavigate } from "react-router-dom";
export const UserSlice = createSlice({
  name: "users",
  initialState: {
    user:null
  },

  reducers: {
    login: (state, actions) => {
      state.user = actions.payload

    },
    logout: (state) => {
      state.user = null
    },
  },
});
export const { login ,logout} = UserSlice.actions;

export default UserSlice.reducer;
