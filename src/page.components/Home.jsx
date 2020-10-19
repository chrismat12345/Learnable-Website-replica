import React from "react";
import "../ComponentCSS/Home.css";
import Text from "../Components/Text.component";
import Image from "../Components/Image.Component";
import Update from '../Components/Update'
import Footer from '../Components/Footer'
import TextAndImageComponent from '../Components/TextAndImageComponent'
import FagText from '../Components/FagText'
import SecNav from './secNav'


const Home = () => {
  return (
    <div className="home-container">
      <SecNav />
      {/*COMMING SOON SECTION */}
      <div className="home-coming">
        <div>
          <h1>Coming soon: Learnable ‘20</h1>
          <p>
            We've started taking in applications for the next batch of learnable
            interns. Applications are on till the 21st of Febuary
          </p>
        </div>
        <div>
          <p>Click link to download...</p>
          <h1> Learnable ‘20 Brochure</h1>
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
          <div className="cone">
            <img
              src="/images/arrowdown.png"
              alt=""
              height="70px"
              className="arr"
            />
            <div className="image1">
              <img
                src="/images/rectangle4.png"
                alt="rectange4"
                width="1100px"
              />
            </div>
          </div>
        </div>

        <div className="text-body">
          <Text
            para="Young SoftwareDevelopers Trained"
            header="305"
            hstyle={{ color: "#03CEA4" }}
            width={{ width: "6.65rem" }}
          />
          <Text
            para="Tech Enthusiasts"
            header="2100"
            hstyle={{ color: "#03CEA4" }}
            width={{ width: "6.65rem" }}
          />
          <Text
            para="StartUps Incubated"
            header="8"
            hstyle={{ color: "#03CEA4" }}
            width={{ width: "6.65rem" }}
          />
          <Text
            para="Small Businesses supported"
            header="250"
            hstyle={{ color: "#03CEA4" }}
            width={{ width: "6.65rem" }}
          />
        </div>

        <div className="diva">
          <Text
            para="As part of our calculated efforts to contribute to the emerging knowledge and skills driven economy of Nigeria, Learnable is a 6-month product development training program with an emphasis on software programming and product design. It is for outstanding young individuals who are passionate about building a career in the software industry. 

               We primarily educate and groom software developers and designers, preparing them for the industry. "
            header="We Make People Great"
            hstyle={{ color: "#000000" }}
            width={{ width: "32rem" }}
          />
          <div style={{ background: "#03CEA4", borderRadius: "50%" }}>
            <Image name="cutout1" radius={{ borderRadius: "50%" }} />
          </div>
        </div>
        <div className="diva" style={{ background: "#EEEEEE" }}>
          <Image name="photo4" />
          <Text
            para="At Genesys, we believe in the learning processes as much as we believe in the results. By applying a combination of active and social learning methodologies, we create an environment that involves the learner in the learning process while providing avenues for collaboration and peer-to-peer mentorship.

Our methods over the years have helped us discover ways to take education out of the classroom. We introduce our interns to learning by experimentation and problem-solving. To us, every task is an opportunity to learn. "
            header="An Unusual Learning Experience"
            hstyle={{ color: "#000000" }}
            width={{ width: "32rem" }}
          />
        </div>

        <div className="diva">
          <div>
            <Text
              para="We love to build stuff. Really awesome stuff. That’s why we have developed a learning program that will empower you to create amazing software the right way.

                We believe in learning through experimentation. Our aim is to nurture and grow bright young minds from the get-go because that’s how our industry will thrive."
              header="Learn to Build Software the Right Way"
              width={{ width: "32rem" }}
            >
              <span>For Developers</span>
            </Text>
            <p>learn more</p>
          </div>
          <div className="maindiv">
            <div className="inner-div">
              <div style={{ background: "#17255a" }}>
                {" "}
                <h4>Program with JavaScript</h4>{" "}
              </div>
              <div style={{ background: "#03CEA4" }}>
                {" "}
                <h4>Version Control with Git</h4>{" "}
              </div>
            </div>
            <div className="inner-div">
              <div style={{ background: "#EAC435" }}>
                {" "}
                <h4 style={{ color: "#17255a" }}>
                  Web Development with React
                </h4>{" "}
              </div>
              <div style={{ background: "#2D1E2F" }}>
                <h4>Building APIs with NodeJS</h4>
              </div>
            </div>
            <div className="inner-div">
              <div style={{ background: "#273043" }}>
                {" "}
                <h4>Managing Data with MongoDB</h4>{" "}
              </div>
              <div style={{ background: "#F5772F" }}>
                {" "}
                <h4>Deploying with Heroku</h4>{" "}
              </div>
            </div>
          </div>
        </div>

        <div className="diva">
          <div className="maindiv">
            <div className="inner-div">
              <div style={{ background: "#17255a" }}>
                {" "}
                <h4>Design User Interfaces</h4>{" "}
              </div>
              <div style={{ background: "#F5772F" }}>
                {" "}
                <h4>Craft User Experiences</h4>{" "}
              </div>
            </div>
            <div className="inner-div">
              <div style={{ background: "#EAC435" }}>
                {" "}
                <h4 style={{ color: "#17255a" }}>Apply Design Thinking</h4>{" "}
              </div>
              <div style={{ background: "#273043" }}>
                <h4>Build Information Architecture</h4>
              </div>
            </div>
            <div className="inner-div">
              <div style={{ background: "#E13F29" }}>
                {" "}
                <h4>Copy write for Projects</h4>{" "}
              </div>
              <div style={{ background: "#03CEA4" }}>
                {" "}
                <h4>Brand Products</h4>{" "}
              </div>
            </div>
          </div>
          <div>
            <Text
              para="We love to make things work perfectly. That’s why our design learning path exposes you to the science of user-oriented design.

Design is at the heart of everything we do at Genesys. Right from the start of the program, you’ll get your hands dirty as you get practically involved in the world’s most modern design concepts. At Genesys, we’re building designers who put the users first."
              header="Design Different"
              width={{ width: "32rem" }}
            >
              <span>For Designers</span>
            </Text>
            <p>learn more</p>
          </div>
        </div>

        <div className="diva">
          <Text
            para="We believe learning should be a fun experience. For this reason, we don’t do all the learning in the classroom.

The Learnable experience can not be complete without the bag of fun times which you’ll have. To us, every task is an opportunity to have some fun. But we do well to throw in a good number of activities to add to this. You will find yourself partaking in a lot of healthy activities such as cooking, sports, music, hangouts, and even random dates.

Trust us when we say we know how to have fun. "
            header="Learning can be fun…"
            hstyle={{ color: "#000000" }}
            width={{ width: "28.1rem" }}
          />
          <div>
            <Image name="photo5" />
          </div>
        </div>

        <div className="diva" style={{ alignItems: "center" }}>
          <Text
            para="We have designed other learning activities that aren’t classroom-based. You will learn how to be a better person, how to have good conversations, how to work better with people and most importantly, how to lead other people. Hey! We’ll even teach you how to run a business during the Learnable Business Sessions."
            header="Learning doesn’t always have to be in the classroom"
            hstyle={{ color: "#000000" }}
            width={{ width: "28.1rem" }}
          />

          <div className="grid">
            <div className="img-contain">
              {" "}
              <img
                src="/images/rectangle17.png"
                alt="waiting"
                style={{ width: "7.5rem", height: "6.25rem" }}
              />{" "}
            </div>
            <div className="img-contain">
              {" "}
              <img
                src="/images/rectangle29.png"
                alt="waiting"
                style={{ width: "7.5rem", height: "6.25rem" }}
              />{" "}
            </div>
            <div className="img-contain">
              {" "}
              <img
                src="/images/rectangle25.png"
                alt="waiting"
                style={{ width: "7.5rem", height: "6.25rem" }}
              />{" "}
            </div>
            <div className="img-contain">
              {" "}
              <img
                src="/images/rectangle21.png"
                alt="waiting"
                style={{ width: "7.5rem", height: "6.25rem" }}
              />{" "}
            </div>
            <div className="img-contain">
              {" "}
              <img
                src="/images/rectangle20.png"
                alt="waiting"
                style={{ width: "7.5rem", height: "6.25rem" }}
              />{" "}
            </div>
            <div className="img-contain">
              {" "}
              <img
                src="/images/rectangle31.png"
                alt="waiting"
                style={{ width: "7.5rem", height: "6.25rem" }}
              />{" "}
            </div>
            <div className="img-contain">
              {" "}
              <img
                src="/images/rectangle27.png"
                alt="waiting"
                style={{ width: "7.5rem", height: "6.25rem" }}
              />{" "}
            </div>
            <div className="img-contain">
              {" "}
              <img
                src="/images/rectangle23.png"
                alt="waiting"
                style={{ width: "7.5rem", height: "6.25rem" }}
              />{" "}
            </div>
            <div className="img-contain">
              {" "}
              <img
                src="/images/rectangle18.png"
                alt="waiting"
                style={{ width: "7.5rem", height: "6.25rem" }}
              />{" "}
            </div>
            <div className="img-contain">
              {" "}
              <img
                src="/images/rectangle30.png"
                alt="waiting"
                style={{ width: "7.5rem", height: "6.25rem" }}
              />{" "}
            </div>
            <div className="img-contain">
              {" "}
              <img
                src="/images/rectangle26.png"
                alt="waiting"
                style={{ width: "7.5rem", height: "6.25rem" }}
              />{" "}
            </div>
            <div className="img-contain">
              {" "}
              <img
                src="/images/rectangle22.png"
                alt="waiting"
                style={{ width: "7.5rem", height: "6.25rem" }}
              />{" "}
            </div>
            <div className="img-contain">
              {" "}
              <img
                src="/images/rectangle19.png"
                alt="waiting"
                style={{ width: "7.5rem", height: "6.25rem" }}
              />{" "}
            </div>
            <div className="img-contain">
              {" "}
              <img
                src="/images/rectangle32.png"
                alt="waiting"
                style={{ width: "7.5rem", height: "6.25rem" }}
              />{" "}
            </div>
            <div className="img-contain">
              {" "}
              <img
                src="/images/rectangle28.png"
                alt="waiting"
                style={{ width: "7.5rem", height: "6.25rem" }}
              />{" "}
            </div>
            <div className="img-contain">
              {" "}
              <img
                src="/images/rectangle24.png"
                alt="waiting"
                style={{ width: "7.5rem", height: "6.25rem" }}
              />{" "}
            </div>
          </div>
        </div>

        <div
          className="diva"
          style={{
            justifyContent: "center",
            alignItems: "center",
            background: "#eeeeee",
          }}
        >
          <div>
            <div className="diva" style={{ marginTop: "0px" }}>
              <TextAndImageComponent
                name="nnamdi"
                facilitator="Managing Director"
                header3="Nnamdi"
                width="120px"
                height="120px"
                color={{ color: "#273043" }}
              />
              <TextAndImageComponent
                name="osita"
                facilitator="Learnable Coordinator"
                header3="Ositadinma"
                width="120px"
                height="120px"
                color={{ color: "#273043" }}
              />
              <TextAndImageComponent
                name="idowu"
                facilitator="Scrum Proffessional"
                header3="Idowu"
                width="120px"
                height="120px"
                color={{ color: "#273043" }}
              />
            </div>
            <div className="diva" style={{ marginTop: "0px" }}>
              <TextAndImageComponent
                name="ezra"
                facilitator="Ass. Learnable Coordinator"
                header3="Ezra"
                width="120px"
                height="120px"
                color={{ color: "#273043" }}
              />
              <TextAndImageComponent
                name="david"
                facilitator="Ass. Learnable Coordinator"
                header3="David"
                width="120px"
                height="120px"
                color={{ color: "#273043" }}
              />
              <TextAndImageComponent
                name="ana1"
                facilitator="Software Lead"
                header3="Emmanuel"
                width="120px"
                height="120px"
                color={{ color: "#273043" }}
              />
            </div>
          </div>
          <div>
            <Text
              para="We have designed other learning activities that aren’t classroom-based. You will learn how to be a better person, how to have good conversations, how to work better with people and most importantly, how to lead other people. Hey! We’ll even teach you how to run a business during the Learnable Business Sessions."
              header="Learning doesn’t always have to be in the classroom"
              hstyle={{ color: "#000000" }}
              width={{ width: "28.1rem" }}
            />
          </div>
        </div>

        <div className="diva" style={{ alignItems: "center" }}>
          <Text
            para="As part of our calculated efforts to contribute to the emerging knowledge and skills driven economy of Nigeria, Learnable is a 6-month product development training program with an emphasis on software programming and product design. It is for outstanding young individuals who are passionate about building a career in the software industry. 

               We primarily educate and groom software developers and designers, preparing them for the industry. "
            header="We Make People Great"
            hstyle={{ color: "#000000" }}
            width={{ width: "25rem" }}
          />

          <div className="grid">
            <div className="img-contain">
              {" "}
              <img
                src="/images/rectanglea17.png"
                alt="waiting"
                style={{ width: "6.25rem", height: "6.25rem" }}
              />{" "}
            </div>
            <div className="img-contain">
              {" "}
              <img
                src="/images/rectanglea29.png"
                alt="waiting"
                style={{ width: "6.25rem", height: "6.25rem" }}
              />{" "}
            </div>
            <div className="img-contain">
              {" "}
              <img
                src="/images/rectanglea25.png"
                alt="waiting"
                style={{ width: "6.25rem", height: "6.25rem" }}
              />{" "}
            </div>
            <div className="img-contain">
              {" "}
              <img
                src="/images/rectanglea21.png"
                alt="waiting"
                style={{ width: "6.25rem", height: "6.25rem" }}
              />{" "}
            </div>
            <div className="img-contain">
              {" "}
              <img
                src="/images/rectanglea20.png"
                alt="waiting"
                style={{ width: "6.25rem", height: "6.25rem" }}
              />{" "}
            </div>
            <div className="img-contain">
              {" "}
              <img
                src="/images/rectanglea31.png"
                alt="waiting"
                style={{ width: "6.25rem", height: "6.25rem" }}
              />{" "}
            </div>
            <div className="img-contain">
              {" "}
              <img
                src="/images/rectanglea27.png"
                alt="waiting"
                style={{ width: "6.25rem", height: "6.25rem" }}
              />{" "}
            </div>
            <div className="img-contain">
              {" "}
              <img
                src="/images/rectanglea23.png"
                alt="waiting"
                style={{ width: "6.25rem", height: "6.25rem" }}
              />{" "}
            </div>
            <div className="img-contain">
              {" "}
              <img
                src="/images/rectanglea18.png"
                alt="waiting"
                style={{ width: "6.25rem", height: "6.25rem" }}
              />{" "}
            </div>
            <div className="img-contain">
              {" "}
              <img
                src="/images/rectanglea30.png"
                alt="waiting"
                style={{ width: "6.25rem", height: "6.25rem" }}
              />{" "}
            </div>
            <div className="img-contain">
              {" "}
              <img
                src="/images/rectanglea26.png"
                alt="waiting"
                style={{ width: "6.25rem", height: "6.25rem" }}
              />{" "}
            </div>
            <div className="img-contain">
              {" "}
              <img
                src="/images/rectanglea22.png"
                alt="waiting"
                style={{ width: "6.25rem", height: "6.25rem" }}
              />{" "}
            </div>
            <div className="img-contain">
              {" "}
              <img
                src="/images/rectanglea19.png"
                alt="waiting"
                style={{ width: "6.25rem", height: "6.25rem" }}
              />{" "}
            </div>
            <div className="img-contain">
              {" "}
              <img
                src="/images/rectanglea32.png"
                alt="waiting"
                style={{ width: "6.25rem", height: "6.25rem" }}
              />{" "}
            </div>
            <div className="img-contain">
              {" "}
              <img
                src="/images/rectanglea28.png"
                alt="waiting"
                style={{ width: "6.25rem", height: "6.25rem" }}
              />{" "}
            </div>
            <div className="img-contain">
              {" "}
              <img
                src="/images/rectanglea24.png"
                alt="waiting"
                style={{ width: "6.25rem", height: "6.25rem" }}
              />{" "}
            </div>
          </div>
        </div>

        <div className="diva" style={{ background: "#F5772F", color: "white" }}>
          <div>
            <Image name="photo6" />
          </div>
          <Text
            para="Our culture are the unspoken things that make us who we are at Genesys. To become one of us, you need to be like the rest of us. We believe that excellence is a culture, and we are committed to a philosophy of consistent improvement in everything we do. We are passionate, candid and we trust in the power of collaboration."
            header="Our Culture"
            hstyle={{ color: "#ffffff" }}
            width={{ width: "25rem" }}
          />
        </div>

        <div className="diva" style={{ background: "#17255A", color: "white" }}>
          <div>
            <Image name="photo6" />
          </div>
          <div>
            <Text
              para="Before you’re done with Learnable, you will apply everything you’ve learned. You’ll be part of a team made up of 2 designers and 4 developers. You’ll get to work alongside the Genesys team on projects and we’ll teach you how “the sauce” is made. By combining technology, design, and great ideas, your team will have the unique opportunity to collaborate with the Genesys team to bring your own concept to life, from the first pen sketches to the final functioning product. You’ll then get to show off your special project to everyone."
              header="Apply Your Knowledge"
              hstyle={{ color: "#ffffff" }}
              width={{ width: "25rem" }}
            />
            <h6 style={{ color: "#03CEA4" }}>GET STARTED</h6>
          </div>
        </div>

        <div style={{ color: "#273043" }}>
          <h1 style={{ margin: "4rem 12rem" }}>FAQ</h1>

          <FagText text="How many people can attend a course?" />

          <FagText text="What’s the learning experience like?" />
          <FagText text="Who are the coaches?" />
          <FagText text="How far in advance should we book?" />
          <FagText text="Can you customize your courses?" />

          <div style={{ background: "#eeeeee" }}>
            <h1
              style={{
                padding: "3rem",
                margin: "3rem 3rem 3rem 7rem",
                color: "#273043",
              }}
            >
              Journal
            </h1>
            <p
              style={{
                padding: "3rem",
                margin: "0rem 0rem 0rem 7rem",
                color: "#03CEA4",
                fontSize: "0.7rem",
              }}
            >
              VIEW ALL
            </p>

            <div className="diva" style={{ marginTop: "0px" }}>
              <TextAndImageComponent
                name="image23"
                facilitator="David Mong, Apr 9, 2020"
                header3="Learn Design Thinking like a Pro and Build Projects that People will care about
"
                paragraph="INSPIRATION"
                width="200px"
                height="200px"
                color={{ color: "#273043" }}
              />

              <TextAndImageComponent
                name="image24"
                facilitator="David Mong, Apr 9, 2020"
                header3="Learn Design Thinking like a Pro and Build Projects that People will care about
"
                paragraph="INSPIRATION"
                width="200px"
                height="200px"
                color={{ color: "#273043" }}
              />

              <TextAndImageComponent
                name="image25"
                facilitator="David Mong, Apr 9, 2020"
                header3="Learn Design Thinking like a Pro and Build Projects that People will care about
"
                paragraph="INSPIRATION"
                width="200px"
                height="200px"
                color={{ color: "#273043" }}
              />

              <TextAndImageComponent
                name="image26"
                facilitator="Theresa Brazen, Apr 9, 2020"
                header3="Learn Design Thinking like a Pro and Build Projects that People will care about
"
                paragraph="INSPIRATION"
                width="200px"
                height="200px"
                color={{ color: "#273043" }}
              />
            </div>
          </div>
        </div>
        <div className="diva">
          <div className="diva-logo">
            {" "}
            <h4>Mentioned in</h4>
          </div>
          <div className="diva-logo">
            <img src="/images/image27.png" alt="logo" />
          </div>
          <div className="diva-logo">
            {" "}
            <img src="/images/image28.png" alt="logo" />
          </div>
          <div className="diva-logo">
            {" "}
            <img src="/images/image29.png" alt="logo" />
          </div>
          <div className="diva-logo">
            {" "}
            <img src="/images/image30.png" alt="logo" />
          </div>
        </div>

        <Update bg={{ background: "orange" }} />

        <Footer />
      </div>
    </div>
  );
};

export default Home;
