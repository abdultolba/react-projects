import React, {Component} from 'react';
import ReactDOM from 'react-dom';

const getButtonText = () => {
    return 'Click On Me!';
} 

const buttonText = {text: 'Click Me!'};

class App extends Component {

    render(){
        return (
            <div>
                <label className="label" htmlFor="name">
                    Enter Name:
                </label>
                <input id="name" type="text"></input>
                <button style={{backgroundColor: 'blue', color: 'white'}}>
                    {buttonText.text}
                </button>
            </div>
        );
    }
}

ReactDOM.render(<App/>, document.getElementById('root'));