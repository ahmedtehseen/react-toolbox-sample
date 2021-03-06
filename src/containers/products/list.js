import React, { Component } from 'react';
import Table from 'react-toolbox/lib/table/Table';
import TableHead from 'react-toolbox/lib/table/TableHead';
import TableRow from 'react-toolbox/lib/table/TableRow';
import TableCell from 'react-toolbox/lib/table/TableCell';
import IconMenu from 'react-toolbox/lib/menu/IconMenu';
import MenuItem from 'react-toolbox/lib/menu/MenuItem';

const headerMenu =
  <IconMenu icon='more_vert' position='topLeft' menuRipple className='header-menu'>
    <MenuItem value='Details' caption='Details' />
    <MenuItem value='Delete' caption='Delete' />
  </IconMenu>

const menu = 
	<IconMenu icon='more_vert' position='topLeft' menuRipple>
    <MenuItem value='Details' caption='Details' />
    <MenuItem value='Delete' caption='Delete' />
  </IconMenu>

const data = [
  {name: 'NameOne', product: 'Gucci', category: 'A'},
  {name: 'NameTwo', product: 'Hugo Boss', category: 'B'},
  {name: 'NameThree', product: 'ABC', category: 'C'},
  {name: 'NameFour', product: 'XYZ', category: 'D'},
  {name: 'NameFive', product: 'T&T', category: 'A'},
  {name: 'NameSix', product: 'ZnZ', category: 'B'},
];

export class ProductList extends Component {

  state = {
    selected: ['NameOne']
  };

  handleRowSelect = selected => {
    this.setState({ selected: selected.map(item => data[item].name) });
  };

	render() {
		return (
			<Table multiSelectable onRowSelect={this.handleRowSelect}>
    		<TableHead>
    			<TableCell>Name</TableCell>
    			<TableCell>Product</TableCell>
    			<TableCell>Category</TableCell>
    			<TableCell>{headerMenu}</TableCell>
    		</TableHead>
    		{data.map((item, idx) => (
          <TableRow key={idx} selected={this.state.selected.indexOf(item.name) !== -1}>
            <TableCell>{item.name}</TableCell>
            <TableCell>{item.product}</TableCell>
            <TableCell>{item.category}</TableCell>
            <TableCell>{menu}</TableCell>
          </TableRow>
        ))}
    	</Table>
		);
	};
};