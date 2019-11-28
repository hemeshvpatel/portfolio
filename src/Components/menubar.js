import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Menu, Icon } from "semantic-ui-react";

class MenuBar extends Component {
  state = {};

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  render() {
    const { activeItem } = this.state;

    return (
      <Menu fluid widths={5} icon="labeled">
        <Menu.Item
          as={Link}
          to="/"
          name="About Me"
          active={activeItem === "About Me"}
          onClick={this.handleItemClick}
        >
          {/* <Image src="avatar.png" size="mini" /> */}
          <Icon name="user secret" />
          About Me
        </Menu.Item>

        <Menu.Item
          as={Link}
          to="/projects"
          name="Projects"
          active={activeItem === "Projects"}
          onClick={this.handleItemClick}
        >
          <Icon name="folder open outline" />
          Projects
        </Menu.Item>

        <Menu.Item
          as={Link}
          to="/resume"
          name="Resume"
          active={activeItem === "Resume"}
          onClick={this.handleItemClick}
        >
          <Icon name="file alternate outline" />
          {/* <Icon name="file pdf outline" /> */}
          Resume
        </Menu.Item>

        <Menu.Item
          name="LinkedIn"
          active={activeItem === "LinkedIn"}
          onClick={this.handleItemClick}
          href="https://www.linkedin.com/in/hemeshvpatel/"
          target="_blank"
        >
          <Icon name="linkedin" />
          LinkedIn
        </Menu.Item>

        <Menu.Item
          name="GitHub"
          active={activeItem === "GitHub"}
          onClick={this.handleItemClick}
          href="https://github.com/hemeshvpatel"
          target="_blank"
        >
          <Icon name="github" />
          GitHub
        </Menu.Item>
      </Menu>
    );
  }
}

export default MenuBar;
