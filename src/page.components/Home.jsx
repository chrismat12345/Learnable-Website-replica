import React from "react";
import "../ComponentCSS/Home.css";
import rectangle4 from '../images/Rectangle4.png'

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

      <div className='home-learn-contanier'>
			  <div className="home-learn">
				  <div>
					  <h1>Everything is Learnable</h1>
					  <p>
						  Learnable is the perfect product development internship program
						  brought to you by Genesys.
          </p>
				  </div>
				  <div className='devpro'>
					  <div className='home-shape1'>
						  <h4>Development</h4>
						  <p> what to expect</p>
					  </div>
					  <div className='home-shape'>
						  <h4>product Design</h4>
						  <p>what to expect</p>
					  </div>
			          
				  </div>
				  <div className='image1'>
					  <img src={rectangle4} alt="" />

				  </div>
			  </div>
	  </div>
    </div>
  );
};

export default Home;
