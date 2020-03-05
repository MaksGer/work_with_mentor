import * as React from 'react';
import {MyInput} from "./input";

export const withConvertion = (WrappedComponent) => {
	return class extends React.Component {
		render() {
			return <WrappedComponent {...this.props}/>
		}
	}
};

export const MyInputWithHOC = withConvertion(MyInput);
