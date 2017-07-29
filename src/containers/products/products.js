import React, { Component } from 'react';
import IconButton from 'react-toolbox/lib/button/IconButton';
import Button from 'react-toolbox/lib/button/Button';
import Dropdown from 'react-toolbox/lib/dropdown/Dropdown';
import Chip from 'react-toolbox/lib/chip/Chip';

// productList
// import { ProductList } from './list';
// styles
import './products.css';

export class Products extends Component {
	constructor(props) {
		super(props);
		this.state = {
			view: false,
			countrySelected: 'PR'
		}
	}

	countries = [
    { value: 'PR', label: 'Products' }
  ];

  handleCountryChange = (value) => {
    this.setState({countrySelected: value});
  };

	handleClick() {
		this.setState({
			view: !this.state.view
		})
	}

	render() {
		return (	
			<div className='products-container'>
				<div className='toggle-button'>
					<IconButton 
						icon={this.state.view ? 'view_list' : 'view_module'} 
						onClick={() => this.handleClick() } 
						className='toggle-icon'
					/>
				</div>
				<div className='products-filter'>
					<Dropdown
						className='filter-dropdown'
	          source={this.countries}
	          onChange={this.handleCountryChange}
	          value={this.state.countrySelected}
	        />
	        <div className='products-collection'>
	        	<span>Collections: </span>&nbsp;
	        	<Chip deletable>Deletable Chip</Chip>
	        	<Chip deletable>Deletable Chip</Chip>
	        	<Chip deletable>Deletable Chip</Chip>
	        	<IconButton
	        		icon='create'
	        	/>
	        </div>
	        <div className='show-products'>
	        	
	        </div>
	        <div className='add-product-button'>
	        	<Button icon='add' floating accent/>
	        </div>
				</div>
			</div>
		);
	};
};