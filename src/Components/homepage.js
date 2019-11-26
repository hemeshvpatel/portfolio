import React from "react";
import { Container, Header } from "semantic-ui-react";

function Homepage() {
  return (
    <Container text textAlign="center">
      <br />
      <Header as="h2">Welcome to Hemesh's Portfolio</Header>
      <Header as="h4">
        My favorite thing about coding is it’s ever evolving and there isn’t
        just one way to code something. There will always be something new to
        learn and it’s apart of every industry!
      </Header>

      <p>
        I previously worked in the operations, data, and logistics space. On
        projects I was able to work with developer teams on product
        functionality and it triggered this love for coding I had as a kid. The
        more I worked the more I realized this was really the ‘thing’ I wanted
        to do everyday!
      </p>

      <p>
        I think my love for building legos without instructions also played a
        huge part in fueling my passion for building things. After digging into
        my passion bag, I understood that starting a journey coding would be
        life long fulfilling.
      </p>

      <p>
        I hope to continue building applications and get into mobile
        engineering. I envision working in the automotive (love cars!) space as
        a Software Engineer in the near future!
      </p>
    </Container>
  );
}

export default Homepage;
