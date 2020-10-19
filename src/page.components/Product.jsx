import React from "react";
import "../ComponentCSS/Product.css";
import Footer from "../Components/Footer";
import Text from "../Components/Text.component";
import Image from "../Components/Image.Component";
import Update from "../Components/Update";
import SecNav from './secNav'

const Product = () => {
  return (
    <div>
      <div className="product-container">
         <SecNav/>
        <div>
          <div className="diva">
            <Text
              header="The Learnable Product Designer"
              hstyle={{ color: "#17255A", fontSize: "3rem" }}
              width={{ width: "25rem" }}
            />
            <div style={{ background: "#F5772F", borderRadius: "50%" }}>
              <Image name="cutout1" radius={{ borderRadius: "50%" }} />
            </div>
          </div>
          <div style={{ marginLeft: "3rem" }}>
            <Text
              para="At Genesys, you'll be exposed to every discipline in our creative process – UX, UI, interaction design, and copywriting. You’ll be part of a dynamic team that's made up of like-minded, talented people. You'll work hard with them to create things that will amaze everyone everywhere.



 "
              hstyle={{ color: "#000000" }}
              width={{ width: "32rem" }}
            />
            <Text
              para="In addition to your team projects, you’ll be lending a hand to the creative team. Participating in brainstorm sessions, building winning pitches, preparing assets, and design scriptures for productions, you'll be in the thick of it all. "
              hstyle={{ color: "#000000" }}
              width={{ width: "32rem" }}
            />
            <Text
              para="Oh, and you’ll make amazing friends while you're at it! "
              hstyle={{ color: "#000000" }}
              width={{ width: "32rem" }}
            />
            <Text
              header="“The greats weren’t great because at birth they could paint. The greats were great because they painted a lot.” - Macklemore"
              hstyle={{ color: "#F5772F" }}
              width={{ width: "32remx" }}
            />
          </div>
        </div>
        <div className="code-image">
          <img src="/images/photo1.png" alt=" coding" width="60%" />

          <div style={{ marginTop: "30px" }}>
            <Text
              para="Play nice with other people."
              header="We expect you to…"
              hstyle={{ color: "#000000" }}
              width={{ width: "32rem" }}
            />
            <Text
              para="

Be an actively engaging person. That means you are present, motivated, and social.

"
              hstyle={{ color: "#000000" }}
              width={{ width: "32rem" }}
            />
            <Text
              para="



Understand how to use the Figma design software




 
"
              hstyle={{ color: "#000000" }}
              width={{ width: "32rem" }}
            />
            <Text
              para="

						  Be able to create initial design layouts with confidence and know-how to effectively communicate concepts to everyone on your team.

"
              hstyle={{ color: "#000000" }}
              width={{ width: "32rem" }}
            />
            <Text
              para="

						  Have a basic understanding of design principles and theories
						  To have creative courage. This is a tough industry, only the brave and sturdy remain.
"
              hstyle={{ color: "#000000" }}
              width={{ width: "32rem" }}
            />
            <Text
              para="

						  Be prepared to defend your decisions and take constructive criticism."
              hstyle={{ color: "#000000" }}
              width={{ width: "32rem" }}
            />
            <Text
              para="To us, beauty without substance has no value. At Genesys, design thinking and execution are equally important, so we’re constantly on the lookout for not only the how but also the why."
              hstyle={{ color: "#F5772F" }}
              width={{ width: "32rem" }}
            />
          </div>
        </div>
        <Update bg={{ background: "orange" }} />

        <Footer />
      </div>
    </div>
  );
};

export default Product;
