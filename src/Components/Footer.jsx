import React from "react";
import Text2 from "./Text.component2";

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
            />
          </div>
          <div className="footer-img">
            <img src={require("../images/image32.png")} alt="footer pix" />
          </div>
          <div>
            <Text2
              para="Learnable is proud to be a collaborative effort of all the arms of our product team "
              header="Head to DevStudio"
              hstyle={{ color: "#000000" }}
              width={{ width: "200px" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
