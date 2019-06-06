import React, {Component} from 'react';

import Spinner from './Spinner';
import './SeasonDisplay.css'

const seasonConfig = {
    summer: {
        text: "Let's hit the beach",
        iconName: 'sun'
    },
    winter: {
        text: "Burr, it's cold",
        iconName: 'snowflake'
    }
};

const getSeason = (lat, month) => {
    if(month >= 3 && month <= 8){
        return lat >= 0 ? 'summer' : 'winter';
    } else {
        return lat >= 0 ? 'winter' : 'summer';
    }
}

class SeasonDisplay extends Component {
    state = {season: null};

    componentDidMount(){
        this.setState({season: getSeason(this.props.lat, new Date().getMonth())});
    }

    render(){
        if(!this.state.season) return <Spinner/>;

        return (
            <div className={`season-display ${this.state.season}`}>
                <i className={`icon-left massive ${seasonConfig[this.state.season].iconName} icon`}></i>
                <h1>{seasonConfig[this.state.season].text}</h1>
                <i className={`icon-right massive ${seasonConfig[this.state.season].iconName} icon`}></i>
            </div>
        );
    }
}

export default SeasonDisplay;

