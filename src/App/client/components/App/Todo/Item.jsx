import {Component, PropTypes} from 'react';

export default class Item extends Component {

	//Don't understand PropTypes? See the link below:
	//http://wecodetheweb.com/2015/06/02/why-react-proptypes-are-important/
	static propTypes = {
		task: PropTypes.object.isRequired
	};
	//
	//

	//
	//
	handleChecked(e) {
		// Set the checked property to the opposite of its current value
		Meteor.call('Task.setChecked', this.props.task._id, e.target.checked);
	}
	//
	//

	//
	//
	handleDelete() {
		Meteor.call('Task.deleteTask', this.props.task._id);
	}
	//
	//

	//
	//
	handleSetPrivate() {
		Meteor.call('Task.setPrivate', this.props.task._id, !this.props.task.private);
	}
	//
	//

	//
	//
	renderTogglePrivate() {

		var classVariable = 'btn btn-small waves-effect waves-light';
		if (Meteor.userId() !== this.props.task.owner) {
			classVariable += ' disabled';
		}

		return (
			<a className={classVariable} onClick={this.handleSetPrivate.bind(this)}>
				{this.props.task.private
					? 'Private'
					: 'Public'}
			</a>
		);
	}
	//
	//

	//
	//
	renderDeleteButton() {

		var classVariable = 'btn-floating waves-effect waves-light red';
		if (Meteor.userId() !== this.props.task.owner) {
			classVariable += ' disabled';
		}

		return (
			<span className="circle">
				<a className={classVariable} onClick={this.handleDelete.bind(this)}>
					<i className="material-icons">delete</i>
				</a>
			</span>
		);
	}
	//
	//

	//
	//
	render() {

		let itemClass = 'collection-item avatar';

		if (this.props.task.checked) {
			itemClass += ' checked';
		}

		if (this.props.task.private) {
			itemClass += ' private';
		}

		return (
			<li className={itemClass}>
				{this.renderDeleteButton()}
				<span className="title">{this.props.task.text}</span>
				<p>by:&nbsp;
					<b>{this.props.task.username}</b>
				</p>
				<span className="secondary-content">
					<span>
						<input type="checkbox" value={""} id={this.props.task._id + '-completed'} checked={this.props.task.checked} onChange={this.handleChecked.bind(this)} className="toggleChecked"/>
						<label htmlFor={this.props.task._id + '-completed'}>Completed
						</label>
					</span>
					<br/> {this.renderTogglePrivate()}
				</span>
			</li>

		);
	}
	//
	//
}
