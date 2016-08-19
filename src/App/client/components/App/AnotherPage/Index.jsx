import {Component} from 'react';
import List from './List'

export default class Index extends Component {

	//
	//
	componentDidMount() {
		console.log('AnotherPage');
	}
	//
	//

	//
	//
	render() {
		return (
			<div>
				<hr/>
				<h3>Another Page!</h3>
				<hr/>
				<List/>
			</div>
		);
	}
	//
	//
};
