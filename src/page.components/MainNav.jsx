import React from "react";
import "../ComponentCSS/MainNav.css";
import glogo from "../glogo.png";
import { Link } from 'react-router-dom'

const MainNav = () => {
  return (
    <div>
      <div className="container">
        <div className="mainNav">
          <div className="subcontent1">
            <Link to='Landing'><img src={glogo} alt="genesys logo" /> </Link>
            <Link to='Home'> <p className='p'>LEARNABLE</p></Link>
           
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
