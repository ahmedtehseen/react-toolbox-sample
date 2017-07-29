import React, { Component } from 'react';
import theme from '../../../assets/react-toolbox/theme';
import ThemeProvider from 'react-toolbox/lib/ThemeProvider';

import {Navbar} from '../navbar/navbar'
import { FooterComponent } from '../footer/footer';
// styles
import '../../../assets/react-toolbox/theme.css'
import './app.css';

export class App extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
      	<div>
	      	<Navbar />
	        {this.props.children}
          <FooterComponent />
        </div>
      </ThemeProvider>
    );
  }
}
