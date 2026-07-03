import React from "react";
import "./About.css";
import profileImg from "../../assets/images/UserProfile.jpg";

const About = () => {
  return (
    <section className="about-wrapper" id="about">
      <h1 className="about-heading">About Me</h1>

      <div className="about-container">
        <div className="about-bg-shape">
          <div className="about-card">

            <div className="about-image">
              <img src={profileImg} alt="SHAUNJAY ROSHAN T" />
            </div>

            <div className="about-content">
              <p>
                Hello! I'm Shaunjay Roshan T, a passionate Data Engineering professional with experience in data cleaning, preprocessing, transformation, and managing both structured and unstructured data. My background in data analytics, full-stack development, and data management enables me to design scalable data pipelines, improve data quality, and deliver efficient, data-driven solutions for complex business challenges. I enjoy working with modern technologies to build reliable systems that transform raw data into meaningful insights, while continuously expanding my expertise in data engineering, analytics, and emerging technologies.

              </p>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default About;