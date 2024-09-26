import React, { useState } from "react";
import "./NavBar2.css";
import { RiBarChartHorizontalLine } from "react-icons/ri";
import 'bootstrap/dist/css/bootstrap.min.css'; // Make sure Bootstrap CSS is included

const NavBar2 = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const properties = ["Projects", "Home", "Contact", "Service", "Skill"];


  
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <div className="nav-bar ">
        <button onClick={toggleMenu} className="circle-button">
        
        { !isMenuOpen ?  <RiBarChartHorizontalLine
            className="navicon"
            style={{ fontSize: "20px" }}
          />: <div className="cancelicon"
          style={{ fontSize: "15px" ,fontWeight:'bolder' }}> X </div>}  
        </button>
      </div>
      {isMenuOpen ? (
        <div className="properties d-flex flex-column justify-content-center align-items-center p-1">
          <ul className="list-unstyled ">
            {properties.map((v, i) => (
              <li key={i} className="py-1 rounded p-1 m-2">{v}</li>
            ))}
          </ul>
        </div>
      ) : (
        ""
      )}
    </>
  );
};

export default NavBar2;
