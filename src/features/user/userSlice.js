import { createSlice } from "@reduxjs/toolkit";

const initialState = { name: "", email: "", photo: "" };

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUserLoginDetails: (state, { payload }) => {
      state.name = payload.name;
      state.email = payload.email;
      state.photo = payload.photo;
    },
    setSignOutState: (state) => {
      state.name = null;
      state.email = null;
      state.photo = null;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setSignOutState, setUserLoginDetails } = userSlice.actions;

export default userSlice.reducer;
