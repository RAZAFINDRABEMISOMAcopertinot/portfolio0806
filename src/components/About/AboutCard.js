import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hey Guys I'm  <span className="purple">Copertinot RAZAFINDRABEMISOMA </span>
            from <span className="purple"> Fianarantsoa , Madagascar.</span>
            <br />
            <br />
            I am currently pursuing my Master of Mathmatics-Informatics at
            <br />
            Sciences Faculity of University of Fianarantsoa
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Football
            </li>
            <li className="about-activity">
              <ImPointRight /> Watching Anime 
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

        </blockquote>
      </Card.Body>
    </Card> 
  );
}

export default AboutCard;
