import React, { Component } from 'react';
import IconButton from 'react-toolbox/lib/button/IconButton';
import Button from 'react-toolbox/lib/button/Button';
import Dropdown from 'react-toolbox/lib/dropdown/Dropdown';
import DatePicker from 'react-toolbox/lib/date_picker/DatePicker';

// OrdersList
import { OrdersList } from './ordersList';
import { FooterForOrders } from '../footer/footerForOrders';
// styles
import './orders.css';

export class Orders extends Component {
	constructor(props) {
		super(props);
		this.state = {
			countrySelected: 'OR',
			date: '',
			date2: ''
		}
	}

	countries = [
    { value: 'OR', label: 'ORDERS' }
  ];

  handleCountryChange = (value) => {
    this.setState({countrySelected: value});
  };

	render() {
		return (	
			<div className='products-container'>
				<div className='products-filter'>
					<Dropdown
						className='filter-dropdown'
	          source={this.countries}
	          onChange={this.handleCountryChange}
	          value={this.state.countrySelected}
	        />
	        <div className='products-collection'>
	        	<span>
	        		<IconButton 
								icon='filter_list'
							/>
	        	</span>&nbsp;
	        	<span>Filter by: </span>&nbsp;&nbsp;
	        	<DatePicker
		          onChange={(date) => this.setState({ date })}
		          value={this.state.date}
		          sundayFirstDayOfWeek
		        />
	        	&nbsp;<span> to </span>&nbsp;
	        	<DatePicker
		          onChange={(date2) => this.setState({ date2 })}
		          value={this.state.date2}
		          sundayFirstDayOfWeek
		        />
	        </div>
	        <div className='show-products'>
	        	<OrdersList />
	        </div>
	        <div className='add-product-button'>
	        	<Button icon='add' floating accent/>
	        </div>
				</div>
				<FooterForOrders />
			</div>
		);
	};
};