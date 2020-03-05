import * as React from 'react';

export class MyInput extends React.Component {
	constructor(props) {
		super(props);

		// this.handleChange = this.handleChange.bind(this);
	//
	}


	handleValue = (e) => {
		this.props.onChange(e.target.value);
	};

	render() {
		return (
			<label>{this.props.type}
			<input type="text"
		              value={this.props.value}
		              onChange={this.handleValue}/>
			</label>
	);
	}
}
