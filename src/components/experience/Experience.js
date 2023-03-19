import { Container, Row } from "react-bootstrap";
import depaxlogo from "../../Assets/experience/depaxlogo.jpeg";
import xramilelogo from "../../Assets/experience/xramilelogo.jpeg";
import ExperienceCard from "./ExperienceCard";

function Experience() {
  return (
    <Container fluid id="experience" className="experience-section">
      <Row className="experience-card">
        <ExperienceCard
          logo={xramilelogo}
          position={"Backend Developer - Xramile"}
          company={"Xramile Business & Technology Solutions"}
          text={`Build and deploy SaaS to schedule appointments', track patients treatment plans, and manage different types of users for dental clinics
          Involving in sprint planning and writing change logs with the product management team`}
        />
      </Row>
      <Row className="experience-card">
        <ExperienceCard
          logo={depaxlogo}
          position={"Backend Developer - Depax"}
          company={"Software Development"}
          text={`As a B2C company I built many applications by Express.js, and different databases (depending on each project’s specifications like MongoDB, Postgresql, and Redis)
            Integrate third-parties APIs (e.g: payment gateway, file storage service )`}
        />
      </Row>
    </Container>
  );
}

export default Experience;
