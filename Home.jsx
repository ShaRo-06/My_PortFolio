import React, { useEffect, useRef, useState } from "react";
import Typed from "typed.js";
import Resume from "../../assets/resume/Resume.pdf";
import profileImg from "../../assets/images/HomeImage.jpg";
import "./Home.css";

const Home = () => {
  const typedRef = useRef(null);
  const [show, setShow] = useState(false);

  useEffect(() => {
    const typed = new Typed(typedRef.current, {
      strings: [
        "Front End Developer",
        "DSA Problem Solver",
        "Teach Enthusiast",
        "Building Real-World Projects",
        "Machine Learning Engineer"
      ],
      typeSpeed: 60,
      backSpeed: 40,
      loop: true,
    });

    setTimeout(() => {
      setShow(true);
    }, 200);

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <section className="hero-section" id="home">
      <div className="home-wrapper" >
        <div className="home-container">

          <div className="home-left">
            <div className="home-left-context">
              <h2 className={show ? "show-on-load home-heading" : "home-heading"}>
                HI!
              </h2>

              <h1 className={show ? "show-on-load home-heading" : "home-heading"}>
                I'm SHAUNJAY ROSHAN T
              </h1>

              <h3 className={show ? "show-on-load home-heading" : "home-heading"}>
                I’m <span ref={typedRef} className="typed-text"></span>
              </h3>
            </div>

            <div className="home-buttons">
              <a className="anchor-1" href={Resume} target="_blank" rel="noreferrer">
                Download Resume
              </a>

              <a className="anchor-2" href="#contact">
                Get a free quote
              </a>
            </div>

            
            <div className="icon-container">
              <a href="https://in.linkedin.com/in/shaunjay-roshan-t-7147aa3a9" target="_blank" rel="noreferrer">
                <i className="fab fa-linkedin"></i>
              </a>

              <a href="https://github.com/ShaRo-06" target="_blank" rel="noreferrer">
                <i className="fab fa-github"></i>
              </a>

              <a href="mailto:roshantshaunjay@gmail.com">
                <i className="fas fa-envelope"></i>
              </a>
            </div>
          </div>

          <div className="home-right">
            <img
              src={profileImg}
              alt="SHAUNJAY ROSHAN T"
              className={show ? "home-img show-on-load" : "home-img"}
            />
          </div>

        </div>
      </div>
    </section>
    
  );
};

export default Home;