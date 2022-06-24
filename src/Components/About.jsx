import React from "react";
import Sim from "./Sim";
import web1 from "../image1.png";

 const About =() => {

return(<>
<Sim name="Welcome to About page" 
    imgsrc={web1} 
    visit="/Contact" 
    btname="Contact Us" />
</>
);
};
export default About;