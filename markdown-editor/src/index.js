import React, { Component } from "react";
import ReactDOM from "react-dom";

class MarkdownEditor extends Component {
  constructor(props) {
    super(props);
    this.state = { value: "" };
  }

  render() {
    return (
      <div className="container">
        <div className="input">
          <h3>Input</h3>
          <textarea className="input-text" defaultValue={this.state.value} />
        </div>
        <div className="output">
          <h3>Markdown</h3>
          <div className="output-text" />
        </div>
      </div>
    );
  }
}
