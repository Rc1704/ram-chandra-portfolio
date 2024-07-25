import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Ram Chandra Gutta </span>
            from <span className="purple"> Vijayawada, India.</span>
            <br />
            I am currently pursuing my 3rd year of bachelor's degree SRM University, Amaravati.
            <br />
            I have completed Intermediate At Krishna Reddy's Chaitanya (2020-2022) and Schooling at Sri Chaitanya Olympiad School
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Cricket 
            </li>
            <li className="about-activity">
              <ImPointRight /> Watching Movies
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          {/* <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Ram Chandra</footer> */}
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
