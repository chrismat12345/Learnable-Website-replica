import React from "react";
import Footer from "../Components/Footer";
import Text from "../Components/Text.component";
import Image from "../Components/Image.Component";
import Update from "../Components/Update";
import "../ComponentCSS/Journal.css";
import TextAndImageComponent from '../Components/TextAndImageComponent'

const Journal = () => {
  return (
    <div>
      <div className="journal-container">
        <div style={{ background: "lightgrey" }}>
          <div className="diva" style={{ margin: "2rem 7rem", height: "9rem" }}>
            <h1 style={{ margin: "4rem"}} >Journal</h1>
					  <div ><p style={{ margin: "4rem", border: '1px solid black', padding:'.5rem 1.5rem' }}>Categories</p></div>
          </div>
          <p
            style={{
              padding: "3rem",
              fontSize: ".75rem",
              textAlign: "right",
              marginRight: "19rem",
              color: "#03CEA4",
            }}
          >
            INSPIRATION
          </p>
        </div>
        <div className="diva">
          <div style={{ marginTop: "-11rem" }}>
            <Image name="photo13" />
          </div>
          <div style={{ marginTop: "-6rem" }}>
            <Text
              para="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit sapien arcu vitae orci at molestie. Pharetra quisque donec accumsan rhoncus risus. Urna magna turpis duis imperdiet elit, et, hendrerit viverra risus. Vulputate euismod commodo donec tincidunt et, aliquam. Eget scelerisque netus habitant dui porttitor cursus. Ipsum sem ut tortor ac ullamcorper. Lacus. "
              header="Learn Design Thinking like a Pro and Build Projects that People will care about"
						  hstyle={{ color: "#17255A" }}
              width={{ width: "450px" }}
            />
          </div>
        </div>

<div>
	
			  <div className="diva" style={{ marginTop: '0px' }}>
				  <TextAndImageComponent name='image23' facilitator='David Mong, Apr 9, 2020' header3='Learn Design Thinking like a Pro and Build Projects that People will care about
' paragraph='INSPIRATION' color={{color:'#273043'}} />
			 
				  <TextAndImageComponent name='image24' facilitator='David Mong, Apr 9, 2020' header3='Learn Design Thinking like a Pro and Build Projects that People will care about
' paragraph='INSPIRATION' color={{color:'#273043'}} />
		
				  <TextAndImageComponent name='image25' facilitator='David Mong, Apr 9, 2020' header3='Learn Design Thinking like a Pro and Build Projects that People will care about
' paragraph='INSPIRATION' color={{color:'#273043'}} />
			 >
				  <TextAndImageComponent name='image26' facilitator='Theresa Brazen, Apr 9, 2020' header3='Learn Design Thinking like a Pro and Build Projects that People will care about
' paragraph='INSPIRATION' color={{color:'#273043'}} />
			 </div>

			 <div className="diva" style={{marginTop:'0px'}}>
				  <TextAndImageComponent name='image23' facilitator='David Mong, Apr 9, 2020' header3='Learn Design Thinking like a Pro and Build Projects that People will care about
' paragraph='INSPIRATION' color={{color:'#273043'}} />
			 
				  <TextAndImageComponent name='image24' facilitator='David Mong, Apr 9, 2020' header3='Learn Design Thinking like a Pro and Build Projects that People will care about
' paragraph='INSPIRATION' color={{color:'#273043'}} />
		
				  <TextAndImageComponent name='image25' facilitator='David Mong, Apr 9, 2020' header3='Learn Design Thinking like a Pro and Build Projects that People will care about
' paragraph='INSPIRATION' color={{color:'#273043'}} />
			 >
				  <TextAndImageComponent name='image26' facilitator='Theresa Brazen, Apr 9, 2020' header3='Learn Design Thinking like a Pro and Build Projects that People will care about
' paragraph='INSPIRATION' color={{color:'#273043'}} />
			 </div>
				  <div style={{ textAlign: 'center', display :'flex',  justifyContent: 'center'
				  }}>
					  <h6 style={{ border: '1px solid black', color:'#17255A',padding:'.5rem' }} >LOAD MORE</h6>
			</div>
</div>

        <Update bg={{ background: "orange" }} />
        <Footer />
      </div>
    </div>
  );
};

export default Journal;
