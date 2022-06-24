import React from "react";

import web from "../image.png";
import Sim from "./Sim";
 const Home =() => {

return(<>
<Sim name="Grow Your Business With" 
    imgsrc={web} 
    visit="/Services" 
    btname="Get Started" />
</>
);
};
export default Home;