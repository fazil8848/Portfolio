import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  DiJavascript1,
  DiResponsive,
  DiReact,
  DiNodejs,
  DiGit,
} from "react-icons/di";
import {
  SiGraphql,
  SiSolidity,
  SiRedux,
  SiMongodb,
  SiExpress,
  SiHtml5,
  SiChakraui,
  SiCss3,
  SiBootstrap,
  SiFirebase,
  SiGithub,
  SiAmazonaws,
  SiDigitalocean,
  SiPostgresql,
  SiMysql,
  SiMongoose,
} from "react-icons/si";
import { TbBrandTailwind } from "react-icons/tb";
import { LiaCss3 } from "react-icons/lia";

const Techstack = () => {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons" title="HTML5">
        <SiHtml5 />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="CSS3">
        <LiaCss3 />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="JavaScript">
        <DiJavascript1 />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="Node.js">
        <DiNodejs />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="Express.js">
        <SiExpress />
      </Col>
      <Col
        xs={4}
        md={2}
        className="tech-texts"
        title="Data structure algorithm"
      >
        {/* <SiExpress /> */} <p style={{ marginTop: "1rem" }}>DSA</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="React">
        <DiReact />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="Redux">
        <SiRedux />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="Mongo DB">
        <SiMongodb />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="Mongoose">
        <SiMongoose />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="MySql">
        <SiMysql />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="Postgre SQL">
        <SiPostgresql />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="Chakra UI">
        <SiChakraui />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="Bootstrap">
        <SiBootstrap />
      </Col>
      {/* <Col xs={4} md={2} className="tech-icons" title="GraphQL">
        <SiGraphql />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="Solidity">
        <SiSolidity />
      </Col> */}
      <Col xs={4} md={2} className="tech-icons" title="Tailwind Css">
        <TbBrandTailwind />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="Firebase">
        <SiFirebase />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="GIT">
        <DiGit />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="Git Hub">
        <SiGithub />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="Responsive Design">
        <DiResponsive size={120} />
      </Col>
    </Row>
  );
};

export default Techstack;
