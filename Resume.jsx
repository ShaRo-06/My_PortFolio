import React from "react";
import "./Resume.css";

const Resume = () => {
  const summary = {
    name: "SHAUNJAY ROSHAN T",
    description:
      "Aspiring Software Developer with experience in React, Node.js, REST APIs, and AI-driven applications. Built and deployed full-stack web apps with authentication, global state management, and machine learning integration.",
    location: "Chennai, Tamil Nadu",
    email: "tshaunjay@gmail.com",
  };

  const education = [
    {
      title: "B.Tech in Artificial Intelligence and Data Science",
      duration: "2023 - 2027",
      place: "Panimalar College of Engineering, Chennai",
      description:
        "Developed interest in Machine Learning, Data Analytics, and intelligent systems through academic projects.",
    },
  ];

  const experience = [
    {
      title: "YBI Foundation",
      duration: "DEC 2024",
      organization: "AI-Powered Waste Segregation Assistant Chatbot",
      points: [
        "Analyzed datasets using SQL/Python to extract actionable insights.",
        "Built dashboards in Power BI/Tableau to visualize key metrics.",
        "Cleaned and validated data to ensure accurate reporting.",
      ],
    },
    {
      title: "Main Flow Technologies Private Ltd",
      duration: "Nov 2025",
      organization: "Full Stack Python Development Internship",
       points: [
  "Developed full-stack web applications using React, Node.js, and MongoDB.",
  "Designed and implemented REST APIs for seamless front-end and back-end communication.",
  "Built responsive UI and optimized performance for better user experience.",
],
    
     
    },
  ];

  return (
    <section className="resume-section" id="resume">
      <h1 className="resume-title">Resume</h1>

      <div className="resume-container">
        <div className="resume-column">
          <Section title="Summary">
            <div className="timeline-item">
              <h3>{summary.name}</h3>
              <p>{summary.description}</p>
              <ul>
                <li>{summary.location}</li>
                <li>{summary.email}</li>
              </ul>
            </div>
          </Section>

          <Section title="Education">
            {education.map((edu, index) => (
              <div className="timeline-item" key={index}>
                <h3>{edu.title}</h3>
                <span className="duration">{edu.duration}</span>
                <p>{edu.place}</p>
                <p>{edu.description}</p>
              </div>
            ))}
          </Section>
        </div>

        <div className="resume-column">
          <Section title="Experience">
            {experience.map((exp, index) => (
              <div className="timeline-item" key={index}>
                <h3>{exp.title}</h3>
                <span className="duration">{exp.duration}</span>
                <p className="organization">{exp.organization}</p>
                <ul>
                  {exp.points.map((point, i) => (
                    <li key={i}>{point}</li>
                  ))}
                </ul>
              </div>
            ))}
          </Section>
        </div>
      </div>
    </section>
  );
};

const Section = ({ title, children }) => {
  return (
    <div className="resume-block">
      <h2 className="section-heading">{title}</h2>
      {children}
    </div>
  );
};

export default Resume;