import React from "react";
import Home from "./Home.";
import About from "./About";
import Contact from "./Contact";
import Services from "./Services";
import { Switch, Route, Redirect } from "react-router-dom";
import Navbar from "./Navbar";
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from "./Footer";

const App =() => {
  return(<>
< Navbar/>
<Switch>
    < Route exact path="/" component={Home}/>
    < Route exact path="/About" component={About}/>
    < Route exact path="/Services" component={Services}/>
    < Route exact path="/Contact" component={Contact}/>
    <Redirect to="/" />
</Switch>
<Footer/>
</>
);
};
export default App;