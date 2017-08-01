import React, { Component } from 'react';
import Card from 'react-toolbox/lib/card/Card';
import CardMedia from 'react-toolbox/lib/card/CardMedia';
import CardActions from 'react-toolbox/lib/card/CardActions';
import RadioButton from 'react-toolbox/lib/radio/RadioButton';
import IconMenu from 'react-toolbox/lib/menu/IconMenu';
import MenuItem from 'react-toolbox/lib/menu/MenuItem';

export class ProductGrid extends Component {
	state = {
		checked: false 
	}

	handleFocus() {
		this.setState({
			checked: !this.state.checked
		})
	}

	render() {
		return (
			<div className='card-container'>
				<div className='btn-section'>
					<RadioButton value='somthing' checked={this.state.checked} onFocus={() => this.handleFocus()}/>
				</div>
				<div className='card-section'>
					<Card style={{width: '280px'}}>
				    <CardMedia
				      aspectRatio="square"
				      image="https://placeimg.com/800/450/nature"
				    />
				    <CardActions className='card-btns'>
				      <p>TEST</p>
				      <IconMenu icon='more_vert' position='bottomRight' menuRipple>
						    <MenuItem value='Details' caption='Details' />
						    <MenuItem value='Delete' caption='Delete' />
						  </IconMenu>
				    </CardActions>
				  </Card>
			  </div>
			</div>
		);
	};
};