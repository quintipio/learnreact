import React, { Component } from 'react';
import logo from '../../rsc/logo.svg';
import '../../css/App/App.css';
import Clock from "./Clock";


class App extends Component {
    render() {
        return (
            <div className="App">
                <div className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <h2>Welcome to React</h2>
                </div>
                <p className="App-intro">
                    Hello {this.props.name}
                </p>
                <Clock/>
            </div>
        );
    }
}

export default App;
