import "./App.css";
import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Steps from "./components/Steps";
import Header from "./components/Header";
import Footer from "./components/Footer";
import About from "./components/About";
import Contact from "./components/Contact";

const App = () => (
  <BrowserRouter basename="/">
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/" render={() => <Steps title={""} />} />
        <Route path="/about" render={() => <About title={"About"} />} />
        <Route path="/contact" render={() => <Contact title={"Contact"} />} />
      </Switch>
      <Footer />
    </div>
  </BrowserRouter>
);

export default App;
