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
        <Card>
          <Card.Content>
            <Image
              //   floated="right"
              size="mini"
              src="images/shoppingcart.png"
            />
            <Card.Header>Grocery Delivery</Card.Header>
            <Card.Meta>E-Commerce Website</Card.Meta>
            <Card.Description>
              Capstone project at Flatiron School
            </Card.Description>
          </Card.Content>
          <Card.Content extra>
            <div className="ui two buttons">
              <Button basic color="green">
                View Live Version
              </Button>
              <Button basic color="red">
                View on GitHub
              </Button>
            </div>
          </Card.Content>
        </Card>
        <Card>
          <Card.Content>
            <Image
              floated="right"
              size="mini"
              src="/images/avatar/large/molly.png"
            />
            <Card.Header>AppleXchange</Card.Header>
            <Card.Meta>Trading Website</Card.Meta>
            <Card.Description>
              A website where you can buy/sell/trade Apple Products
            </Card.Description>
          </Card.Content>
          <Card.Content extra>
            <div className="ui two buttons">
              <Button basic color="green">
                Live
              </Button>
              <Button basic color="red">
                GitHub
              </Button>
            </div>
          </Card.Content>
        </Card>
        <Card>
          <Card.Content>
            <Image
              floated="right"
              size="mini"
              src="/images/avatar/large/jenny.jpg"
            />
            <Card.Header>Active Project</Card.Header>
            <Card.Meta>New Project</Card.Meta>
            <Card.Description>Details to be announced soon!</Card.Description>
          </Card.Content>
          <Card.Content extra>
            <div className="ui two buttons">
              <Button basic color="green">
                Live
              </Button>
              <Button basic color="red">
                <Icon color="black" name="github" />
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
