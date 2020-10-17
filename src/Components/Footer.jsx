import React from "react";
import Text2 from "./Text.component2";
import '../ComponentCSS/Footer.css'
import Icons from '../Components/Icons'

const Footer = () => {
  return (
    <div>
      <div className="footer-container">
        <div className="content">
          <ul>
            <li>BUILD SOFTWARE</li>
            <li>DESIGN DIFFERNTLY</li>
            <li>APPLY YOUR KNOWLEDGE</li>
            <li>FAQ</li>
          </ul>
          <div className="address">
            <Text2
              para="Our Local Campus center: Kilometer 7, Enugu/Port Harcourt, Expressway, Centenary City, Enugu. Nigeria"
              header="GET IN TOUCH"
              width={{ width: "200px" }}
              hstyle={{ color: "#000000", fontSize: "20px" }}
            />
          </div>
          <div className="footer-img">
            <img src={require("../images/image32.png")} alt="footer pix" />
          </div>
          <div>
            <Text2
              para="Learnable is proud to be a collaborative effort of all the arms of our product team "
						  header="HEAD TO DEVSTUDIO"
              hstyle={{ color: "#000000", fontSize: "20px" }}
              width={{ width: "200px" }}
            />
          </div>
        </div>


        <div className="social">
          <div className="social-inner">
          <Icons name='vector4'/>
          <Icons name='vector1'/>
          
          <Icons name='vector11'/>
          <Icons name='vector7'/>
          <Icons name='vector6'/>
          <Icons name='vector5'/>
        


          </div>
        <div className="inner2">
            <p> &copy; Genesys 2020</p>
            <p>Privacy Statement</p>
        </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
