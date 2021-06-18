import React from "react";
import "./Contact.css";
import PhoneIcon from "@material-ui/icons/Phone";
import EmailOutlinedIcon from "@material-ui/icons/EmailOutlined";
import RoomIcon from "@material-ui/icons/Room";
import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";
import InstagramIcon from "@material-ui/icons/Instagram";

const Contact = () => {
  return (
    <div className="contact">
      <div className="contact__Top">
        <h1>We’d love to hear from you</h1>
        <p>
          If you have any questions, please feel free to drop us a line. If you don't get an answer immediately, , We will get back to you as soon as
          we can. That's a promise!
        </p>
      </div>
      <div className="contact__Bottom">
        <h3>Get In Touch</h3>
        <div className="contact__BottomRow">
          <div>
            <PhoneIcon />
            <div>
              <p style={{ fontSize: "1.1em", letterSpacing: "2px" }}>Give us a call</p>
              <p style={{ color: "#3c628e", letterSpacing: "1.5px" }}>0710857297</p>
            </div>
          </div>
          <div>
            <EmailOutlinedIcon />
            <div>
              <p style={{ fontSize: "1.1em", letterSpacing: "2px" }}>Send us an e-mail</p>
              <p style={{ color: "#3c628e", letterSpacing: "1.5px" }}>testemail@gmail.com</p>
            </div>
          </div>
        </div>
        <div>
          <div className="contact__BottomRow">
            <div style={{ margin: "0 auto" }}>
              <RoomIcon />
              <div>
                <p style={{ fontSize: "1.1em", letterSpacing: "2px" }}>Visit us today</p>
                <p style={{ color: "#3c628e", letterSpacing: "1.5px" }}>Location</p>
              </div>
            </div>
          </div>
        </div>
        <div className="socialMedia">
          <h3
            style={{
              color: "#333",
              letterSpacing: "1.2px",
              marginBottom: "10px",
              paddingBottom: "10px",
              borderBottom: "1px solid #dfdfdf",
              width: "40%",
              margin: "0 auto",
            }}
          >
            Connect With Us 😊
          </h3>
          <div className="socials">
            <a href="###">
              <FacebookIcon />
            </a>
            <a href="###twitter">
              <TwitterIcon />
            </a>
            <a href="###insta">
              <InstagramIcon />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
