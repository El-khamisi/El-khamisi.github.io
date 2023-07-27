import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import cpp from "../../Assets/Projects/cpp.png";
import textgenuss from "../../Assets/Projects/textgenuss.png";
import LitFair from "../../Assets/Projects/LitFair.png";
import ds from "../../Assets/Projects/ds.png";
import whatsappweb from "../../Assets/Projects/whatsappweb.png";
import dendots from "../../Assets/Projects/dendots.png";

function Projects() {
  return (
    <Container fluid id="projects" className="project-section">
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
              img={dendots}
              title="Dendots - Dental Clinic"
              description={
                "Dental management solution that helps clinics imporve their operations, keep track of treatments plans, and manage working hours for clinic staff"
              }
              demo="https://www.dendots.com"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              img={LitFair}
              title="LitFair-Server"
              description="A Backend Server ( based on node.js and express framework) using MongoDB & MySQL as a database providers and mongoose & Sequelize as ODM & ORM."
              github="https://github.com/El-khamisi/LitFair-Server"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              img={whatsappweb}
              title="whatsapp-web"
              description="A real-time bot using node.js, socket.io, and MongoDB to store users' data. The application provides the ability to send Whatsapp messages, notify when receiving messages, and send customized auto-replies."
              github="https://github.com/El-khamisi/whatsapp-web.js"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              img={textgenuss}
              title="textgenuss"
              description="A Backend Server ( based on node.js and express framework) using MongoDB as a database provider and mongoose as ODM."
              demo="https://textgenuss.net"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              img={cpp}
              title="Operating Systems Lab"
              description="Scripts I write to apply practical sessions and knowledge I learn about different topics in Operating systems and low-level interactions with Hardware."
              github="https://github.com/El-khamisi/operating-systems"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              img={ds}
              title={"Data Structures implementations"}
              description={`Implementing some data structures in C++ during practical labs through "CS214: Data Structures" course.`}
              github="https://github.com/El-khamisi/DS-CS214"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
