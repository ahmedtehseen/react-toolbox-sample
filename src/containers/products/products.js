import React, { Component } from 'react';
import { Link } from 'react-router';
import IconButton from 'react-toolbox/lib/button/IconButton';
import Button from 'react-toolbox/lib/button/Button';
import Dropdown from 'react-toolbox/lib/dropdown/Dropdown';
import Chip from 'react-toolbox/lib/chip/Chip';

import { ProductList } from './list';
import { ProductGrid } from './grid';
import { FooterComponent } from '../footer/footer';
// styles
import './products.css';

export class Products extends Component {
	constructor(props) {
		super(props);
		this.state = {
			view: true,
			countrySelected: 'PR'
		}
	}

	countries = [
    { value: 'PR', label: 'PRODUCTS' }
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
			<div>
			<div className='products-container'>
				<div className='toggle-button'>
					<IconButton 
						icon={this.state.view ? 'view_module' : 'list'} 
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
	        	{this.state.view ? <ProductList/> :
	        	<div className='show-products'>
	        	<ProductGrid/>
	        	<ProductGrid/>
	        	<ProductGrid/>
	        	<ProductGrid/>
	        	<ProductGrid/>
	        	<ProductGrid/>
	        	</div>
	        	}
	        </div>
	        <div className='add-product-button'>
	        	<Link to='/add-product'>
	        	<Button icon='add' floating accent/>
	        	</Link>
	        </div>
				</div>
			</div>
			<FooterComponent/>
			</div>
		);
	};
};