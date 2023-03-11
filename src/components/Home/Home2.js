import React from "react";
import { Container, Row, Col } from "react-bootstrap";
// import aboutImg from "../../Assets/avatar.svg";
import aboutImg from "../../Assets/aboutg.png";
import Tilt from "react-parallax-tilt";

function Home2() {
  return (
    <Container fluid className="home-about-section">
      <Container>
        <Row>
          {/* <Col md={4} className="myAvtar">
            <Tilt>
              <img src={aboutImg} className="img-fluid" alt="avatar"  style={{ width: "300px"}}/>
            </Tilt>
          </Col> */}
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
