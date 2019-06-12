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

Spinner.defaultProps = {
    message: 'Retrieving Ayah...'
};

export default Spinner;