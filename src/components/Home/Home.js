import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import homeLogo from "../../Assets/myavatar.png";
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
                LET ME <span className="purple"> INTRODUCE </span> MYSELF . . .
                .
              </h1>
              <p className="home-about-body">
                I am a <b className="purple">Backend Developer</b> with
                background in building, testing, and deploying server-side
                applications, my experience extends to database modeling, API
                documentation, and active involvement in Agile processes to
                support business decisions.
                <br />
                <br />
                But my passion for technology runs deeper than just my
                professional experience. I am truly obsessed with creating
                systems that are not only functional but also delightful to use.
                I am captivated by the intricate communication between system
                components, the protocols they use, message exchange, security,
                latency, and overall health status. I am always on the lookout
                for delicious, well-functioning systems that make me fall in
                love with technology all over again. 🍜😋
                <br />
                <br />
                My field of Interest's are building new
                <b className="purple"> Web Technologies and Products </b>
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
    </section>
  );
}

export default Home;
