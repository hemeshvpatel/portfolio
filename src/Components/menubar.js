import React, { Component } from "react";
import { Menu, Icon, Image } from "semantic-ui-react";

class MenuBar extends Component {
  state = {};

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  render() {
    const { activeItem } = this.state;

    return (
      <Menu fluid widths={5} icon="labeled">
        <Menu.Item>
          <Image src="avatar.png" size="mini" />
        </Menu.Item>

        <Menu.Item
          name="Resume"
          active={activeItem === "Resume"}
          onClick={this.handleItemClick}
        >
          <Icon name="file alternate outline" />
          {/* <Icon name="file pdf outline" /> */}
          Resume
        </Menu.Item>

        <Menu.Item
          name="Projects"
          active={activeItem === "Projects"}
          onClick={this.handleItemClick}
        >
          <Icon name="folder open outline" />
          Projects
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
