import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
    return(
        <>
          <div className="container-fluid nv_bg">
            <div className="row">
            <div className="col-10 mx-auto">
               
            <nav className=" navbar navbar-expand-lg navbar-light">
            <div className="container-fluid">
            <NavLink activeClassName="menu_active" className="navbar-brand" to="/Home">   AAA Technical</NavLink>
           <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
          
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ml-auto mb-2 mb-lg-0">
            
            <li className="nav-item">
              <span className="icon"><ion-icon name="home-outline"></ion-icon></span>
             <NavLink activeClassName="menu_active" className="nav-link active" aria-current="page" to="/Home">Home</NavLink>
            </li>
          

            < li className="nav-item">
            <NavLink activeClassName="menu_active" className="nav-link" to ="/Services">Services</NavLink>
            </li>

            <li className="nav-item">
            <NavLink activeClassName="menu_active" className="nav-link" to ="About">About</NavLink>
            </li>

            <li className="nav-item">
            <NavLink activeClassName="menu_active" className="nav-link" to="Contact">Contact</NavLink>
            </li>
           </ul>

          </div>
          <script type="module" src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js"></script>
<script nomodule src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js"></script>
         </div>
        </nav>
      </div>
    </div>

 </div>
 
        </>
    );
};
export default Navbar;