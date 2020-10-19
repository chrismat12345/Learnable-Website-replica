import React from "react";
import Footer from "../Components/Footer";
import Text from "../Components/Text.component";

import Update from "../Components/Update";
import '../ComponentCSS/Faq.css'
import FaqText from '../Components/FagText'
import SecNav from './secNav'

const Faq = () => {
  return (
    <div>
      <div className='faq-container'>
			  <SecNav />
			  <div className="diva" style={{justifyContent:'center',alignItems:'center'}} >
				  <Text
					  header="FAQ"
					  hstyle={{ color: "#17255A", fontSize: "3rem" }}
					  width={{ width: "25rem" }}
				  />
				  <div >
					  <img src="/images/photo12.png" alt="hand"/>
				  </div>
				  
			  </div>


			  <FaqText text='How many people can attend a course? ' />
			  <FaqText text=' What’s the learning experience like?' />
			  <FaqText text=' Who are the coaches?' />
			  <FaqText text=' How far in advance should we book?' />
			  <FaqText text=' Can you customize your courses?' />
			  <FaqText text=' Can you customize your courses?' />
			  <FaqText text=' Can you customize your courses?' />
			  <FaqText text=' Can you customize your courses?' />
			  <FaqText text=' Can you customize your courses?' />
			  <FaqText text=' Can you customize your courses?' />
			  <FaqText text=' Can you customize your courses?' />
			  <FaqText text=' Can you customize your courses?' />
			  <FaqText text=' Can you customize your courses?' />
			  <FaqText text=' Can you customize your courses?' />
			  <FaqText text=' Can you customize your courses?' />
			  <FaqText text=' Can you customize your courses?' />
			  
			







        <Update bg={{ background: "orange" }} />

        <Footer />
      </div>
    </div>
  );
};

export default Faq;
