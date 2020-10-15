import React, { Component } from "react";
import MainNav from "./page.components/MainNav";
import Home from "./page.components/Home";

import Footer from "./Components/Footer";


class App extends Component {
  render() {
    return (
      <div>
        <MainNav />

        <Home />
       
		<Footer/>
      </div>
    );
  }
}

export default App;
