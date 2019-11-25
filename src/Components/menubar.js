import React, { Component } from "react";
import { Menu } from "semantic-ui-react";

class MenuBar extends Component {
  state = {};

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  render() {
    const { activeItem } = this.state;

    return (
      <Menu fluid>
        <Menu.Item>
          <img src="avatar.png" alt="" />
        </Menu.Item>

        <Menu.Item
          name="Resume"
          active={activeItem === "Resume"}
          onClick={this.handleItemClick}
        >
          Resume
        </Menu.Item>

        <Menu.Item
          name="Projects"
          active={activeItem === "Projects"}
          onClick={this.handleItemClick}
        >
          Projects
        </Menu.Item>

        <Menu.Item
          name="LinkedIn"
          active={activeItem === "LinkedIn"}
          onClick={this.handleItemClick}
        >
          LinkedIn
        </Menu.Item>

        <Menu.Item
          name="GitHub"
          active={activeItem === "GitHub"}
          onClick={this.handleItemClick}
        >
          GitHub
        </Menu.Item>
      </Menu>
    );
  }
}

export default MenuBar;
