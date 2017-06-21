import React from 'react';
import ReactDOM from 'react-dom';
import {App} from './App';
import './index.css';


 let taskList = [{description : 'break my bike', done : true}, {description : 'fix my bike', done : false}]

ReactDOM.render(<App tasks={taskList} />, document.getElementById('root'));


