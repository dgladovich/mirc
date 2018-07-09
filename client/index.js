import "babel-polyfill";
import React from 'react';
import ReactDOM from 'react-dom';
import './assets/index.css';
import registerServiceWorker from './utils/registerServiceWorker';
import Router from './router';
import 'react-mdl/extra/material.css';
import 'react-mdl/extra/material.js';


ReactDOM.render(<Router/>, document.getElementById('root'));
registerServiceWorker();
