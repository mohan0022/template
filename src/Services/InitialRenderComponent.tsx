import React, { useEffect } from "react";
import { GetToken } from "../Utility/Selectors";
import { useDispatch } from "react-redux";
import { setLoginData, storeToken } from "../Store/Slices/UserSlice";

export default function InitialRenderComponent() {
  const dispatch = useDispatch();

  const token = GetToken();
  useEffect(() => {
    if (!token) {
      // dispatch(storeToken(JSON.parse(localStorage.getItem("token") || "")));
      // dispatch(
      //   setLoginData(JSON.parse(localStorage.getItem("logindata") || ""))
      // );
    }
  }, []);
  return <div />;
}
