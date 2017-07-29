import React, { Component } from 'react';
import Table from 'react-toolbox/lib/table/Table';
import IconMenu from 'react-toolbox/lib/menu/IconMenu';
import MenuItem from 'react-toolbox/lib/menu/MenuItem';
import Checkbox from 'react-toolbox/lib/checkbox/Checkbox';

const menu = () => (
	<IconMenu icon='more_vert' position='topLeft' menuRipple>
    <MenuItem value='download' icon='get_app' caption='Download' />
    <MenuItem value='help' icon='favorite' caption='Favorite' />
    <MenuItem value='settings' icon='open_in_browser' caption='Open in app' />
    <MenuItem value='signout' icon='delete' caption='Delete' disabled />
  </IconMenu>
)

export class ProductList extends Component {
	UserModel = {
	  name: {type: String},
	  made: {type: String},
	  categorey: {type: String},
	  // options: {type: Object}
	};

	source = [
		{ name: 'T-shirt', made: 'Boss', categorey: 'Shirts'}
	]
	render() {
		return (
			<Table
				model={this.UserModel}
				source={this.state.source}
			/>
		);
	};
};