import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
// import "./AuthPage.css"; // Normal CSS import

const AuthPage = () => {
  const navigate = useNavigate();
  const [cookies, removeCookie] = useCookies([]);
  const [username, setUsername] = useState("");

  useEffect(() => {
    const verifyCookie = async () => {
      if (!cookies.token) {
        navigate("/login");
      }
      const { data } = await axios.post(
        // "http://localhost:4000/verify", //sending req to backend
        "https://zerodha-backend-yn9o.onrender.com/verify",
        {},
        { withCredentials: true }
      );
      const { status, user } = data;
      setUsername(user);
      return status
        ? toast(`Hello ${user}`, { position: "top-right" })
        : (removeCookie("token"), navigate("/login"));
    };
    verifyCookie();
  }, [cookies, navigate, removeCookie]);

  const Logout = () => {
    removeCookie("token");
    navigate("/signup");
  };

  return (
  <div className="container d-flex justify-content-center align-items-center">
    <div className="row text-center">
      <h4 className="text-primary fw-bold">Welcome <span className="text-info">{username}</span></h4>
      <button className="btn btn-danger mt-3 px-4 py-2 fw-semibold" onClick={Logout}>
        LOGOUT
      </button>
    </div>
  <ToastContainer />
  </div>
  );
}

export default AuthPage;
