import React, { Component } from 'react';
import AppBar from 'react-toolbox/lib/app_bar/AppBar';
import Navigation from 'react-toolbox/lib/navigation/Navigation';
import IconButton from 'react-toolbox/lib/button/IconButton';
import IconMenu from 'react-toolbox/lib/menu/IconMenu';
import MenuItem from 'react-toolbox/lib/menu/MenuItem';
import MenuDivider from 'react-toolbox/lib/menu/MenuDivider';
import Avatar from 'react-toolbox/lib/avatar/Avatar';

// styles
import './navbar.css'

const avatar = <Avatar image='http://www.thewrap.com/wp-content/uploads/2015/08/margot-robbie-harley-quinn_main.jpg' alt='avatar' cover />

export class Navbar extends Component {
  render() {
    return (
    	<AppBar 
    		title={<img src={process.env.PUBLIC_URL+"/logo.png"} alt='logo' />} 
    		leftIcon='menu' 
    		className='nav_bar'
    	>
		    <Navigation type='horizontal'>
		      <IconButton icon='search' style={{ color: 'white' }}/>
		      <IconMenu icon={avatar} position='topRight' menuRipple>
				    <MenuItem value='download' icon='get_app' caption='Download' />
				    <MenuItem value='help' icon='favorite' caption='Favorite' />
				    <MenuItem value='settings' icon='open_in_browser' caption='Open in app' />
				    <MenuDivider />
				    <MenuItem value='signout' icon='delete' caption='Delete' disabled />
				  </IconMenu>
		    </Navigation>
		  </AppBar>
    );
  }
}
