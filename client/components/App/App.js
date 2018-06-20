import React, {Component} from 'react';
import logo from '../../assets/logo.svg';
import { Link } from 'react-router-dom';
import './App.css';


class App extends Component {
    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                </header>
                {this.props.children}
            </div>
        );
    }
}

export default App;
