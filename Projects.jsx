import React from "react";
import "./Projects.css";

const projectsData = [
  {
    title: "Enterprise Based Customer Churn Prediction & Retention Analysis Solution",
    description:
      "The Enterprise-Based Customer Churn Prediction & Retention Analysis Solution predicts customers who are likely to discontinue using a company's services by analyzing customer data and behavior patterns. It identifies key factors contributing to churn and provides actionable insights for targeted retention strategies. This helps organizations improve customer loyalty, reduce revenue loss, and enhance business growth.",
    github:
      "https://github.com/ShaRo-06/Enterprise-Customer-Churn-Prediction-Retention-Analytics-Solution",
  },
  {
    title: "AI-Based Employee Evaluation and Feedback Chatbot System",
    description:
      "The AI-Based Employee Evaluation and Feedback Chatbot System uses artificial intelligence to assess employee performance through automated feedback collection and analysis. It provides real-time evaluations, identifies strengths and improvement areas, and offers personalized recommendations for employee development. The system enhances performance management, improves communication, and supports data-driven HR decision-making. It helps organizations increase employee engagement, productivity, and overall workforce effectiveness.",
    github:
      "https://github.com/ShaRo-06/Employee-Performance-Measure-Chatbot",
  },
];

const Projects = () => {
  return (
    <section className="project-section" id="projects">
      <h1 className="project-heading">Projects</h1>

      <p className="project-subtitle">
        A few real-world solutions I’ve built using AI, Data Analytics, and Web
        Technologies.
      </p>

      <div className="project-container">
        {projectsData.map((project, index) => (
          <div className="project-card" key={index}>
            <h3 className="project-title">{project.title}</h3>

            <p className="project-description">
              {project.description}
            </p>

            <div className="project-links">
              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
              >
                View on GitHub
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;