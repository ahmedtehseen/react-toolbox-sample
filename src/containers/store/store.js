import React, { Component } from 'react';
import Drawer from 'react-toolbox/lib/drawer/Drawer';
import FontIcon from 'react-toolbox/lib/font_icon/FontIcon';

// styles
import './store.css';

const DrawerMenu = (props) => {
	return (
		<div className='drawer-body'>
    	<div className='menu-item'>
    		<span className='menu-circle'>{props.placeholder}</span>
    		<span className='parent-menu'>{props.menu}</span>
    	</div>
    	{props.menuItems ? 
    	<div className='menu-sub-items'>
    		{props.menuItems.map((item, i) => {
    			return (
    				<a key={i} href='#'>{item}</a>
    			)
    		})}
    	</div> : ''}
    </div>
	)
}

const menus = [{
	label:1,
	menu:'COLLECTIONS',
	menuItems: ['Set-up', 'Design', 'Options']
}, {
	label:2,
	menu:'SHOPPING'
}, {
	label:3,
	menu:'CHECKOUT'
}, {
	label:4,
	menu:'THANK YOU PAGE'
}]
export class Store extends Component {
  state = {
    active: false
  };

  handleToggle = () => {
    this.setState({active: !this.state.active});
  };

  render () {
    return (
      <div>
        <Drawer active={true} withOverlay={false} className='store-drawer'>
        	<div className='drawer-header'>
	        	<img src={process.env.PUBLIC_URL+"/logo.png"} alt='logo' />
	          <h2 className='store-heading'>STORE</h2>
          </div>
          {menus.map((menu, i) => {
          	return (
          		<DrawerMenu key={i} placeholder={menu.label} menu={menu.menu} menuItems={menu.menuItems}/>
          	);
          })}
          <div className='drawer-footer'>
          	<FontIcon value='stay_current_portrait' className='font-icon'/>
    				<FontIcon value='desktop_mac' className='font-icon'/>
          </div>
        </Drawer>
      </div>
    );
  }
}
