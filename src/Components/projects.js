import React from "react";

import {
  Container,
  Header,
  Card,
  Button,
  Icon,
  Label,
  Segment
} from "semantic-ui-react";

function Projects() {
  return (
    <Container text textAlign="center">
      <br />
      <Card.Group centered itemsPerRow={2} stackable>
        <Card raised>
          <Card.Content>
            <Icon name="gem" size="large" />
            <Icon name="html5" size="large" />
            <Icon name="js" size="large" />
            <Icon name="react" size="large" />
            <Label color="red" horizontal attached="top right">
              Working on
            </Label>
          </Card.Content>
          <Card.Content>
            <Card.Header>Grocery Delivery V2</Card.Header>
            <Card.Meta>E-Commerce Website</Card.Meta>
            <Card.Description>
              Expanding the functionality of the entire experience. Working on
              Retailer and Shopper portals.
            </Card.Description>
          </Card.Content>
          <Card.Content extra>
            <div className="ui two buttons">
              <Button basic color="black" href="" target="_blank">
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
              <Button
                basic
                color="black"
                href="https://github.com/hemeshvpatel/Grocery-Delivery-App-Frontend"
                target="_blank"
              >
                <Icon color="red" name="github" />
                GitHub
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
              <Button
                basic
                color="black"
                href="https://github.com/hemeshvpatel/AppleXchange"
                target="_blank"
              >
                <Icon color="red" name="github" />
                GitHub
              </Button>
            </Button.Group>
          </Card.Content>
        </Card>
      </Card.Group>
    </Container>
  );
}

export default Projects;
