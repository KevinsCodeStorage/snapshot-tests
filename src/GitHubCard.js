import React from "react";
import Card from "react-bootstrap/Card";

export default function GitHubCard() {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src="http://placekitten.com/g/200/300" />
      <Card.Body>
        <Card.Title>KevinsCodeStorage</Card.Title>
        <Card.Text>
          I'm a coder currently in the never-ending quest to try and learn more
          about coding. No, thats not a picture of me.
        </Card.Text>
      </Card.Body>
    </Card>
  );
}
