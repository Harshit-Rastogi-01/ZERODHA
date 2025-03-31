import React from "react";
import { Link } from "react-router-dom";
import "./component.css"
const Orders = () => {
  return (
    <div className="orders">
      <div className="no-orders">
        <p>You haven't placed any orders today</p>

        <Link to={"/dashboard"} className="btn">
          Get started
        </Link>
      </div>
    </div>
  );
};

export default Orders;
