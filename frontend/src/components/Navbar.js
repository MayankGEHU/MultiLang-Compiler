import React, { useEffect, useState } from 'react';
import './Navbar.css';
// import { IoMoon } from 'react-icons/io5';
import Logo from "../assets/logo.png"

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  // const navigate = useNavigate();

  // const handleSignUp = () => {
  //   navigate("/signup");
  // };


  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="navbar-outer">
      <div className={`navbar-wrapper ${scrolled ? 'scrolled' : ''}`}>
        <nav className="navbar">
          <div className="navbar-logo">
            {/* <img src="/your-logo.png" alt="Logo" className="logo-img" /> */}
           <h3> Multi Lang Compiler</h3>
          </div>

          <ul className="navbar-links">
            <li>In Developement Phase</li>
             {/*
            <li>Skills</li>
            <li>Projects</li>
            <li>Leetcode</li>
            <li>Experience</li>
            <li>Certifications</li>
            <li>Education</li> */}
          </ul>

          <div className="navbar-right">
            {/* <button className="theme-toggle">
              <IoMoon size={20} />
            </button> */}
            <button className="request-btn">
             <img 
             width= "40px"
             src={Logo} alt=''/> 
            </button>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
