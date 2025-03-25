import React from "react";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { meta } from "../../content_option";
import { Container, Row, Col } from "react-bootstrap";
import { contactConfig } from "../../content_option";

export const ContactUs = () => {
  return (
    <HelmetProvider>
      <Container>
        <Helmet>
          <meta charSet="utf-8" />
          <title>{meta.title} | Contact</title>
          <meta name="description" content={meta.description} />
        </Helmet>
        <Row className="mb-5 mt-3 pt-md-3">
          <Col lg="8">
            <h1 className="display-4 mb-4">Contact Me</h1>
            <hr className="t_border my-4 ml-0 text-left" />
          </Col>
        </Row>
        <Row className="sec_sp">
          <Col lg="12" className="mb-5">
            <h3 className="color_sec py-4">Get in touch</h3>
            <div className="contact-info">
              <p>
                <strong>Email:</strong>{" "}
                <a href={`mailto:${contactConfig.YOUR_EMAIL}`}>
                  {contactConfig.YOUR_EMAIL}
                </a>
              </p>
              
              {contactConfig.hasOwnProperty("YOUR_FONE") ? (
                <p>
                  <strong>Phone:</strong> {contactConfig.YOUR_FONE}
                </p>
              ) : (
                ""
              )}
              
              <p>
                <strong>LinkedIn:</strong>{" "}
                <a href="https://linkedin.com/in/geronimo-gorostiaga" target="_blank" rel="noreferrer">
                  linkedin.com/in/geronimo-gorostiaga
                </a>
              </p>
              
              {/* <p>
                <strong>GitHub:</strong>{" "}
                <a href="https://github.com/gerogorostiaga" target="_blank" rel="noreferrer">
                  github.com/gerogorostiaga
                </a>
              </p> */}
            </div>
            <div className="contact-description mt-4">
              <p>{contactConfig.description}</p>
            </div>
          </Col>
        </Row>
      </Container>
    </HelmetProvider>
  );
};
