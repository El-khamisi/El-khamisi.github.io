import { Card } from "react-bootstrap";

function ExperienceCard({ logo, position, company, text }) {
  return (
    <Card className="experience-card-view" style={{ flexDirection: "row" }}>
      <Card.Img
        variant="top"
        src={logo}
        style={{ width: "150px", height: "150px" }}
      />
      <Card.Body style={{ textAlign: "left", fontSize: "20px" }}>
        <Card.Title style={{ fontSize: "28px" }}>{position}</Card.Title>
        <Card.Subtitle>{company}</Card.Subtitle>

        {text?.split("\n").map((line) => (
          <li>{line}</li>
        ))}
      </Card.Body>
    </Card>
  );
}

export default ExperienceCard;
