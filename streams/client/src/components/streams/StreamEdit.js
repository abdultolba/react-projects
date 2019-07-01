import React, { Component } from "react";
import { connect } from "react-redux";

import StreamForm from "./StreamForm";
import { fetchStream, editStream } from "../../actions";

class StreamEdit extends Component {
  componentDidMount() {
    this.props.fetchStream(this.props.match.params.id);
  }

  onSubmit = formValues => {
    this.props.editStream(this.props.match.params.id, formValues);
  };

  render() {
    if (!this.props.stream) {
      return <div>Loading...</div>;
    } else {
			const { title, description } = this.props.stream;
      return (
        <div>
          <h4 className="ui dividing header">Edit a Stream</h4>
          <StreamForm onSubmit={this.onSubmit} initialValues={{title, description}}/>
        </div>
      );
    }
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    stream: state.streams[ownProps.match.params.id]
  };
};

export default connect(
  mapStateToProps,
  { fetchStream, editStream }
)(StreamEdit);
