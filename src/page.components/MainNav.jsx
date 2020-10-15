import React from "react";
import "../ComponentCSS/MainNav.css";
import glogo from "../glogo.png";

const MainNav = () => {
  return (
    <div>
      <div className="container">
        <div className="mainNav">
          <div className="subcontent1">
            <img src={glogo} alt="genesys logo" />
            <p style={{ color: "red" }}>LEARNABLE</p>
            <p>AGORA</p>
            <p>STARTZONE</p>
            <p>ABOUT</p>
            <p>CONTACT</p>
          </div>
          <div className="subcontent">
            <p>Build a product with </p>
            <p>DEVSTUDIO</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainNav;
