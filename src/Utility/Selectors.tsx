import { useSelector } from "react-redux";
import { UserDataTypes } from "./UtilTypes";

export const GetToken = () => {
  return useSelector((state: UserDataTypes) => state.user.token);
};

export const GetUserDetails = () => {
  return useSelector((state: UserDataTypes) => state.user.userDetails);
};

export const GetUserData = () => {
  return useSelector((state: UserDataTypes) => state.user.data);
};
