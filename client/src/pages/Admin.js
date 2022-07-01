import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

function Admin() {
  const user = useSelector(state => state.authReducer.user);
  return (
    <div>{user?.role === "admin" ? <h1>Admin</h1> : <Navigate to='/' />}</div>
  );
}

export default Admin;
