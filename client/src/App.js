import { Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";
import LandPage from "./pages/LandPage";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Profile from "./pages/Profile/Profile";
import NotFound from "./pages/NotFound";
import PrivateRoute from "./router/PrivateRoute";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { userCurrent } from "./redux/actions/authActions";
// import Error from "./components/Error";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Admin from "./pages/Admin";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(userCurrent());
  }, [dispatch]);
  return (
    <div>
      <NavBar />
      {/* <Error /> */}
      <Routes>
        <Route path='/' element={<LandPage />} />
        <Route path='/register' element={<Register />} />
        <Route path='/login' element={<Login />} />
        <Route
          path='/profile'
          element={
            <PrivateRoute>
              <Profile />
            </PrivateRoute>
          }
        />
        <Route
          path='/admin'
          element={
            <PrivateRoute>
              <Admin />
            </PrivateRoute>
          }
        />
        <Route path='/*' element={<NotFound />} />
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
