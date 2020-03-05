import * as React from 'react';

export class MyInput extends React.Component {

	handleValue = (e) => {
		this.props.onChange(this.props.type, e.target.value);
	};

	render() {
		return (
			<div className="container">
				<label>{this.props.type}
					<input type="number"
				       value={this.props.rounding(this.props.value)}
				       onChange={this.handleValue}/>
				</label>
			</div>
	);
	}
}
