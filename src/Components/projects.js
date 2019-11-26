import React from "react";

import {
  Container,
  Header,
  Card,
  Image,
  Button,
  Icon
} from "semantic-ui-react";

function Projects() {
  return (
    <Container fluid textAlign="center">
      <br />
      <Header as="h2">My Projects</Header>
      <br />
      <Card.Group centered stackable>
        <Card color="green">
          <Card.Content>
            <Icon name="gem" size="large" />
            <Icon name="html5" size="large" />
            <Icon name="js" size="large" />
            <Icon name="react" size="large" />
          </Card.Content>
          <Card.Content>
            <Card.Header>Grocery Delivery</Card.Header>
            <Card.Meta>E-Commerce Website</Card.Meta>
            <Card.Description>
              Capstone project at Flatiron School. Built in under a week. Uses
              Redux for shopping cart functionality.
            </Card.Description>
          </Card.Content>
          <Card.Content extra>
            <Button.Group widths="2">
              <Button
                basic
                color="black"
                href="https://grocery-delivery-frontend.herokuapp.com/"
                target="_blank"
              >
                <Icon color="green" name="play" />
                Load Site
              </Button>
              <Button basic color="black">
                <Icon color="red" name="github" />
                View GitHub
              </Button>
            </Button.Group>
          </Card.Content>
        </Card>

        <Card color="green">
          <Card.Content>
            <Icon name="gem" size="large" />
            <Icon name="html5" size="large" />
            <Icon name="js" size="large" />
          </Card.Content>
          <Card.Content>
            <Card.Header>AppleXchange</Card.Header>
            <Card.Meta>Trading Website</Card.Meta>
            <Card.Description>
              A website where you can buy, sell, and trade Apple Products. Built
              using Vanilla JavaScript and HTML.
            </Card.Description>
          </Card.Content>
          <Card.Content>
            <Button.Group widths="2">
              <Button
                basic
                color="black"
                href="https://applexchange.herokuapp.com/"
                target="_blank"
              >
                <Icon color="green" name="play" />
                Load Site
              </Button>
              <Button basic color="black">
                <Icon color="red" name="github" />
                View GitHub
              </Button>
            </Button.Group>
          </Card.Content>
        </Card>
        <Card color="green">
          <Card.Content>
            <Icon name="gem" size="large" />
            <Icon name="html5" size="large" />
            <Icon name="js" size="large" />
            <Icon name="react" size="large" />
          </Card.Content>
          <Card.Content>
            <Card.Header>Grocery Delivery</Card.Header>
            <Card.Meta>E-Commerce Website</Card.Meta>
            <Card.Description>
              Capstone project at Flatiron School. Built in under a week. Uses
              Redux for shopping cart functionality.
            </Card.Description>
          </Card.Content>
          <Card.Content extra>
            <div className="ui two buttons">
              <Button
                basic
                color="black"
                href="https://grocery-delivery-frontend.herokuapp.com/"
                target="_blank"
              >
                <Icon color="green" name="play" />
                Load Site
              </Button>
              <Button basic color="black">
                <Icon color="red" name="github" />
                GitHub
              </Button>
            </div>
          </Card.Content>
        </Card>

        <Card color="green">
          <Card.Content>
            <Icon name="gem" size="large" />
            <Icon name="html5" size="large" />
            <Icon name="js" size="large" />
          </Card.Content>
          <Card.Content>
            <Card.Header>AppleXchange</Card.Header>
            <Card.Meta>Trading Website</Card.Meta>
            <Card.Description>
              A website where you can buy, sell, and trade Apple Products. Built
              using Vanilla JavaScript and HTML.
            </Card.Description>
          </Card.Content>
          <Card.Content>
            <div className="ui two buttons">
              <Button
                basic
                color="black"
                href="https://applexchange.herokuapp.com/"
                target="_blank"
              >
                <Icon color="green" name="play" />
                Load Site
              </Button>
              <Button basic color="black">
                <Icon color="red" name="github" />
                GitHub
              </Button>
            </div>
          </Card.Content>
        </Card>
      </Card.Group>
    </Container>
  );
}

export default Projects;
