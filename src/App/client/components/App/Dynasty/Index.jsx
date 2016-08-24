import {Component} from 'react';
import List from './List';
import Modal from '../Modals/Modal';

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
				<h3>Dynasty!</h3>
				<hr/>
				<List/>
				<Modal userControls={this.props.userControls}/>
			</div>
		);
	}
	//
	//
};
