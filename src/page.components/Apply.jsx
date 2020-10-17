import React from 'react';
import Footer from "../Components/Footer";
import Text from "../Components/Text.component";
import Image from "../Components/Image.Component";
import Update from "../Components/Update";
import '../ComponentCSS/Apply.css'

const Apply = () => {
	return (
		<div>
			
			<div className="apply-container">
				<div className="diva">
					<Text

						header="Apply Your Knowledge"
						hstyle={{ color: "#17255A", fontSize: '3rem' }}
						width={{ width: "400px" }}
					/>
					<div >
						<Image name="rectangle42"  />
					</div>
				</div>
				<div style={{marginLeft:'3rem' , marginBottom:'2rem'}} >
					<Text
						para="Before you’re done with Learnable, you will apply everything you’ve learned. You’ll be part of a team made up of 2 designers and 4 developers. You’ll get to work alongside the Genesys team on projects and we’ll teach you how “the sauce” is made. By combining technology, design, and great ideas, your team will have the unique opportunity to collaborate with the Genesys team to bring your own concept to life, from the first pen sketches to the final functioning product. You’ll then get to show off your special project to everyone."

						hstyle={{ color: "#000000" }}
						width={{ width: "500px" }}
					/>
				</div>
				<div className='code-image'>
					<img src="/images/photo13.png" alt=""/>
					<div style={{ marginTop: '30px' }} >
						<Text
							para="We are very deliberate with our selection process. We are on a quest to find amazing people who are passionate about learning and growing their careers in the software industry. To this end, we have designed our selection process to help us get such people."
							header="How To Get In
"
							hstyle={{ color: "#000000" }}
							width={{ width: "500px" }}
						/>
						<Text
							para="Introduce yourself to us by filling out our application form. When you’re done filling out the form, proceed to download our prep curriculum that contains everything you need to prepare for the physical and technical assessment."
							header="Online Application"
							hstyle={{ color: "#000000" }}
							width={{ width: "500px" }}
						/>
						<Text
							para="We will reach out to you to discuss possible opportunities, ascertain where you fit in with us, and answer any questions you might have about the program. It’s supposed to be a chat, getting nervous defeats the aim."
							header="Phone Call Interviews"
							hstyle={{ color: "#000000" }}
							width={{ width: "500px" }}
						/>
						<Text
							para="At this stage, we’ll get to meet you in person for the first time. You’ll be invited to the hub for a physical assessment that includes a technical assessment, a psychometric test and a face-to-face chat with our team."
							header="Final Assessment"
							hstyle={{ color: "#000000" }}
							width={{ width: "500px" }}
						/>
						<Text
							para="If you make it to this stage, you can pack your bags and head down to the beautiful city of Enugu. We will join you on your journey to build that career of your dreams and provide all the help, support and love that we can muster along the way!"
							header="Get In"
							hstyle={{ color: "#000000" }}
							width={{ width: "500px" }}
						/>
						</div>

				</div>




              <Update bg= {{background:'orange'}}/>
              <Footer/>
			</div>
		</div>
	);
}

export default Apply;
