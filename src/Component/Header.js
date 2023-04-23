import React from "react";
import user from "../Assest/user.jpg";

export const Header = () => {
  return (
    <div className="header">
      <div className="main-div1">
        <div className="container1">
          <h4 className="logo">EDYODA</h4>
          <div className="combo">
            <h4>Hi Test Learner!</h4>
            <img src={user} className="user" alt="user icon" />
          </div>
        </div>
      </div>
      <div className="main-div2">
        <div className="container2">
          <h4 className="name">DS031221</h4>
          <p className="arrow">⬇</p>
          <h4>Data Scientist Program</h4>
        </div>
      </div>
    </div>
  );
};

export default Header;
