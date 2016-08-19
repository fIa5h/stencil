import {Component, PropTypes} from 'react';

export default class TodoHeader extends Component {

	//Don't understand PropTypes? See the link below:
	//http://wecodetheweb.com/2015/06/02/why-react-proptypes-are-important/
	static propTypes = {
		hideCompleted: PropTypes.bool,
		toggleHideCompleted: PropTypes.func.isRequired,
		incompleteCount: PropTypes.number.isRequired
	};
	//
	//

	//
	//
	handleSubmit(event) {
		// Prevent default browser form submit
		event.preventDefault();

		// Get value from form element
		var text = event.target.text.value;

		// Insert a task into the collection
		Meteor.call('Task.addTask', text);

		// Clear form
		event.target.text.value = '';
	}
	//
	//

	//
	//
	render() {
		let form = null;

		if (Meteor.userId()) {
			form = (
				<form className="newTask" onSubmit={this.handleSubmit.bind(this)}>
					<input type="text" name="text" placeholder="Type to add new tasks"/>
				</form>
			);
		} else {
			form = (
				<div>
					You must be logged in to create a todo!
				</div>
			);
		}

		return (
			<div>
				Todo List ({this.props.incompleteCount})
				<p>
					<input type="checkbox" id="hideCompleted" checked={this.props.hideCompleted} onChange={this.props.toggleHideCompleted}/>
					<label htmlFor="hideCompleted">Hide Completed Tasks</label>
				</p>
				{form}
			</div>
		);
	}
	//
	//
}
