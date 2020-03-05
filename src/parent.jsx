import * as React from 'react';
import {MyInput} from "./input";
import { MyInputWithHOC } from './hoc';

export class ParentComponent extends React.Component {
	state = {
		value: '',
	};

	updateData = (e) => {
		this.setState(() => ({
			value: e,
		}));
	};

	render() {

		return (
			<div>
				<MyInputWithHOC type="Dollar" value ={this.state.value} onChange={this.updateData}/>
				<MyInputWithHOC type="Euro" value ={this.state.value} onChange={this.updateData}/>
			</div>
		)
	}
}
