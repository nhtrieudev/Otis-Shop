import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoggIn: false,
  email: null,
  userName: null,
  userId: null,
};

const authReducer = createSlice({
  name: "auth",
  initialState,
  reducers: {
    activeUser: (state, action) => {
      state.isLoggIn = true;
      state.email = action.payload.email;
      state.userName = action.payload.userName;
      state.userId = action.payload.userId;
    },
    removeUser: (state) => {
      state.isLoggIn = false;
      state.email = null;
      state.userName = null;
      state.userId = null;
    },
  },
});

export const { activeUser, removeUser } = authReducer.actions;

export default authReducer.reducer;
