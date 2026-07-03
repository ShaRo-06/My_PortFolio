import React, { useEffect, useState, useRef } from "react";
import "./Navbar.css";
import profileImg from "../../assets/images/ProfileLogo.jpg";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState("home");

  const navRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // 👇 Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navRef.current && !navRef.current.contains(event.target)) {
        setMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <nav ref={navRef} className={`navbar ${scrolled ? "scrolled" : ""}`}>
      <div className="nav-container">

        <a href="#home" className="logo-wrapper">
          <img src={profileImg} className="logo" alt="SHAUNJAY ROSHAN T" />
          <span className="logo-name">SHAUNJAY ROSHAN T</span>
        </a>

        <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
          <span></span>
          <span></span>
          <span></span>
        </div>

        <div className={`nav-links ${menuOpen ? "open" : ""}`}>
          <a href="#home" className={active === "home" ? "active" : ""} onClick={() => setActive("home")}>Home</a>

          <a href="#about" className={active === "about" ? "active" : ""} onClick={() => setActive("about")}>About</a>

          <a href="#skills" className={active === "skills" ? "active" : ""} onClick={() => setActive("skills")}>Skills</a>

          <a href="#projects" className={active === "projects" ? "active" : ""} onClick={() => setActive("projects")}>Projects</a>

          <a href="#resume" className={active === "resume" ? "active" : ""} onClick={() => setActive("resume")}>Resume</a>

          <a href="#contact" className={active === "contact" ? "active" : ""} onClick={() => setActive("contact")}>Contact</a>
        </div>

      </div>
    </nav>
  );
};

export default Navbar;