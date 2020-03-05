import * as React from 'react';
import {MyInputWithMathFloor} from './hoc';

export class ParentComponent extends React.Component {

	constructor() {
		super();
		this.state = {
			value: '',
			usdRate: 2.2,
			eurRate: 2.4,
	};
		this.usdRef = React.createRef();
		this.eurRef = React.createRef();
	}

	exchange(type, value) {
		if (type === 'Dollar') {
			return value * this.state.usdRate;
		}
		return value * this.state.eurRate;
	}

	updateData = (type, value)=> {
		this.setState(() => ({
			value: this.exchange(type, value)
		}));
	};
	componentDidMount() {
		console.log(this.usdRef.current);
		this.eurRef.current.focus();
	}

	render() {
		const dollarResult = this.state.value / this.state.usdRate;
		const euroResult = this.state.value / this.state.eurRate;
		return (
			<div>
				<MyInputWithMathFloor ref={this.usdRef} type="Dollar" value ={dollarResult} onChange={this.updateData}/>
				<MyInputWithMathFloor ref={this.eurRef} type="Euro" value ={euroResult} onChange={this.updateData}/>
			</div>
		)
	}
}
