import {Component} from 'react';

export default class JoinModal extends Component {

	//
	//
	getMeteorData() {
		return {currentUser: Meteor.user()};
	}
	//
	//

	//
	//
	componentDidMount() {
		//
		console.log('JoinModal');
		//
		$('.modal-trigger').leanModal({
			dismissible: true, // Modal can be dismissed by clicking outside of the modal
			opacity: .5, // Opacity of modal background
			in_duration: 300, // Transition in duration
			out_duration: 200, // Transition out duration
			//starting_top: '4%', // Starting top style attribute
			//ending_top: '10%', // Ending top style attribute
			//ready: function() { alert('Ready'); }, // Callback for Modal open
			//complete: function() { alert('Closed'); } // Callback for Modal close
		});
		//
	}
	//
	//

	//
	//
	render() {
		return (
			<div id="joinModal" className="modal center" style={{
				height: '100% !important',
				overflowY: 'hidden !important'
			}}>
				<div className="modal-content">
					<Accounts.ui.LoginForm/>
				</div>
			</div>
		);
	}
	//
	//

};
