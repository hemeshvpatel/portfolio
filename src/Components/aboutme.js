import React from "react";
import { Container, Header } from "semantic-ui-react";

function AboutMe() {
  return (
    <Container text>
      {/* Intro section ... */}
      <div>
        <br />
        <Header as="h1">Hemesh Patel</Header>
        <Header as="h2">Austin based Web Developer</Header>
        <p>
          My favorite thing about coding is it’s ever evolving and there isn’t
          just one way to code something. I think my love for building legos
          without instructions also played a huge part in fueling my passion for
          building things. There will always be something new to learn and it’s
          apart of every industry!
        </p>
        <br />
      </div>

      {/* Current section ...  */}
      <div>
        <Header as="h3">Currently</Header>
        <p>
          Working on open source projects while actively pursuing Software
          Engineering roles in Austin, TX.
        </p>
        <br />
      </div>

      {/* Skills section ... */}
      <div>
        <Header as="h3">Web Development Skills</Header>
        <strong>Languages: </strong>ES6+ Javascript, CSS3, HTML5, Ruby
        <br />
        <strong>Frameworks and Tools: </strong>React, Redux, Node.js, jQuery,
        Git
        <br />
      </div>
    </Container>
  );
}

export default AboutMe;
