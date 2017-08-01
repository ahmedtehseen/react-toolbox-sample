import React, { Component } from 'react';
import theme from '../../../assets/react-toolbox/theme';
import ThemeProvider from 'react-toolbox/lib/ThemeProvider';

import {Navbar} from '../navbar/navbar'
// styles
import '../../../assets/react-toolbox/theme.css'
import './app.css';

export class App extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
      	<div className='App'>
	      	<Navbar />
	        {this.props.children}
        </div>
      </ThemeProvider>
    );
  }
}
