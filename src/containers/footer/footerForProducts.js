import React, { Component } from 'react';
import Button from 'react-toolbox/lib/button/Button';

// styles
import './footer.css'

export class FooterComponent extends Component {
	render() {
		return (
			<footer className='main-footer'>
				<div className='products-footer-btns'>
					<Button label='NEXT' raised primary/>
			  </div>
			</footer>
		)
	}
}