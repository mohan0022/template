import { combineReducers } from "@reduxjs/toolkit";
import UserSlice from "./Slices/UserSlice";

export const rootReducers = combineReducers({
  user: UserSlice,
});
