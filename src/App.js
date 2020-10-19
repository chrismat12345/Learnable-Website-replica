import React, { Component } from "react";
import MainNav from "./page.components/MainNav";
import Home from "./page.components/Home";
import Software from "./page.components/Software";
import Product from "./page.components/Product";
import Faq from "./page.components/Faq";
import Apply from "./page.components/Apply";
import './App.css'
import { BrowserRouter, Route } from "react-router-dom";

import Landing from "./page.components/Landing";
import Journal from "./page.components/Journal";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <MainNav />
         
          <Route exact path='/Landing' component={Landing} />
           
{/* 
          <Route exact path='Landing' render={props => (
            <React.Fragment>
              <Landing/>
            </React.Fragment>
          )} component={Landing} /> */}
          <Route path="/Home" component={Home} />
          <Route path="/Software" component={Software} />
         
          <Route path="/Product" component={Product} />

          <Route path="/Apply" component={Apply} />
          <Route path="/Journal" component={Journal} />
          <Route path="/Faq" component={Faq} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
