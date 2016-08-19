import {Component} from 'react';
import ReactMixin from 'react-mixin';

import Control from './Control';
import List from './List';

import Tasks from 'App/collections/Tasks';

@ReactMixin.decorate(ReactMeteorData)
export default class Index extends Component {

	//
	//
	state = {
		hideCompleted: false
	};
	//
	//

	//
	//
	getMeteorData() {
		Meteor.subscribe('tasks');

		let taskFilter = {};

		if (this.state.hideCompleted) {
			taskFilter.checked = {
				$ne: true
			};
		}

		const tasks = Tasks.find(taskFilter, {
			sort: {
				createdAt: -1
			}
		}).fetch();
		const incompleteCount = Tasks.find({
			checked: {
				$ne: true
			}
		}).count();

		return {tasks, incompleteCount, user: Meteor.user()};
	}
	//
	//

	//
	//
	handleToggleHideCompleted = (e) => {
		this.setState({hideCompleted: e.target.checked});
	};
	//
	//

	//
	//
	render() {
		if (!this.data.tasks) {
			// loading
			return null;
		}

		return (

			<div>
				<h3>Home!</h3>
				<hr/>
				<p className="center">
					Below are publicly subscribed events.
				</p>
				<br/>
				<p className="center">
					If you create another user and log in on a separate incognito window, you will see this section of the page update in real time, with user permissions enforced.
				</p>
				<br/>
				<p className="center">
					For tasks that you've authored, you can delete them or make them public/private. For tasks that another user has authored, you can only mark any task as completed.
				</p>
				<hr/>
				<div className="container">
					<Control incompleteCount={this.data.incompleteCount} hideCompleted={this.state.hideCompleted} toggleHideCompleted={this.handleToggleHideCompleted}/>
					<List tasks={this.data.tasks}/>
				</div>
			</div>
		);
	}
	//
	//
};
