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
                    <h1 className="App-title">Welcome to React</h1>
                    <Link to='users'>Users</Link>
                    <Link to='chats'>Chats</Link>
                </header>
                <p className="App-intro">
                    {this.props.children}
                </p>
            </div>
        );
    }
}

export default App;
