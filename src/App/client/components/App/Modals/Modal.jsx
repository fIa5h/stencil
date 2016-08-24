import {Component} from 'react';
export default class Modal extends Component {

	componentDidMount() {
		console.log('Modal');
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

	render() {

		return (
			<div id="modal1" className="modal">
				<div className="modal-content center">
					<b>
						<h4>{Meteor.user().username}</h4>
					</b>
					<h5 className="grey-text text-lighten-1 flow-text">
						{Meteor.user().emails
							? Meteor.user().emails[0].address
							: 'No verified email...'}
					</h5>
					<br/> {this.props.userControls}
				</div>
			</div>
		);
	}

};
