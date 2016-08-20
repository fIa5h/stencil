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
				<a className="waves-effect btn white black-text modal-trigger hoverable" href="/home">
					Home&nbsp;
				</a>
			);
		} else {
			return (
				<a className="waves-effect btn white black-text modal-trigger hoverable" href="#joinModal">
					Join&nbsp;
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
							{/*<a id="landing-header-logo" className={this.props.theme.textColor + " brand-logo left"}>Logo</a>*/}
							<img id="landing-header-logo" className="brand-logo left" src="img/trophy-material-sm.png"/>
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
