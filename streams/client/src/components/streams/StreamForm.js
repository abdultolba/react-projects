import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";

class StreamForm extends Component {
  renderInput = ({ input, label, type, id, meta }) => {
    const className = `field ${meta.error && meta.touched ? "error" : ""}`;
    return (
      <div className={className}>
        <label htmlFor={id}>{label}</label>
        <input
          {...input}
          autoComplete="off"
          placeholder={label}
          type={type}
          id={id}
        />
        {this.renderMessage(meta)}
      </div>
    );
  };

  renderMessage = ({ touched, error, warning }) => {
    if (touched && error) {
      return (
        <div className="ui error message">
          <div className="header">{error}</div>
        </div>
      );
    }
    if (touched && warning) {
      return (
        <div className="ui warning message">
          <div className="header">{warning}</div>
        </div>
      );
    }
  };

  onSubmit = formValues => {
    this.props.onSubmit(formValues);
  };

  render() {
    return (
      <form
        className="ui form error warning"
        onSubmit={this.props.handleSubmit(this.onSubmit)}
      >
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
        <button className="ui button primary">Submit</button>
      </form>
    );
  }
}

const validate = formValues => {
  const errors = {};

  if (!formValues.title) {
    errors.title = "You must enter a stream title.";
  }

  return errors;
};

const warn = formValues => {
  const warnings = {};

  if (!formValues.description) {
    warnings.description = "Please describe the stream.";
  }

  return warnings;
};

export default reduxForm({
  form: "streamForm",
  validate,
  warn
})(StreamForm);
