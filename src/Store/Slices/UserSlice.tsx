import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: {},
  token: null,
  userDetails: "",
};
const userSlice = createSlice({
  initialState,
  name: "userSlice",
  reducers: {
    storeToken: (state, action) => {
      state.token = action.payload;
    },
    setLoginData: (state, action) => {
      state.data = action.payload;
    },
    loginUserDetails: (state, action) => {
      state.userDetails = action.payload;
    },
  },
});

export const { storeToken, setLoginData, loginUserDetails } = userSlice.actions;
export default userSlice.reducer;
