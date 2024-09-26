import React, { useEffect, useRef, useState } from "react";
import "./F.css";
import { RiBarChartHorizontalLine } from "react-icons/ri";

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navref = useRef(null);
  const y = useRef(0);
  const top = useRef(0);
  const dragging = useRef(false);

  // Event listener for mouse movement
  useEffect(() => {
    const handleMouseMove = (e) => {
      // Only move if dragging is active
      if (!dragging.current) return;

      const newTop = top.current + e.clientY - y.current;

      // Get the window height and the circular menu height to apply boundary checks
      const windowHeight = window.innerHeight;
      const navHeight = navref.current.offsetHeight;

      // Ensure the newTop doesn't go above the screen or too far below
      const minTop = 20; // Prevent moving off-screen above
      const maxTop = windowHeight - navHeight -20; // Prevent moving off-screen below

      // Clamp the newTop value within the boundaries
      const clampedTop = Math.max(minTop, Math.min(newTop, maxTop));
console.log(clampedTop)
      navref.current.style.top = `${clampedTop}px`;
    };

    const handleMouseUp = () => {
      dragging.current = false; // Stop dragging when mouse is released
    };

    // Attach the listeners dynamically
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseup", handleMouseUp);

    // Clean up the event listeners on component unmount
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
    };
  }, []);

  const handleMouseDown = (e) => {
    dragging.current = true; // Start dragging
    y.current = e.clientY; // Store the initial Y position
    top.current = navref.current.offsetTop; // Store the current position of the element
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen); // Toggle menu
  };

  return (
    <>
      <div className="circularMenu" ref={navref} onMouseDown={handleMouseDown}>
        <button onClick={toggleMenu} className="circle-button">
        { !isMenuOpen ?  <RiBarChartHorizontalLine
            className="navicon"
            style={{ fontSize: "20px" }}
          />: <div className="cancelicon"
          style={{ fontSize: "20px" ,fontWeight:'bolder' }}> X </div>}  
        </button>

        {isMenuOpen && (
          <>
            <div
              className="menu-item"
              style={{
                transform: "rotate(1deg) translate(-18px, -60px) rotate(-1deg)",
              }}
            >
              home
            </div>
            <div
              className="menu-item"
              style={{
                transform:
                  "rotate(-30deg) translate(-40px, 39px) rotate(30deg)",
              }}
            >
              Projects
            </div>

            <div
              className="menu-item"
              style={{
                transform:
                  "rotate(-17deg) translate(-110px, -2px) rotate(16deg)",
              }}
            >
              Skills
            </div>
            <div
              className="menu-item"
              style={{
                transform: "rotate(0deg) translate(-130px, -2px) rotate(0deg)",
              }}
            >
              Contact
            </div>
            <div
              className="menu-item"
              style={{
                transform:
                  "rotate(-16deg) translate(-90px, -62px) rotate(16deg)",
              }}
            >
              Services
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default NavBar;
