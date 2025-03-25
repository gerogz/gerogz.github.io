import React from "react";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Container, Row, Col } from "react-bootstrap";
import { resumeData, meta } from "../../content_option";

export const Resume = () => {
  return (
    <HelmetProvider>
      <Container className="About-header">
        <Helmet>
          <meta charSet="utf-8" />
          <title> Resume | {meta.title} </title>
          <meta name="description" content={meta.description} />
        </Helmet>
        <Row className="mb-5 mt-3 pt-md-3">
          <Col lg="8">
            <h1 className="display-4 mb-4"> Resume </h1>
            <hr className="t_border my-4 ml-0 text-left" />
          </Col>
        </Row>
        
        <div className="resume-container">
          {/* Header */}
          <div className="resume-header text-center mb-5">
            <h2 className="resume-name">{resumeData.header.name}</h2>
            <p className="resume-contact">{resumeData.header.contact}</p>
          </div>
          
          {/* Education */}
          <div className="resume-section mb-5">
            <h3 className="resume-section-title">EDUCATION</h3>
            <div className="resume-education">
              <div className="d-flex justify-content-between">
                <h4>{resumeData.education.school}</h4>
                <span className="resume-date">{resumeData.education.graduation}</span>
              </div>
              <p><strong>{resumeData.education.degree}</strong></p>
              <p><strong>Activities and Societies:</strong> {resumeData.education.activities}</p>
              <p><strong>Relevant Coursework:</strong> {resumeData.education.coursework}</p>
            </div>
          </div>
          
          {/* Skills */}
          <div className="resume-section mb-5">
            <h3 className="resume-section-title">SKILLS</h3>
            <div className="resume-skills">
              <p><strong>Languages:</strong> {resumeData.skills.languages}</p>
              <p><strong>AI/ML:</strong> {resumeData.skills.aiml}</p>
              <p><strong>Libraries & Frameworks:</strong> {resumeData.skills.libraries}</p>
              <p><strong>DevOps & Tools:</strong> {resumeData.skills.devops}</p>
            </div>
          </div>
          
          {/* Experience */}
          <div className="resume-section mb-5">
            <h3 className="resume-section-title">EXPERIENCE</h3>
            {resumeData.experience.map((exp, index) => (
              <div key={index} className="resume-experience mb-4">
                <div className="d-flex justify-content-between">
                  <h4>{exp.title}</h4>
                  <span className="resume-date">{exp.period}</span>
                </div>
                <ul className="resume-bullets">
                  {exp.bullets.map((bullet, i) => (
                    <li key={i}>{bullet}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          
          {/* Projects */}
          <div className="resume-section mb-5">
            <h3 className="resume-section-title">PROJECTS</h3>
            {resumeData.projects.map((project, index) => (
              <div key={index} className="resume-project mb-4">
                <h4>{project.title}</h4>
                <p>{project.description}</p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </HelmetProvider>
  );
};
