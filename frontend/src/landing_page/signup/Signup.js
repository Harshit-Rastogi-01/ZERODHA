import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
// import "../Auth/Authpage.css";

const Signup = () => {
  const navigate = useNavigate();
  const [inputValue, setInputValue] = useState({
    email: "",
    password: "",
    username: "",
  });
  const { email, password, username } = inputValue;
  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setInputValue({
      ...inputValue,
      [name]: value,
    });
  };

  const handleError = (err) =>
    toast.error("User already exsists !");
  const handleSuccess = (msg) =>
    toast.success("Logged in succesfully");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post(
        // "http://localhost:4000/signup",
        // https://zerodha-backend-yn9o.onrender.com
        "https://zerodha-backend-yn9o.onrender.com/signup",

        {
          ...inputValue,
        },
        { withCredentials: true }
      );
      const { success, message } = data;
      if (success) {
        handleSuccess(message);
        setTimeout(() => {
          navigate("/");
        }, 1000);
      } else {
        handleError(message);
      }
    } catch (error) {
      console.log(error);
    }
    setInputValue({
      ...inputValue,
      email: "",
      password: "",
      username: "",
    });
  };

//   <div className="container mt-5">
//   <form className="p-4 border rounded shadow">
//     <div className="mb-3">
//       <label htmlFor="email" className="form-label">Email</label>
//       <input type="email" className="form-control" id="email" placeholder="Enter your email" />
//     </div>
//     <div className="mb-3">
//       <label htmlFor="password" className="form-label">Password</label>
//       <input type="password" className="form-control" id="password" placeholder="Enter your password" />
//     </div>
//     <button type="submit" className="btn btn-primary w-100">Submit</button>
//   </form>
// </div>

  return (
    // <div className="container mt-5">
    <div className="container p-5 mt-5">
   
      <form onSubmit={handleSubmit} className="p-4 border rounded shadow">
        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email</label>
          <input className="form-control"
            type="email"
            name="email"
            value={email}
            placeholder="Enter your email"
            onChange={handleOnChange}
          />
        </div>
        <div>
          <label htmlFor="email" className="form-label">Username</label>
          <input className="form-control"
            type="text"
            name="username"
            value={username}
            placeholder="Enter your username"
            onChange={handleOnChange}
          />
        </div>
        <div>
          <label htmlFor="password" className="form-label ">Password</label>
          <input className="form-control"
            type="password"
            name="password"
            value={password}
            placeholder="Enter your password"
            onChange={handleOnChange}
          />
        </div>
        <button type="submit" className="btn btn-primary d-flex justify-content-center align-items-center mt-3 mb-3">Submit</button>
        <span className="mb-5">
          Already have an account? <Link to={"/login"}>Login</Link>
        </span>
      </form>
      <ToastContainer />
      </div>
    
  );
};

export default Signup;