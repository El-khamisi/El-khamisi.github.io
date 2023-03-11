import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import homeLogo from "../../Assets/myavatar (1).png";
import Home2 from "./Home2";
import Type from "./Type";
import Tilt from "react-parallax-tilt";

function Home() {
  return (
    <section>
      <Container fluid id="home">
        <Row className="home-content">
          <Col md={9}>
            <Row>
              <Col md={5}>
                <h1 className="heading">
                  Hi There!{" "}
                  <span className="wave" role="img" aria-labelledby="wave">
                    🧁
                  </span>
                </h1>
                <h1 className="heading-name">
                  I'M
                  <strong className="main-name"> Mohammed El-khamisi </strong>
                </h1>
              </Col>
              <Col>
                <div style={{ paddingTop: "50px", textAlign: "left" }}>
                  <Type />
                </div>
              </Col>
            </Row>

            <Row className="home-about-description">
              <h1 style={{ fontSize: "2.6em", textAlign: "left" }}>
                LET ME <span className="purple"> INTRODUCE </span> MYSELF
              </h1>
              <p className="home-about-body">
                I am a <b className="purple">Backend Developer</b> with an
                extensive background in designing, building, and testing
                server-side applications using various tools and technologies
                besides, my experience expanded to modeling databases, writing
                API documentation, supporting business decisions involvement
                with the deployment team.
                <br />
                <br />
                Also, Obsessed with delicious yummy systems, falling in love
                with how different parts communicate with each other, which
                protocols they use, how they exchange messages in terms of
                security and latency, and how they maintain their health status.
                🍜😋
                <br />
                <br />
                My field of Interest's are building new
                <b className="purple">Web Technologies and Products </b>
                and also in areas related to{" "}
                <b className="purple">Cloud and Systems Architecture.</b>
                <br />
                <br />
              </p>
            </Row>
          </Col>

          <Col style={{ paddingBottom: 20 }}>
            <Tilt>
              <img
                src={homeLogo}
                alt="home pic"
                className="img-fluid"
                style={{
                  maxHeight: "450px",
                  borderRadius: "50%",
                  paddingRight: "0",
                }}
              />
            </Tilt>
          </Col>
        </Row>
      </Container>
      <Home2 />
    </section>
  );
}

export default Home;
