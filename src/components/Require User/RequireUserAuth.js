import React from "react";
import { KEY_ACCESS_TOKEN, getItem } from "../../utils/localStroageManager";
import { Navigate, Outlet } from "react-router-dom";

function RequireUserAuth() {
  const user = getItem(KEY_ACCESS_TOKEN);

  return user ? <Outlet /> : <Navigate to="/login" />;
}

export default RequireUserAuth;
