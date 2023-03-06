import { createSlice } from "@reduxjs/toolkit";

export const UserSlice = createSlice({
  name: "users",
  initialState: {
    user:null,
    tableActive:{id:null, active:null}
  },

  reducers: {
    login: (state, actions) => {
      state.user = actions.payload

    },
    logout: (state) => {
      state.user = null
    },
    tabActive:(state, actions)=> {
      state.tableActive.id = actions.payload.id
      state.tableActive.active = actions.payload.active
      console.log(state.tableActive,actions)
    }
  },
});
export const { login ,logout, tabActive} = UserSlice.actions;

export default UserSlice.reducer;
