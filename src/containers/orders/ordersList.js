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
  {date: '12/6/2017', name: 'NameOne', amount: '$100', type: 'Clothing', status: 'Delivered'},
  {date: '12/6/2017', name: 'NameTwo', amount: '$200', type: 'Watches', status: 'Recieved'},
  {date: '12/6/2017', name: 'NameThree', amount: '$400', type: 'Shoes', status: 'Pending'},
  {date: '12/6/2017', name: 'NameFour', amount: '$300', type: 'Grocery', status: 'Canceled'},
  {date: '12/6/2017', name: 'NameFive', amount: '$600', type: 'Meal', status: 'Delivered'},
  {date: '12/6/2017', name: 'NameSix', amount: '$500', type: 'Juices', status: 'Recieved'},
  {date: '12/6/2017', name: 'NameSeven', amount: '$400', type: 'Drinks', status: 'Pending'},
];


export class OrdersList extends Component {

  state = {
    selected: ['NameOne']
  };

  handleRowSelect = selected => {
    this.setState({ selected: selected.map(item => data[item].name) });
  };

	render() {
		return (
			<Table multiSelectable={true} onRowSelect={this.handleRowSelect}>
    		<TableHead>
          <TableCell>Date</TableCell>
    			<TableCell>Name</TableCell>
          <TableCell>Amount</TableCell>
    			<TableCell>Type</TableCell>
    			<TableCell>Status</TableCell>
    			<TableCell>{headerMenu}</TableCell>
    		</TableHead>
    		{data.map((item, idx) => (
          <TableRow key={idx} selected={this.state.selected.indexOf(item.name) !== -1}>
            <TableCell>{item.date}</TableCell>
            <TableCell>{item.name}</TableCell>
            <TableCell>{item.amount}</TableCell>
            <TableCell>{item.type}</TableCell>
            <TableCell>{item.status}</TableCell>
            <TableCell>{menu}</TableCell>
          </TableRow>
        ))}
    	</Table>
		);
	};
};