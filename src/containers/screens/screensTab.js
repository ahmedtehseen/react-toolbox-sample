import React, { Component } from 'react';
import Tabs from 'react-toolbox/lib/tabs/Tabs';
import Tab from 'react-toolbox/lib/tabs/Tab';

// screens
import { Products } from '../products/products';
import { Orders } from '../orders/orders';
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
		  <Tabs 
        index={this.state.fixedIndex} 
        onChange={this.handleFixedTabChange} 
        className='tab_bar' 
        disableAnimatedBottomBorder={false}
        inverse
      >
	      <Tab className='screen-tabs' label='products'>
          <Products/>
        </Tab>
	      <Tab className='screen-tabs' label='orders'>
          <Orders />
        </Tab>
	      <Tab className='screen-tabs' label='store'><small>Third Content</small></Tab>
	    </Tabs>
    );
  }
}
