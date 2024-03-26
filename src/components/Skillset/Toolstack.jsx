import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiVisualstudiocode,
  SiPostman,
  SiHeroku,
  SiVercel,
  SiNetlify,
  SiAmazonaws,
  SiDigitalocean,
  SiAmazonec2,
} from "react-icons/si";
import { FaNpm } from "react-icons/fa";
import { DiNginx } from "react-icons/di";
import { CgFigma } from "react-icons/cg";

const Toolstack = () => {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons" title="VS Code">
        <SiVisualstudiocode title="VS Code" />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="Postman">
        <SiPostman title="Postman" />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="NPM">
        <FaNpm title="NPM" />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="Figma">
        <CgFigma title="Figma" />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="AWS">
        <SiAmazonaws title="AWS" />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="Digitalocean">
        <SiDigitalocean title="Digitalocean" />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="AWS EC2">
        <SiAmazonec2 title="AWS EC2" />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="NGINX">
        <DiNginx size={100} title="NGINX" />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="Vercel">
        <SiVercel title="Vercel" />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="Netlify">
        <SiNetlify title="Netlify" />
      </Col>
      {/* <Col xs={4} md={2} className="tech-icons" title="Heroku">
        <SiHeroku title="Heroku" />
      </Col> */}
    </Row>
  );
};

export default Toolstack;
