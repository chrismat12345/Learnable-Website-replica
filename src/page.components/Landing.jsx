import React from "react";
import Footer from "../Components/Footer";
import Text from "../Components/Text.component";
import Image from "../Components/Image.Component";
import "../ComponentCSS/landing.css";
import Update from "../Components/Update";

const Landing = () => {
  return (
    <div>
      <div className="landing-container">
        <div>
          <Text
            para="We understand that opportunities are scarce in these parts. We are either creating or exposing our people to these opportunities."
            header="Genesys provides opportunities for young Nigerian techies and opportunities to grow and innovate."
            hstyle={{ color: "#17255A" }}
            width={{ width: "43%" }}
          />
        </div>

        <div>
          <img
            src="/images/rectangle36.png"
            alt="girls"
            width="100%"
            style={{ marginTop: "2rem" }}
          />
        </div>

        <div className="diva">
          <Image name="photo8" />
          <div>
            <Text
              para="Every year, young Nigerians are launching new careers in the technology industry. Find out how Genesys is helping them do it. "
              header="Learnable"
              hstyle={{ color: "#000000" }}
              width={{ width: "500px" }}
            />
            <span
              style={{ color: "#03CEA4", fontSize: "12px", marginLeft: "30px" }}
            >
              Learn more
            </span>
          </div>
        </div>

        <div className="diva" style={{ background: "#EEEEEE" }}>
          <div>
            <Text
              para="We are reimagining the workplace and how people work. Find out how our co-working spaces can help you enjoy the work that you do. "
              header="Agora"
              hstyle={{ color: "#000000" }}
              width={{ width: "500px" }}
            />
            <span
              style={{ color: "#03CEA4", fontSize: "12px", marginLeft: "30px" }}
            >
              Learn more
            </span>
          </div>
          <div>
            <Image name="photo9" />
          </div>
        </div>

        <div className="diva">
          <Image name="photo12" />
          <div>
            <Text
              para="The business environment is harsh for early-stage businesses. We can help you rise above it all. "
              header="StartZone"
              hstyle={{ color: "#000000" }}
              width={{ width: "500px" }}
            />
            <span
              style={{ color: "#03CEA4", fontSize: "12px", marginLeft: "30px" }}
            >
              Here’s How
            </span>
          </div>
        </div>

        <div className="diva" style={{ background: "#EEEEEE" }}>
          <Image name="photo4" />
          <Text
            para="At Genesys, we believe in the learning processes as much as we believe in the results. By applying a combination of active and social learning methodologies, we create an environment that involves the learner in the learning process while providing avenues for collaboration and peer-to-peer mentorship.

Our methods over the years have helped us discover ways to take education out of the classroom. We introduce our interns to learning by experimentation and problem-solving. To us, every task is an opportunity to learn. "
            header="An Unusual Learning Experience"
            hstyle={{ color: "#000000" }}
            width={{ width: "500px" }}
          />
        </div>

        <div className="diva" style={{ background: " #17255A" }}>
          <Image name="photo11" />
          <div>
            <Text
              para="The best team in the world"
              header="The best team in the world"
              hstyle={{ color: "#000000" }}
              width={{ width: "500px" }}
            />
            <span
              style={{ color: "#03CEA4", fontSize: "12px", marginLeft: "30px" }}
            >
              SEE TEAM
            </span>
          </div>
        </div>

        <Update bg={{ background: "#03CEA4" }} />

        <Footer />
      </div>
    </div>
  );
};

export default Landing;
