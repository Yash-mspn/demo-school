import React, { useState } from "react";
import { Link } from "react-router-dom";
const Navbar = () => {
  const[show,setShow] = useState(false);

  return (
    <>
    <div className="menu-bar">
    <div class="menu-bar-row" onClick={()=>setShow(!show)}>
        <ul>
          <li><Link to="/">HOME</Link></li>
          <li><a href="#">ABOUT</a>
            <div class="dropdown-menu">
              <ul>
                <li><Link to="/ourSchool">ABOUT SCHOOL</Link></li>
                <li><Link to="/director">DIRECTOR MESSAGE</Link></li>
                <li><Link to="/principal">PRINCIPAL MESSAGE</Link></li>
           
              </ul>
            </div>
          </li>
          <li><a href="#">ACADEMICS</a>
            <div class="dropdown-menu">
              <ul>
                <li><Link to="/admissionprocedure">ADMISSION PROCEDURE</Link></li>
                <li><Link to="/uniformdetails">UNIFORM DETAILS</Link></li>
                <li><Link to="/latestupdate">LATEST UPDATE</Link></li>
               
              </ul>
            </div>
          </li>
          <li><Link to="/gallery">GALLERY</Link></li>
          <li><Link to="/facilities">FACILITIES</Link></li>
          <li><Link to="/contact">CONTACT US</Link></li>
        </ul>
      </div>
    </div>
    </>
  );
};

export default Navbar;
