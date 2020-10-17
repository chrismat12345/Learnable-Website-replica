import React from "react";
import "../ComponentCSS/Software.css";
import Footer from "../Components/Footer";
import Text from '../Components/Text.component'
import Image from '../Components/Image.Component'
import Update from '../Components/Update'

const Software = () => {
  return (
    <div>
      <div className='software-container'>
<div  >
	
         <div className="diva">
          <Text
            
						  header="The Learnable Software Developer"
						  hstyle={{ color: "#17255A", fontSize:'3rem' }}
            width={{ width: "400px" }}
          />
          <div style={{ background: "#03CEA4", borderRadius: "50%" }}>
            <Image name="cutout1" radius={{ borderRadius: "50%" }} />
          </div>
        </div>
				  <div style={{ marginLeft: '3rem' }}>
					  <Text
						  para="Creativity means a lot to us. So we look for people who can think both logistically and artistically, and who know that limits are made to be pushed. We value skill and aptitude, but we honor those who care about working with their team to add the Genesys flavour to every project. "

						  hstyle={{ color: "#000000" }}
						  width={{ width: "500px" }}
					  />
					  <Text
						  para="As a developer, being part of the team exposes you to a range of diverse, like-minded talented people who are sure to make the experience fun for you. You’ll get a shot at building amazing things, developing yourself, learning on the job, while exchanging healthy jokes and having random hangouts once in a while. "

						  hstyle={{ color: "#000000" }}
						  width={{ width: "500px" }}
					  />
					  <Text
						  header="“You are someone people can count on. Every day, you come in ready to make great things happen.”"
						  hstyle={{ color: "#03CEA4" }}
						  width={{ width: "500px" }}
					  />
		</div>

</div>
			  <div className='code-image' >
				  <img src="/images/photo3.png" alt=" coding" width='60%'  />

<div style={{marginTop:'30px'}} >
	<Text
            para="Play nice with other people."
					  header="We expect you to…"
            hstyle={{ color: "#000000" }}
            width={{ width: "500px" }}
          />
		  <Text
            para="

Be an actively engaging person. That means you are present, motivated, and social. You know how to communicate effectively with your teammates.

"
					 
            hstyle={{ color: "#000000" }}
            width={{ width: "500px" }}
          />
		  <Text
            para="

Love to code. You understand the basics of programming and object-oriented design and development.

"
					
            hstyle={{ color: "#000000" }}
            width={{ width: "500px" }}
          />
		  <Text
            para="

Have an eye for detail. Your keen observation helps you catch discrepancies and fix them quickly.

"
					 
            hstyle={{ color: "#000000" }}
            width={{ width: "500px" }}
          />
		  <Text
            para="

Be innately curious. Your love for technology is insatiable, so you’re always researching and experimenting. Learning new technical skills while on the job is something you look forward to.
"
					 
            hstyle={{ color: "#000000" }}
            width={{ width: "500px" }}
          />
		  <Text
            para="

Appreciate good design. You want to make something that doesn't just work flawlessly but looks amazing."
					
            hstyle={{ color: "#000000" }}
            width={{ width: "500px" }}
          />
</div>  
			  </div>
<Update bg={{background:'orange'}} />













        <Footer />
      </div>
    </div>
  );
};

export default Software;
