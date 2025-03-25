import React from "react";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Container, Row, Col } from "react-bootstrap";
import { research, meta } from "../../content_option";

export const Research = () => {
  return (
    <HelmetProvider>
      <Container className="About-header">
        <Helmet>
          <meta charSet="utf-8" />
          <title> Research | {meta.title} </title>
          <meta name="description" content={meta.description} />
        </Helmet>
        <Row className="mb-5 mt-3 pt-md-3">
          <Col lg="8">
            <h1 className="display-4 mb-4"> Research </h1>
            <hr className="t_border my-4 ml-0 text-left" />
          </Col>
        </Row>
        <div className="research-content">
          {research.map((data, i) => {
            return (
              <div key={i} className="research-item mb-5">
                <h3 className="research-title">{data.title}</h3>
                <p className="research-authors">{data.authors}</p>
                <p className="research-venue"><em>{data.venue}</em></p>
                <p className="research-description">{data.description}</p>
                <a href={data.link} target="_blank" rel="noreferrer" className="research-link">
                  View Publication
                </a>
              </div>
            );
          })}
        </div>
      </Container>
    </HelmetProvider>
  );
};
