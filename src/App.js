import React, { Component } from "react";
import MainNav from "./page.components/MainNav";
import Home from "./page.components/Home";
import Software from './page.components/Software'
import Product from "./page.components/Product";
import Faq from "./page.components/Faq";
import Apply from "./page.components/Apply";

import Landing from "./page.components/Landing";
import Journal from "./page.components/Journal";

class App extends Component {
  render() {
    return (
      <div>
		  <MainNav/>
       

       <Home />
       *
	<Landing/>
	<Software/>
	<Product/>
	<Apply/>
	<Journal/>
	<Faq/>


      </div>
    );
  }
}

export default App;
