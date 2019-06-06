import React, { Component } from "react";
import Remarkable from "remarkable";
import './MarkdownEditor.css';

/**
 * This component renders a textarea that transforms markdown 
 * syntax to markdown. For a guide to markdown, refer to: 
 * https://guides.github.com/features/mastering-markdown/
 * @author abdultolba
 */
class MarkdownEditor extends Component {
  constructor(props) {
    super(props);
    this.state = { value: "Type some *markdown* here!" };
  }

  handleChange = e => {
    this.setState({
      value: e.target.value
    });
  };

  getRawMarkup() {
    const md = new Remarkable();
    return { __html: md.render(this.state.value) };
  }

  render() {
    return (
      <div className="container">
        <div className="input">
          <h3>Input</h3>
          <textarea
            className="input-text"
            onChange={this.handleChange}
            defaultValue={this.state.value}
          />
        </div>
        <div className="output">
          <h3>Markdown</h3>
          <div
            dangerouslySetInnerHTML={this.getRawMarkup()}
            className="output-text"
          />
        </div>
      </div>
    );
  }
}

export default MarkdownEditor;