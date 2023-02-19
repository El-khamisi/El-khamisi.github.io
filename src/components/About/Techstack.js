import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { CgCircleci } from "react-icons/cg";
import { DiJavascript1, DiMongodb } from "react-icons/di";
import { FaDocker, FaNodeJs, FaPhp } from "react-icons/fa";
import {
  SiTypescript,
  SiNestjs,
  SiExpress,
  SiPostgresql,
  SiRedis,
  SiRabbitmq,
  SiNginx,
  SiPm2,
  SiJasmine,
  SiPostman,
} from "react-icons/si";

function Techstack() {
  return (
    <Container>
      <Row style={{ justifyContent: "right" }}>
        <Col md="auto" className="tech-icons">
          <SiTypescript />
          TypeScript
        </Col>
        <Col md="auto" className="tech-icons">
          <DiJavascript1 /> JavaScript
        </Col>
        <Col md="auto" className="tech-icons">
          <FaNodeJs /> NodeJs
        </Col>
        <Col md="auto" className="tech-icons">
          <SiNestjs /> NesteJs
        </Col>
        <Col md="auto" className="tech-icons">
          <SiExpress /> ExpressJs
        </Col>
      </Row>

      <Row style={{ justifyContent: "right" }}>
        <Col md="auto" className="tech-icons">
          <SiPostgresql /> SQL
        </Col>
        <Col md="auto" className="tech-icons">
          <DiMongodb /> MongoDB
        </Col>
        <Col md="auto" className="tech-icons">
          <SiRedis />
          Redis
        </Col>
        <Col md="auto" className="tech-icons">
          <FaDocker />
          Docker
        </Col>
        <Col md="auto" className="tech-icons">
          <SiNginx />
          Nginx
        </Col>
      </Row>

      <Row style={{ justifyContent: "right" }}>
        <Col md="auto" className="tech-icons">
          <SiRabbitmq />
          RabbitMQ
        </Col>

        <Col md="auto" className="tech-icons">
          <CgCircleci />
          CircleCI/CD
        </Col>
        <Col md="auto" className="tech-icons">
          <SiJasmine />
          JasmineJs
        </Col>
        <Col md="auto" className="tech-icons">
          C/C++
        </Col>
      </Row>
      <Row style={{ justifyContent: "right" }}>
        <Col md="auto" className="tech-icons">
          <SiPm2 />
          PM2
        </Col>
        <Col md="auto" className="tech-icons">
          <SiPostman />
          Postman
        </Col>
        <Col md="auto" className="tech-icons">
          <FaPhp />
          PHP
        </Col>
      </Row>
    </Container>
  );
}

export default Techstack;
