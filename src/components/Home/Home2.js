import React from "react";
import { Container, Row, Col } from "react-bootstrap";
// import aboutImg from "../../Assets/avatar.svg";
import aboutImg from "../../Assets/aboutg.png"
import Tilt from "react-parallax-tilt";

function Home2() {
  return (
    <Container fluid className="home-about-section">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              I am a <b className="purple">Backend Developer</b> with an
              extensive background in developing software applications and web
              services. I have experience in designing, building, testing and
              maintaining server-side applications using various tools and
              technologies, Besides my experience expanded to modeling
              databases, writing API documents, and involving in the deployment
              process.
              <br />
              <br />
              Also, Obsessed with delicious yummy systems, falling in love with
              how different parts communicate with each other, which protocols
              they use, how they exchange messages in terms of security and
              latency, and how they maintain their health status. 🍜😋
              <br />
              <br />
              My field of Interest's are building new
              <i>
                <b className="purple">Web Technologies and Products </b>
                and also in areas related to{" "}
                <b className="purple">Cloud and Systems Architecture.</b>
              </i>
              <br />
              <br />
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={aboutImg} className="img-fluid" alt="avatar"  style={{ width: "300px"}}/>
            </Tilt>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
