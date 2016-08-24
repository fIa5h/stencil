import {Component} from 'react';

export default class Controls extends Component {

	//
	//
	//
	//
	componentDidMount() {

		console.log('Controls');
		//our theme was passed into this component from
		//App.jsx as theme={this.theme} and is now available
		//under this.props.theme, which we use in the render method

		// $('.button-collapse').sideNav({
		// 	menuWidth: 300, // Default is 240
		// 	//closeOnClick: true // Closes side-nav on <a> clicks, useful for Angular/Meteor
		// 	//the above property is broken, the main nav closes on full width screen
		// 	//thus leaving a large blank space... We have a patch below
		// });

		//so here's our fix for the above issue...
		// $('.menu-link').click(function() {
		// 	if (window.innerWidth < 993) {
		// 		$('.button-collapse').sideNav('hide');
		// 	}
		// });

		$('#lever-switch').change(function() {
			if (this.checked) {
				$('.control-icon').removeClass('inactive', 500);
			} else {
				$('.control-icon').addClass('inactive', 500);
			}
		});

	}
	//
	//
	//
	//

	//
	//
	//
	//
	render() {

		//console.log(Meteor.user());

		return (
			<div class="center">
				<a className="brand-logo center">
					<img className="header-logo" src="/img/FSL-crest-md.png"/>
				</a>
				<ul className="right">
					<li>
						<div className="switch">
							<label>
								<input type="checkbox" id="lever-switch" defaultChecked/>
								<span className="lever inset-lever"></span>
							</label>
						</div>
					</li>
					<li>
						<a href="#" className={this.props.theme.baseColor}>
							<i className="material-icons control-icon">equalizer</i>
						</a>
					</li>
					<li>
						<a href="#" className={this.props.theme.baseColor}>
							<i className="material-icons control-icon">notifications</i>
						</a>
					</li>
				</ul>
			</div>
		);
	}
	//
	//
	//
	//

};
