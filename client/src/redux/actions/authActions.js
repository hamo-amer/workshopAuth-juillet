import axios from "axios";
import { CURRENT, FAIL, LOGIN, LOGOUT, REGISTER } from "../types";
// import { setAlert } from "./alertActions";
import { toast } from "react-toastify";

export const userRegister = (data, navigate) => async dispatch => {
  try {
    const res = await axios.post("/api/auth/signup", data);
    dispatch({
      type: REGISTER,
      payload: res.data,
    });
    toast.success(res.data.msg);
    // dispatch(setAlert(res.data.msg, "success"));
    navigate("/profile");
  } catch (error) {
    dispatch({
      type: FAIL,
    });
    // error.response.data.errors.forEach(err =>
    //   dispatch(setAlert(err.msg, "danger"))
    // );
    error.response.data.errors.forEach(err => toast.error(err.msg));
  }
};
// login
export const userLogin = (data, navigate) => async dispatch => {
  try {
    const res = await axios.post("/api/auth/signin", data);
    dispatch({
      type: LOGIN,
      payload: res.data,
    });
    toast.success(res.data.msg);
    // dispatch(setAlert(res.data.msg, "success"));
    if (res.data.user.role === "admin") {
      navigate("/admin");
    } else {
      navigate("/profile");
    }
  } catch (error) {
    dispatch({
      type: FAIL,
    });
    // error.response.data.errors.forEach(err =>
    //   dispatch(setAlert(err.msg, "danger"))
    // );
    error.response.data.errors.forEach(err => toast.error(err.msg));
  }
};
// logout
export const logout = () => {
  return {
    type: LOGOUT,
  };
};
// get auth user
export const userCurrent = () => async dispatch => {
  const config = {
    headers: {
      authorization: localStorage.getItem("token"),
    },
  };
  try {
    const res = await axios.get("/api/auth/current", config);
    dispatch({ type: CURRENT, payload: res.data });
  } catch (error) {
    dispatch({
      type: FAIL,
    });
  }
};
