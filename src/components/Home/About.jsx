import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import LaptopImg from "../../assets/home-main.svg";
import Tilt from "react-parallax-tilt";
import { AiFillGithub, AiOutlineTwitter } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import {
  githubLink,
  leetcodeLink,
  linkedinLink,
  twitterLink,
} from "../../Links";

const About = () => {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="yellow"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              Greetings, I'm Fazil Mon PP from Malappuram Kerala. I'm a{" "}
              <b className="yellow">MERN Stack</b> developer, deeply passionate
              about crafting robust and scalable web applications. My journey
              into tech began with self-learning, and now I'm refining my skills
              further through the <b className="yellow">Brototype bootcamp</b>,
              where I have been continuously enhancing both my technical prowess
              and soft skills.
              <br />
              <br />
              In just two and a half months, despite not coming from an IT
              background, I've successfully developed two major projects and
              several minor ones. During this time, I've honed my expertise in
              integrating various APIs such as{" "}
              <b className="yellow">ZEGO Cloud</b> for video calls,{" "}
              <b className="yellow">Google's Maps</b> and authentication, and
              diverse payment methods. I've also become adept at utilizing
              third-party modules like <b className="yellow">Socket.IO</b>,{" "}
              <b className="yellow">Redux</b>, and{" "}
              <b className="yellow">Axios</b> to streamline development
              processes.
              <br />
              <br />
              Being a self-taught developer, I am confident in my ability to
              adapt to diverse environments and overcome challenges that are
              thrown at me. Currently, I'm actively seeking opportunities to
              apply my skills and contribute meaningfully to the field while
              continuing my growth journey.
            </p>
          </Col>

          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={LaptopImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Please don't hesitate to reach out to me and{" "}
              <span className="yellow">connect.</span>
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href={githubLink}
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                  aria-label="github"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href={twitterLink}
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                  aria-label="twitter"
                >
                  <AiOutlineTwitter />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href={linkedinLink}
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                  aria-label="linkedin"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href={leetcodeLink}
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                  aria-label="instagram"
                >
                  <SiLeetcode />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
};

export default About;
