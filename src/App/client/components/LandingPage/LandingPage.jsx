import {Component} from 'react';

import LandingPageFooter from './LandingPageFooter';
import LandingPageHeader from './LandingPageHeader';
import JoinModal from './JoinModal';

export default class LandingPage extends Component {

	theme = {
		textColor: " green-text text-accent-3 ",
		accentColor: " green accent-3 ",
		baseColor: " grey darken-3 "
	}

	//
	//
	componentDidMount() {

		console.log('LandingPage');

		$('.parallax').parallax();

	}
	//
	//

	//
	//
	render() {
		return (
			<div>

				<LandingPageHeader theme={this.theme}/>

				<div className="grey lighten-5 section-container white-text hoverable z-depth-1">
					<div className="container">
						<div className="col s12 center">
							<p className="big-text-2">
								<b>Don't have an invite to play?</b>&nbsp;&nbsp;&nbsp;<a className="waves-effect waves-light btn btn-small">Request invitation</a>
							</p>
						</div>
					</div>
				</div>

				<div className="parallax-container">
					<div className="parallax"><img src="img/stadium-bw.jpg"/></div>
					<div className={this.theme.accentColor + "valign-wrapper-background"}></div>
					<div className="valign-wrapper">
						<div className="valign center parallax-row">
							<img className="parallax-logo img-responsive" src="img/FSL-crest.png"/>
							<h3 className="white-text text-shadow bold uppercase">
								Build a fantasy sports dynasty
							</h3>
							<h5 className="white-text text-shadow uppercase bold hide-on-med-and-down">
								Start building your football, baseball and basketball keeper franchise.
							</h5>
							<a className="waves-effect btn-large modal-trigger hoverable big-text-4" href="#joinModal">
								Join&nbsp;
							</a>
						</div>
					</div>
				</div>

				<div className={this.theme.baseColor + " section-container z-depth-2"}>
					<div className="container">
						<div className="section">

							<div className="row white-text">
								<div className="col s12 m4">
									<div className="icon-block padding-3">
										<div className="center">
											<img className="landing-graphic" src="img/trophy-material.png"/>
										</div>
										<h5 className={this.theme.textColor + " center bold"}>Multi Sport Dynasties</h5>
										<p className="white-text big-text-2">Football, basketball and baseball. Want to trade LeBron James for Mike Trout or Adrian Peterson? Want to trade draft equity for players? You get where we're going with this... and you love it.</p>
									</div>
								</div>

								<div className="col s12 m4">
									<div className="icon-block padding-3">
										<div className="center">
											<img className="landing-graphic" src="img/commissioner-material.png"/>
										</div>
										<h5 className={this.theme.textColor + " center bold"}>Commissioners Rule</h5>

										<p className="white-text big-text-2">Power to the commissioners! Gone are the days of wishing your platform was more flexible. Welcome to the most commissioner friendly fantasy sports platform on the internet.</p>
									</div>
								</div>

								<div className="col s12 m4">
									<div className="icon-block padding-3">
										<div className="center">
											<img className="landing-graphic" src="img/live-material.png"/>
										</div>
										<h5 className={this.theme.textColor + " center bold"}>Real Time</h5>
										<p>Break out social and data</p>
										<p className="white-text big-text-2">Live data + live social = living fantasy leagues. Watch your team's stats pile up in real time. Smack talk your league in real time. See advanced realtime analytics. Your league is alive!</p>
									</div>
								</div>
							</div>

						</div>
					</div>
				</div>

				<div className="parallax-container">
					<div className="parallax"><img src="img/grass-bw.jpg"/></div>
					<div className={this.theme.accentColor + "valign-wrapper-background"}></div>
					<div className="valign-wrapper">
						<h2 className="valign center white-text">This should be vertically aligned</h2>
					</div>
				</div>

				<LandingPageFooter theme={this.theme}/>
				<JoinModal userControls={this.props.userControls}/>

			</div>

		)
	};
}
