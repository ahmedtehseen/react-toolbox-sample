import React from 'react';
import ReactDOM from 'react-dom';
import { Router, browserHistory } from 'react-router';
// routes
import routes from './routes';
// styles
import './index.css';


ReactDOM.render(
	  <Router history={browserHistory} routes={routes} />,
  document.getElementById('root')
);
