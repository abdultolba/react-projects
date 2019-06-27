import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";

class StreamCreate extends Component {
  renderInput({ input, label, type, id, meta: { touched, error, warning} }) {
    return (
      <div className="field">
        <label htmlFor={id}>{label}</label>
        <input {...input} placeholder={label} type={type} id={id} />
				{touched &&
        ((error && <span>{error}</span>) ||
          (warning && <span>{warning}</span>))}
      </div>
    );
  }

  onSubmit = formValues => {
      console.log(formValues);
  }

  render() {
    return (
      <form className="ui form" onSubmit={this.props.handleSubmit(this.onSubmit)}>
          <h4 className="ui dividing header">Create a Stream</h4>
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

	if(!formValues.title){
		errors.title = 'You must enter a stream title.';
	}
	if(!formValues.description){
		errors.description = 'Please describe the stream.';
	}
	return errors;
};

export default reduxForm({
	form: "streamCreate",
	validate
})(StreamCreate);
