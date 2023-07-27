import { Container, Row } from "react-bootstrap";
import depaxlogo from "../../Assets/experience/depaxlogo.jpeg";
import xramilelogo from "../../Assets/experience/xramilelogo.jpeg";
import ExperienceCard from "./ExperienceCard";

function Experience() {
  return (
    <Container fluid id="experience" className="experience-section">
      <h1 className="project-heading">
        My Professional<strong className="purple"> Experience</strong>
      </h1>
      <p style={{ color: "white" }}>
        Here is timeline of my professional work experience
      </p>
      <Row className="experience-card">
        <ExperienceCard
          logo={xramilelogo}
          position={"Backend Developer - Xramile"}
          company={"Xramile Business & Technology Solutions"}
          text={`Developed mid-scale SaaS software for managing dental clinics using Nest.js and PostgreSQL with REST API interface documented by Postman
          Configured GitHub actions to run validation tests, build Docker images and deploy them on different stages
          Configured NGINX as a layer 7 reverse proxy to pass the application requests, serve static files, etc.`}
        />
      </Row>
      <Row className="experience-card">
        <ExperienceCard
          logo={depaxlogo}
          position={"Backend Developer - Depax"}
          company={"Software Development"}
          text={`Built various applications using Express.js and different databases, including MongoDB, PostgreSQL, and Redis
          Integrated third-party APIs, such as payment gateway and file storage service
            Skills: Express.js · MongoDB · Redis · postman · DigitalOcean · Node.js · REST APIs`}
        />
      </Row>
    </Container>
  );
}

export default Experience;
