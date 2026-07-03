import React from "react";
import DialogFlow from "../../assets/icons/DialogFlow.png";
import HuggingFace from "../../assets/icons/HuggingFace.png";
import StreamlitLogo from "../../assets/icons/StreamlitLogo.png";
import "./Skills.css";

const Skills = () => {
  return (
    <section className="skill-bg" id="skills">
      <h1 className="skill-heading">Skills</h1>
      <div className="skills-container">
        <div className="skill">
          <h1 className="skills-heading">Frontend Development</h1>

          {[
            { name: "HTML", percent: "90%", className: "html" },
            { name: "CSS", percent: "85%", className: "css" },
            { name: "JavaScript", percent: "75%", className: "javascript" },
            { name: "React JS", percent: "80%", className: "react" },
          ].map((item, index) => (
            <div className="skill-box">
              <div className="skill-header">
                <span className="title">{item.name}</span>
                <span className="percent">{item.percent}</span>
              </div>

              <div className="skill-bar">
                <span className={`skill-per ${item.className}`}></span>
              </div>
            </div>
          ))}
        </div>

        <div className="skill">
          <h1 className="skills-heading">Backend Development</h1>

          {[
            { name: "Java", percent: "80%", className: "java" },
            { name: "Node.js", percent: "75%", className: "node" },
            { name: "SQL", percent: "80%", className: "sql" },
          ].map((item, index) => (
            <div className="skill-box">
              <div className="skill-header">
                <span className="title">{item.name}</span>
                <span className="percent">{item.percent}</span>
              </div>

              <div className="skill-bar">
                <span className={`skill-per ${item.className}`}></span>
              </div>
            </div>
          ))}
        </div>

        <div className="skill">
          <h1 className="skills-heading">Programming & Concepts</h1>

          {[
            { name: "Java (DSA)", percent: "80%", className: "java" },
            { name: "Python", percent: "75%", className: "python" },
            { name: "Data Structures & Algorithms", percent: "80%", className: "dsa" },
            { name: "OOPS", percent: "85%", className: "oops" },
          ].map((item, index) => (
            <div className="skill-box">
              <div className="skill-header">
                <span className="title">{item.name}</span>
                <span className="percent">{item.percent}</span>
              </div>

              <div className="skill-bar">
                <span className={`skill-per ${item.className}`}></span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="skill-card">
        <h3 className="card-title">AI & DS / Machine Learning Concepts</h3>
        <div className="tag-wrapper">
          {[
            "Machine Learning",
            "Data Science",
            "Deep Learning",
            "Prompt Engineering",
            "Model Evaluation & Fine-Tuning",
            "NLP Applications",
            "REST API Deployment"
          ].map((tag, index) => (
            <span key={index} className="tag-pill">{tag}</span>
          ))}
        </div>
      </div>

      <div className="skill-card">
        <h3 className="card-title">Tools & Technologies</h3>
        <div className="tool-grid">

          <div className="tool-item">
            <i className="fas fa-code-branch"></i>
            <span>Git</span>
          </div>

          <div className="tool-item">
            <img src={StreamlitLogo} alt="Streamlit" />
            <span>Streamlit</span>
          </div>

          <div className="tool-item">
            <img src={DialogFlow} alt="Github" />
            <span>Dialogflow</span>
          </div>

          <div className="tool-item">
            <img src={HuggingFace} alt="Hugging Face" />
            <span>Hugging Face</span>
          </div>

        </div>
      </div>

    </section>
  );
};

export default Skills;