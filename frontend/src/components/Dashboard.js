import React ,{useEffect}from "react";
import { Route, Routes } from "react-router-dom";
import Apps from "./Apps";
import Funds from "./Funds";
import Holdings from "./Holdings";
import Orders from "./Orders";
import Positions from "./Positions";
import Summary from "./Summary";
import WatchList from "./WatchList";
import { GeneralContextProvider } from "./GeneralContext";
import "./component.css"
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";
const Dashboard = () => {

  //added for redirection from login page to dashboard page .

  const [cookies] = useCookies(["token"]);
  const navigate = useNavigate();

  useEffect(() => {
    if (cookies.token === undefined) {
      return; // Do nothing if cookies haven't loaded yet
    }
    if (!cookies.token) {
      navigate("/login");
      
      // window.location.href = "http://localhost:3000/login"; // Redirect to login
      // window.location.href = "https://zerodha-frontend-q0yr.onrender.com/login";
      
    }
  }, [cookies,navigate]);


  return (
    
    <div className="dashboard-container">
      <GeneralContextProvider>
        <WatchList />
      </GeneralContextProvider>
      <div className="content">
        <Routes>
          <Route exact path="/" element={<Summary />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/holdings" element={<Holdings />} />
          <Route path="/positions" element={<Positions />} />
          <Route path="/funds" element={<Funds />} />
          <Route path="/apps" element={<Apps />} />
        </Routes>
      </div>
    </div>
  );
};

export default Dashboard;
