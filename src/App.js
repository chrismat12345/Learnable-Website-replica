import React, { Component } from "react";
import MainNav from "./page.components/MainNav";
import Home from "./page.components/Home";


import Landing from "./page.components/Landing";


class App extends Component {
  render() {
    return (
      <div>
		  <MainNav/>
       

       <Home />
       *
	<Landing/>
      </div>
    );
  }
}

export default App;
