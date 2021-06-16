import React from "react";
import "./Header.css";
import PhoneIcon from "@material-ui/icons/Phone";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="header">
      <div className="header__left">
        <PhoneIcon />
        <h3>0710857297</h3>
        <p>|</p>
        <MailOutlineIcon />
        <h3>testemail@gmail.com</h3>
      </div>
      <div className="header__right">
        <Link to="/" className="link">
          <h3>Home</h3>
        </Link>
        <Link to="/" className="link">
          <h3>About Us</h3>
        </Link>
        <Link to="/shop" className="link">
          <h3>Shop</h3>
        </Link>
        <Link to="/contact" className="link">
          <h3>Contact Us</h3>
        </Link>
      </div>
    </div>
  );
};

export default Header;
