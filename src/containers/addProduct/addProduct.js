import React, { Component } from 'react';
import Tabs from 'react-toolbox/lib/tabs/Tabs';
import Tab from 'react-toolbox/lib/tabs/Tab';

import { FooterComponent } from '../footer/footerForProducts';
import { AddProductComponent } from './addProductComponent';

// styles
import './addProduct.css';

export class AddProduct extends Component {
	state = {
    fixedIndex: 0
  };

  handleFixedTabChange = (index) => {
    this.setState({fixedIndex: index});
  };

  render() {
    return (
      <div>
  		  <Tabs 
          index={this.state.fixedIndex} 
          onChange={this.handleFixedTabChange} 
          className='products-tabbar' 
          disableAnimatedBottomBorder={false}
          inverse
        >
  	      <Tab className='product-screen-tabs' label='setup'>
            <AddProductComponent/>
          </Tab>
  	      <Tab className='product-screen-tabs' label='design'>
            <p></p>
          </Tab>
  	      <Tab className='product-screen-tabs' label='options'>
            <p></p>
          </Tab>
  	    </Tabs>
        <FooterComponent/>
      </div>
    );
  }
}
