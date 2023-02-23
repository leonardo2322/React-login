import { createSlice } from "@reduxjs/toolkit";
const initialState = [
  {
    id: 1,
    user: "leonardo030397@hotmail.com",
    password: 222,
    permisions: [{ isAdmin: true }],
    date: "03/03/2025"
  },
  {
    id: 2,
    user: "elmorenito_030397@hotmail.com",
    password: 5563,
    permisions: [{ isAdmin: false}],
    date: "16/08/2025"
  },
];

export const UserSlice = createSlice({
  name: "users",
  initialState: initialState,
  reducers: {
    login:(actions) =>{
      console.log('logeando')
    }
  },
});
export const {login} = UserSlice.actions

export default UserSlice.reducer;
