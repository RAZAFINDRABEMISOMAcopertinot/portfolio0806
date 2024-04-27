
import React from "react";
import { Container } from "react-bootstrap";
import Particle from "../Particle";
import "../footer/footerstyle.css"; 
import ProjectCards from "./ProjectCards";

// Images
import mpmb from "../../Assets/Projects/mp-mb.png";
import mybeedoo from "../../Assets/Projects/mybeedoo.png"
import petiteannonce from "../../Assets/Projects/petite annonce.png"
import labotikatsika from "../../Assets/Projects/labotikatsika.png"
import tourisme from "../../Assets/Projects/tourisme.png"

const ProjectList = [
  {
    _id: 1,
    title: "MyBeedoo",
    imageUrl: mybeedoo,
    link: "https://mybeedoo.com/"
  },
  {
    _id: 2,
    title: "La botikatsika",
    imageUrl: labotikatsika,
    link: "https://labotikatsika.com/"
  },
  {
    _id: 3,
    title: "Mon Projet et Mon Bussiness",
    imageUrl: mpmb,
    link: "https://mp-mb.com/"
  },
  {
    _id: 4,
    title: "Petite Annonce",
    imageUrl: petiteannonce,
    link: "https://petite-annonce.mg/"
  },
  {
    _id: 5,
    title: "Tourisme Nosy Be",
    imageUrl: tourisme,
    link: "https://madanosybetourism.com/en"
  }
]

function Projects() {
  return (
    <div className="footer-wrapper">
      <Container fluid className="project-section">
        <Particle />
        <Container>
          <div className="row">
            {ProjectList.map(proj => <div className="col-6 my-3" key={proj._id}>
              <ProjectCards project={proj}/>
            </div>)}
          </div>
        </Container>
      </Container>

    </div>
  );
}

export default Projects;
