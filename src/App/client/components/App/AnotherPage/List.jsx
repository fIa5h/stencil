import {Component} from 'react';

//here's an example of a boilerplate component
//that can be hooked up to the backend, similar
//to the ToDos

export default class List extends Component {

	//
	//
	componentDidMount() {
		console.log('List');
	}
	//
	//

	//
	//
	renderNotes() {
		return (
			<li className="collection-item">Rendered List Item</li>
		);
	}
	//
	//

	//
	//
	render() {
		return (
			<div>
				<ul className="collection">
					<li className="collection-item">Static List Item</li>
					{this.renderNotes()}
				</ul>
			</div>
		);
	}
	//
	//
};
