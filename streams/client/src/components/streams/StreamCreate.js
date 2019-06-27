import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";

class StreamCreate extends Component {
  renderInput({ input, label, type, id }) {
    return (
      <div className="field">
        <label htmlFor={id}>{label}</label>
        <input {...input} placeholder={label} type={type} id={id} />
      </div>
    );
  }

  render() {
    return (
      <form className="ui form">
        <Field
          name="title"
          type="text"
          component={this.renderInput}
          label="Title"
          id="title"
        />
        <Field
          name="description"
          type="text"
          component={this.renderInput}
          label="Description"
          id="description"
        />
      </form>
    );
  }
}

export default reduxForm({
  form: "streamCreate"
})(StreamCreate);
