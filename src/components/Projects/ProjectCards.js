import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { CgWebsite } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";

function ProjectCards({ img, title, description, github, demo }) {
  return (
    <Card className="project-card-view">
      <Card.Img
        style={{ objectFit: "cover", height: "230px" }}
        variant="top"
        src={img}
        alt="card-img"
      />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text style={{ textAlign: "justify" }}>{description}</Card.Text>
        {github && (
          <Button variant="primary" href={github} target="_blank">
            <BsGithub /> &nbsp; GitHub Repo
          </Button>
        )}
        {"\n"}
        {"\n"}

        {/* If the component contains Demo link and if it's not a Blog then, it will render the below component  */}

        {demo && (
          <Button
            variant="primary"
            href={demo}
            target="_blank"
            style={{ marginLeft: "10px" }}
          >
            <CgWebsite /> &nbsp;
            {"Live Demo"}
          </Button>
        )}
      </Card.Body>
    </Card>
  );
}
export default ProjectCards;
