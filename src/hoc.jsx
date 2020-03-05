import * as React from 'react';
import {MyInput} from "./input";

export const withMathFloor = (WrappedComponent) => {
	return class extends React.Component {

		rounding(value) {
			return Math.floor(value * 100) / 100
		}

		render() {
			return <WrappedComponent rounding={this.rounding} {... this.props}/>
		}
	}
};

export const MyInputWithMathFloor = withMathFloor(MyInput);
