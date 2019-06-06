import React, { Component } from 'react';

import SeasonDisplay from './SeasonDisplay';
import Spinner from './Spinner';


class App extends Component {

    state = {
        lat: null,
        errorMessage: ''
    };

    componentDidMount() {
        // Prompt the user for this location and either set the location or error message
        window.navigator.geolocation.getCurrentPosition(
            (position) => this.setState({ lat: position.coords.latitude }),
            (err) => this.setState({ errorMessage: err.message })
        );
    }

    renderContent() {
        if(this.state.errorMessage && !this.state.lat)
            return <div>Error: {this.state.errorMessage}</div>;

        else if(this.state.lat && !this.state.errorMessage)
            return <SeasonDisplay lat={this.state.lat}/>;
        
        else return <Spinner message="Please accept the location request"/>;
    }
    
    render() {
        return (
            <div className="border red">
                {this.renderContent()}
            </div>
        );
    }
}

export default App;