import {Component, PropTypes} from 'react';
import Item from './Item';

export default class List extends Component {

	//Don't understand PropTypes? See the link below:
	//http://wecodetheweb.com/2015/06/02/why-react-proptypes-are-important/
	static propTypes = {
		tasks: PropTypes.array.isRequired
	};
	//
	//

	//
	//
	render() {
		return (
			<ul className="collection">
				{this.props.tasks.map(task => <Item key={task._id} task={task}/>)}
			</ul>
		);
	}
	//
	//
}
