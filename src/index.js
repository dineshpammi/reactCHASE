import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';  //bootstrap

import './index.css';
// import Appp from './App';
import * as serviceWorker from './serviceWorker';
import St from './start';
import Two from './two';
import Th from './three';
import Fou from './four';
import Fiv from './five';

// ReactDOM.render(<Appp /> ,document.getElementById('root'));
ReactDOM.render(<St /> ,document.getElementById('root1'));
ReactDOM.render(<Two /> ,document.getElementById('root2'));
ReactDOM.render(<Th /> ,document.getElementById('root3'));
ReactDOM.render(<Fou /> ,document.getElementById('root4'));
ReactDOM.render(<Fiv /> ,document.getElementById('root5'));



serviceWorker.unregister();
