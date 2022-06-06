import React from "react";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import "./App.css";
import "./assets/output.css";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { setAuthToken, API } from "./config/axios";
import { useSelector, useDispatch } from "react-redux";
import { selectUser, LOGIN_SUCCESS } from "./redux/userSlice";

function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  console.log(user);

  if (localStorage.token) {
    setAuthToken(localStorage.token);
  }

  React.useEffect(() => {
    if (localStorage.token) {
      setAuthToken(localStorage.token);
    }
  }, []);

  React.useEffect(() => {
    const checkUser = async () => {
      try {
        const response = await API.get("/user");
        dispatch(LOGIN_SUCCESS(response.data.data.user));
      } catch (error) {
        console.log("cek login");
      }
    };
    checkUser();
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
