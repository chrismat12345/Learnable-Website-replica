import React from "react";
import "../ComponentCSS/Home.css";
import Text from "../Components/Text.component";
import Image from "../Components/Image.Component";

const Home = () => {
  return (
    <div className="home-container">
      {/*COMMING SOON SECTION */}
      <div className="home-coming">
        <div>
          <h2>COMING SOON: LEARNABLE '20</h2>
          <p>
            We've started taking in applications for the next batch of learnable
            interns. Applications are on till the 21st of Febuary
          </p>
        </div>
        <div>
          <p>Click link to download...</p>
          <h2> Learnable ‘20 Brochure</h2>
        </div>
      </div>

      <div className="home-learn-contanier">
        <div className="home-learn">
          <div>
            <h1>Everything is Learnable</h1>
            <p>
              Learnable is the perfect product development internship program
              brought to you by Genesys.
            </p>
          </div>
          <div className="devpro">
            <div className="home-shape1">
              <h4>Development</h4>
              <p> what to expect</p>
            </div>
            <div className="home-shape">
              <h4>product Design</h4>
              <p>what to expect</p>
            </div>
          </div>
          <div className="image1">
            <img src="/images/rectangle4.png" alt="rectange4" width="1200" />
          </div>
        </div>

        <div className="text-body">
          <Text
            para="Young SoftwareDevelopers Trained"
            header="305"
            hstyle={{ color: "#03CEA4" }}
            width={{ width: "100px" }}
          />
          <Text
            para="Tech Enthusiasts"
            header="2100"
            hstyle={{ color: "#03CEA4" }}
            width={{ width: "100px" }}
          />
          <Text
            para="StartUps Incubated"
            header="8"
            hstyle={{ color: "#03CEA4" }}
            width={{ width: "100px" }}
          />
          <Text
            para="Small Businesses supported"
            header="250"
            hstyle={{ color: "#03CEA4" }}
            width={{ width: "100px" }}
          />
        </div>

        <div className="diva">
          <Text
            para="As part of our calculated efforts to contribute to the emerging knowledge and skills driven economy of Nigeria, Learnable is a 6-month product development training program with an emphasis on software programming and product design. It is for outstanding young individuals who are passionate about building a career in the software industry. 

               We primarily educate and groom software developers and designers, preparing them for the industry. "
            header="We Make People Great"
            hstyle={{ color: "#000000" }}
            width={{ width: "400px" }}
          />
          <div style={{ background: "#03CEA4", borderRadius: "50%" }}>
            <Image name="cutout1" radius={{ borderRadius: "50%" }} />
          </div>
        </div>
        <div className="diva1">
          <Image name="photo4" />
          <Text
            para="At Genesys, we believe in the learning processes as much as we believe in the results. By applying a combination of active and social learning methodologies, we create an environment that involves the learner in the learning process while providing avenues for collaboration and peer-to-peer mentorship.

Our methods over the years have helped us discover ways to take education out of the classroom. We introduce our interns to learning by experimentation and problem-solving. To us, every task is an opportunity to learn. "
            header="An Unusual Learning Experience"
            hstyle={{ color: "#000000" }}
            width={{ width: "400px" }}
          />
        </div>

        <div className="diva2">
          <Text
            para="We love to build stuff. Really awesome stuff. That’s why we have developed a learning program that will empower you to create amazing software the right way.

                We believe in learning through experimentation. Our aim is to nurture and grow bright young minds from the get-go because that’s how our industry will thrive."
			header="Learn to Build Software the Right Way"
					  width={{ width: "400px" }}
          >
            <p>For Developers</p>
          </Text>
          <div className="maindiv">
            <div className="inner-div">
						  <div style={{ background: '#17255a' }}> <h4>Program with JavaScript</h4> </div>
						  <div style={{ background: '#03CEA4' }}> <h4>Version Control with Git</h4> </div>
            </div>
            <div className="inner-div">
						  <div style={{ background: '#EAC435' }}> <h4>Web Development with React</h4> </div>
						  <div style={{ background: '#2D1E2F' }}><h4>Building APIs with NodeJS</h4></div>
            </div>
            <div className="inner-div">
						  <div style={{ background: '#273043' }}> <h4>Managing Data with MongoDB</h4> </div>
						  <div style={{ background: '#F5772F' }}> <h4>Deploying with Heroku</h4> </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
