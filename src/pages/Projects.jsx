import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "../components/Projects/ProjectCard";
import Particle from "../components/Particle";
import hercules from "../assets/projects/hercules.png";
import olx from "../assets/projects/olx.png";
import personal from "../assets/projects/personal.png";
import passwordgen from "../assets/projects/passwordgen.png";
import hulu from "../assets/projects/hulu.png";
import walkwise from "../assets/projects/walkwise.png";
import dreamhome from "../assets/projects/dreamhome.png";
import netflix from "../assets/projects/netflix.png";
import reacttodo from "../assets/projects/reacttodo.png";
import { githubLink } from "../Links";

const Projects = () => {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Recent Top <strong className="yellow">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={dreamhome}
              isBlog={false}
              title="Dream Home"
              description="Dream Home is a property rental website where owners can list their properties for rent and users can easily find and 
              rent them. Built using React.js for the frontend, Node.js and Express.js for the backend, and MongoDB for the database, it offers a 
              seamless user experience. Tailwind.css and UI libraries like Material Tailwind and Material UI handle styling. Key features include 
              Google authentication, PayPal for payments, Socket.io for chat between users and owners, and video calls for virtual tours. 
              Real-time notifications enhance user engagement."
              ghLink={`${githubLink}/Dream-Home-Property-Rental`}
              demoLink="https://walkwise.shop"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={walkwise}
              isBlog={false}
              title="Walk Wise"
              description="The WalkWise E-commerce Website offers a seamless shopping experience with user authentication, product browsing, cart 
              management, and secure payments via Razorpay. It includes features like user registration, OTP verification, and admin panel for product 
              and order management. Users can browse products by categories, apply filters, and easily add items to the cart. It provides export 
              options for order data in PDF and Excel formats, along with image upload using Multer. Responsive design ensures accessibility across 
              devices, while features like Easyinvoice facilitate convenient order invoicing."
              ghLink={`${githubLink}/walkwise-ecommerce`}
              demoLink="https://ecommerce.walkwise.shop"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={netflix}
              isBlog={false}
              title="Netflix Clone"
              description="The React-based Netflix trailer web application enables users to browse and watch movie trailers conveniently. 
              With a user-friendly interface, it categorizes movies into sections like Originals, Trending, Action, Comedy, Romance, Horror, 
              and Documentaries for easy exploration. When selecting a movie poster, the associated trailer plays seamlessly, enhancing the 
              viewing experience. This platform provides a straightforward and engaging way for users to discover and enjoy a wide range of 
              movie content from Netflix, fostering an immersive entertainment experience."
              ghLink={`${githubLink}/react-netflix`}
              demoLink="https://neflix-clone.walkwise.shop/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={personal}
              isBlog={false}
              title="Static Portfolio"
              description=""
              ghLink={`${githubLink}/personal-static-website`}
              demoLink="https://fazil8848.github.io/personal-static-website/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={passwordgen}
              isBlog={false}
              title="React Password Generator"
              description=""
              ghLink={`${githubLink}/Password-Generater`}
              demoLink="#"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={olx}
              isBlog={false}
              title="OLX Clone"
              description=""
              ghLink={`${githubLink}/React-Olx-Clone`}
              demoLink="#"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={reacttodo}
              isBlog={false}
              title="React To-Do"
              description=""
              ghLink={`${githubLink}/React_To_Do`}
              demoLink="https://todoreactfa.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={hercules}
              isBlog={false}
              title="Hercules Clone"
              description=""
              ghLink={`${githubLink}/hercules-responsive`}
              demoLink="https://fazil8848.github.io/hercules-responsive/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={hulu}
              isBlog={false}
              title="Hulu Clone"
              description=""
              ghLink={`${githubLink}/Dream-Home-Property-Rental`}
              demoLink="#"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
};

export default Projects;
