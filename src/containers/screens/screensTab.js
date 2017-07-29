import React, { Component } from 'react';
import Tabs from 'react-toolbox/lib/tabs/Tabs';
import Tab from 'react-toolbox/lib/tabs/Tab';

// screens
import { Products } from '../products/products'
// styles
import './screensTab.css';

export class ScreensTab extends Component {
	state = {
    fixedIndex: 0
  };

  handleFixedTabChange = (index) => {
    this.setState({fixedIndex: index});
  };

  render() {
    return (
		  <Tabs index={this.state.fixedIndex} onChange={this.handleFixedTabChange} className='tab_bar' inverse>
	      <Tab label='products'>
          <Products/>
        </Tab>
	      <Tab label='orders'><small>Second Content</small></Tab>
	      <Tab label='store'><small>Third Content</small></Tab>
	    </Tabs>
    );
  }
}
