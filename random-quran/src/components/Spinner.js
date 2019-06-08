import React, { Component } from 'react';

class Spinner extends Component {
    render(){
        return (
            <div className="ui active dimmer">
                <div className="ui big text loader">
                    {this.props.message}
                </div>
            </div>
        );
    }
}

// If no message is provided as a prop, the
// component will render the message 'Loading...'
Spinner.defaultProps = {
    message: 'Loading ayah...'
};

export default Spinner;