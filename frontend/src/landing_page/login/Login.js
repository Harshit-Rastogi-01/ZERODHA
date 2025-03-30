import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
// import "../Auth/Authpage.css";

const Login = () => {
  const navigate = useNavigate();
  const [inputValue, setInputValue] = useState({
    email: "",
    password: "",
  });
  const { email, password } = inputValue;
  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setInputValue({
      ...inputValue,
      [name]: value,
    });
  };

  const handleError = (err) =>
    toast.error("Incorrect Credentials");
  const handleSuccess = (msg) =>
    toast.success("Logged in Successfully");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post(
        "http://localhost:4000/login",
        // https://zerodha-backend-yn9o.onrender.com
        // "https://zerodha-backend-yn9o.onrender.com/login",  //backend live url
        {
          ...inputValue,
        },
        { withCredentials: true }
      );
      console.log(data);
      const { success, message } = data;
      if (success) {
        handleSuccess(message);
        setTimeout(() => {

          // navigate("/");
          

          window.location.href = "http://localhost:3001";
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
    <div className="container mt-5">
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
          <label htmlFor="password" className="form-label" >Password</label>
          <input className="form-control"
            type="password"
            name="password"
            value={password}
            placeholder="Enter your password"
            onChange={handleOnChange}
          />
        </div>
        <button type="submit" className="btn btn-primary d-flex justify-content-center align-items-center mt-3 mb-3" >Submit</button>
        
          Already have an account? <Link to={"/signup"}>Signup</Link>
        
      </form>
      <ToastContainer />
    </div>
  );
};

export default Login;