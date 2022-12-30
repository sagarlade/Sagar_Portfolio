import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import wedding from "../../Assets/Projects/wedding.jpg";
import movie from "../../Assets/Projects/movie.jpg";
import pms from "../../Assets/Projects/pms.jpg"
import suicide from "../../Assets/Projects/suicide.png";
import Jewellery from "../../Assets/Projects/jew.jpg";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={pms}
              isBlog={false}
              title="PMS"
              description="pharmacy management system with C#, .net and Sql Database which Store and Manage information."
              ghLink="https://github.com/sagarlade/PMS"
              demoLink="https://github.com/sagarlade/PMS"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Jewellery}
              isBlog={false}
              title="Jewellery"
              description=" 
              Online Jewellery Shop is basically used to build an application program which help people to find and buy latest design of jewellery with differentcategories like Gold Silver, Diamond "
              ghLink="https://github.com/sagarlade/Jewellery-Site"
              demoLink="#"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={movie}
              isBlog={false}
              title="Movie App"
              description="Movie App build with react.js. Here We use API of Movie to Search all type of Movies"
              ghLink="https://github.com/sagarlade/MovieApp"
              demoLink="#"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={wedding}
              isBlog={false}
              title="Wedding Palnner"
              description="The best weddings are planned together, as a team. With our online Wedding Planning Assistant, your loved ones can each play a part in the real-time preparations of your big day."
              ghLink="https://github.com/sagarlade/Wedding"
              demoLink="#"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="Ai For Social Good"
              description="Using 'Natural Launguage Processing' for the detection of suicide-related posts and user's suicide ideation in cyberspace  and thus helping in sucide prevention."
              ghLink="#"
             
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
