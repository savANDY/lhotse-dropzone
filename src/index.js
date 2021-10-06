import React from 'react';
import ReactDOM from 'react-dom';
import Lhotse from './lhotse';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import {BrowserRouter as Router} from 'react-router-dom';

ReactDOM.render(
    <Router>
      <Lhotse/>
    </Router>,
    document.getElementById('root')
);
