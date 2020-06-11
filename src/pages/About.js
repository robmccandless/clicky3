import React, {Component} from "react";
import {Box} from "../dummy/Box";

export class About extends Component {
  constructor() {
    super();
    this.state = {
      people: ["Justin", "Robert", "Tom Brady"],
    };
  }

  _handleClick = (e) => {
    this.setState({
      people: this.state.people.filter((person) => person != e.text),
    });
  };

  render() {
    return (
      <div>
        <h1>About</h1>
        {this.state.people.map((person, index) => (
          <Box key={index} text={person} onClick={this._handleClick} />
        ))}
      </div>
    );
  }
}
