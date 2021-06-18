import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ScrollToTop from "./ScrollToTop";
import Homepage from "./Components/Homepage/Homepage";
import Shop from "./Components/Shop/Shop";
import Contact from "./Components/Contact/Contact";
import Header from "./Components/Header/Header";
// import AboutUs from "./Components/AboutUs/AboutUs";

const App = () => {
  return (
    <div className="app">
      <Router>
        <Header />
        <ScrollToTop>
          <Switch>
            <Route exact path="/">
              <Homepage />
            </Route>
            <Route exact path="/shop">
              <Shop />
            </Route>
            <Route exact path="/contact">
              <Contact />
            </Route>
            {/* <Route exact path="/aboutus">
              <AboutUs />
            </Route> */}
          </Switch>
        </ScrollToTop>
      </Router>
    </div>
  );
};

export default App;
