import React, { Component } from 'react';
import IconMenu from 'react-toolbox/lib/menu/IconMenu';
import MenuItem from 'react-toolbox/lib/menu/MenuItem';
import Button from 'react-toolbox/lib/button/Button';

// styles
import './footer.css'

export class FooterForOrders extends Component {
	render() {
		return (
			<footer className='main-footer'>
				<p>10 selected</p>
				<span></span>
				<div className='footer-btns'>
					<Button label='Delete'/>
					<Button label='Download' raised primary/>
					<IconMenu icon='more_vert' className='footer-menu' position='bottomRight' menuRipple>
				    <MenuItem value='delete' icon='clear' caption='Delete' />
				    <MenuItem value='addCollection' icon='add_box' caption='Add to Collection' />
				  </IconMenu>
			  </div>
			</footer>
		)
	}
}