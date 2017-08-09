import React, { Component } from 'react';
import FontIcon from 'react-toolbox/lib/font_icon/FontIcon';
import Input from 'react-toolbox/lib/input/Input';
import Dropdown from 'react-toolbox/lib/dropdown/Dropdown';
import Button from 'react-toolbox/lib/button/Button';
import { UploadField } from '@navjobs/upload'


const weeks = [
  { value: 'monday', label: 'Monday' },
  { value: 'tuesday', label: 'Tuesday'},
  { value: 'wednesday', label: 'Wednesday'},
  { value: 'thursday', label: 'Thursday'},
  { value: 'friday', label: 'Friday'},
  { value: 'saturday', label: 'Saturday'},
  { value: 'sunday', label: 'Sunday'}, 
];

export class AddProductComponent extends Component {
	state = { 
		value: 'monday',
		topBox: true,
		middleBox: false,
		topFields: false,
		bottomFields: false
	};

	handleChange = (value) => {
    this.setState({value: value});
  };

	render() {
		return (
			<div className='add-container'>
				<div className='back-button-continer'>
					{this.state.middleBox ?
					<Button 
						icon='keyboard_arrow_left' 
						className='back-button' 
						label='Back' 
						flat
						onClick={() => this.setState({ topBox: true, middleBox: false })} 
					/>
					: ''}
					{this.state.topFields ?
					<Button 
						icon='keyboard_arrow_left' 
						className='back-button' 
						label='Back' 
						flat
						onClick={() => this.setState({ topFields: false, bottomFields: false , middleBox: true })} 
					/>
					: ''}
				</div>
				<p className='product-heading' style={{ }}>Add a Product</p>
				{this.state.topBox ?
				<div className='product-top-box'>
					<div className='box-left' onClick={() => this.setState({ topBox:false, middleBox: true })}>
	          <img src={process.env.PUBLIC_URL+'/uploadbox.jpg'} alt='uploadbox'/>
						<span>DIGITAL</span>
						<span>(PDF, SASS, MEMBERSHIP)</span>
					</div>
					<span className='divider'></span>
					<div className='box-right' onClick={() => this.setState({ topBox:false, middleBox: true })}>
						<img src={process.env.PUBLIC_URL+'/mailbox.jpg'} alt='mailbox'/>
						<span>PHYSICAL</span>
						<span>(T-shirt, Membership)</span>
					</div>
				</div> : ''}

				{this.state.middleBox ?
				<div className='product-middle-box'>
					<div className='box-left' onClick={() => this.setState({ topFields: true, middleBox: false })}>
	          <img src={process.env.PUBLIC_URL+'/mailbox.jpg'} alt='mailbox'/>
						<span>One-Time</span>
						<span>Start selling today</span>
					</div>
					<span className='divider'></span>
					<div className='box-middle' onClick={() => this.setState({ topFields: true, middleBox: false })}>
						<FontIcon value='cached' className='upload-fonts'/>
						<span>Subscription</span>
						<span>Charge on a recuring basis</span>
					</div>
					<span className='divider'></span>
					<div className='box-right' onClick={() => this.setState({ topFields: true, middleBox: false })}>
						<FontIcon value='timer' className='upload-fonts'/>
						<span>Pre-Order</span>
						<span>Start selling before a release date</span>
					</div>
				</div> : '' }

				{this.state.topFields ?
				<div className='fields-top-container'>
					 <Input className='right-input' type='text' label='Name of Product'/>
					 <Input className='middle-input' type='text' label='Price' onKeyPress={() => this.setState({ bottomFields: true})}/>
					 <span>/</span>
					 <Dropdown
					 	className='month-dropdown'
		        onChange={this.handleChange}
		        source={weeks}
		        label='Every'
		        value={this.state.value}
		      />
				</div>: ''}

				{this.state.bottomFields ? 
				<div className='fields-bottom-container'>
					<span>...For</span>
			  	<Input className='input-months' type='text'/>
			  	<span>months</span>
				</div> : ''}

				<div className='upload-box'>
					<UploadField
				    onFiles={files => console.log(files)}
				    containerProps={{
				      className: 'resume_import'
				    }}
				    uploadProps={{
				      accept: '.pdf,.doc,.docx,.txt,.rtf,.jpg,.png,.gif',
				    }}
				  >
	         	<FontIcon value='cloud_upload' className='upload-fonts'/>
						<span>CHOOSE YOUR FILES</span>
					</UploadField>
				</div>
			</div>
		);
	};
};