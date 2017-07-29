import React, { Component } from 'react';
import IconMenu from 'react-toolbox/lib/menu/IconMenu';
import MenuItem from 'react-toolbox/lib/menu/MenuItem';
import MenuDivider from 'react-toolbox/lib/menu/MenuDivider';
import Button from 'react-toolbox/lib/button/Button';

// styles
import './footer.css'

export class FooterComponent extends Component {
	render() {
		return (
			<footer className='main-footer'>
				<p>10 selected</p>
				<span></span>
				<div>
					<Button label='Delete' raised primary/>
					<IconMenu icon='more_vert' position='bottomRight' menuRipple>
				    <MenuItem value='download' icon='get_app' caption='Download' />
				  </IconMenu>
			  </div>
			</footer>
		)
	}
}