import React from "react";
import { Link } from "react-router-dom";
import "./Homepage.css";
import { RemoveScrollBar } from "react-remove-scroll-bar";

function Homepage() {
  return (
    <div className="homepage">
      <RemoveScrollBar />
      <div className="homepage__content">
        <h1>Demkar Electricals</h1>
        <p>Leading Supplier in Electical items</p>
        <Link to="/shop">
          <button className="button">Shop 🛒</button>
        </Link>
      </div>
    </div>
  );
}

export default Homepage;
