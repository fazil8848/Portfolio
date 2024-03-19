import React from "react";
import { Col, Row } from "react-bootstrap";
import { DiJavascript1, DiReact, DiNodejs, DiGit } from "react-icons/di";
import {
  SiGraphql,
  SiSolidity,
  SiRedux,
  SiMongodb,
  SiHtml5,
  SiChakraui,
  SiCss3,
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
      <Col xs={4} md={2} className="tech-icons" title="React">
        <DiReact />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="Redux">
        <SiRedux />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="MongoDB">
        <SiMongodb />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="Chakra UI">
        <SiChakraui />
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
      <Col xs={4} md={2} className="tech-icons" title="GIT">
        <DiGit />
      </Col>
    </Row>
  );
};

export default Techstack;
