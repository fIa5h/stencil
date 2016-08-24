import {Component} from 'react';

export default class LandingPageHeader extends Component {

	//
	//
	componentDidMount() {
		console.log('LandingPageHeader');
	}
	//
	//

	//
	//
	renderButton() {
		if (!!Meteor.user()) {
			return (
				<a className="waves-effect btn blue modal-trigger hoverable" href="/home">
					Home&nbsp;
				</a>
			);
		} else {
			return (
				<a className="waves-effect btn blue modal-trigger hoverable" href="#joinModal">
					Sign In&nbsp;
				</a>
			);
		}
	}
	//
	//

	//
	//
	render() {

		//this is for the nav menu
		var translate = 'translateX(-100 %)';
		var cssTranslate = {
			transform: translate
		}

		return (
			<div>
				<div className="navbar-fixed hoverable">
					<nav>
						<div className={this.props.theme.baseColor + " nav-wrapper"}>
							<span className="left landing-header-logo-container">
								<img className="landing-header-logo" src="img/FSL-layered.png"/>
							</span>
							<ul className="right">
								<li>
									{this.renderButton()}
								</li>
							</ul>
						</div>
					</nav>
				</div>
			</div>
		);
	}
	//
	//

};
