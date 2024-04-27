import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillFacebook,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Footer() {
  let date = new Date();
  let year = date.getFullYear();
  return (
    <Container fluid className="footer">
      <Row>
        <Col md="4" className="footer-copywright">
          <h3>Designed and Developed by Copertinot </h3>
        </Col>
        <Col md="4" className="footer-copywright">
          <h3>Copyright © {year} Nb</h3>
        </Col>
        <Col md="4" className="footer-body">
          <ul className="footer-icons">
            <li className="social-icons">
              <a
                href="https://github.com/RAZAFINDRABEMISOMAcopertinot?tab=repositories"
                style={{ color: "white" }}
                target="_blank" 
              >
                <AiFillGithub />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://web.facebook.com/mouhsin.jaimie/"
                style={{ color: "white" }}
                target="_blank" 
              >
                <AiOutlineTwitter />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://www.linkedin.com/in/copertinot-r-bab931240/"
                style={{ color: "white" }}
                target="_blank" 
              >
                <FaLinkedinIn />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://web.facebook.com/mouhsin.jaimie/"
                style={{ color: "white" }}
                target="_blank" 
              >
                <AiFillFacebook />
              </a>
            </li>
          </ul>
        </Col>
      </Row>
    </Container>  
  );
}

export default Footer;
