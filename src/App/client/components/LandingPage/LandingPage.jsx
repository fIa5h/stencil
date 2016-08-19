import {Component} from 'react';

//want to import secific css? see below:
//import 'App/client/css/App.import.css'

import LandingPageFooter from './LandingPageFooter';
import LandingPageHeader from './LandingPageHeader';
import JoinModal from './JoinModal';

export default class LandingPage extends Component {

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

				<LandingPageHeader/>

				<div className="section-container green white-text hoverable z-depth-1">
					<div className="container">
						<div className="col s12 center">
							<p className="white-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam scelerisque id nunc nec volutpat.</p>
						</div>
					</div>
				</div>

				<div className="parallax-container">
					<div className="parallax"><img src="img/stadium-blue.jpg"/></div>
					<div className="valign-wrapper">
						<h2 className="valign center white-text">This should be vertically aligned</h2>
					</div>
				</div>

				<div className="blue darken-1 section-container z-depth-2">
					<div className="container">
						<div className="section">

							<div className="row white-text">
								<div className="col s12 m4">
									<div className="icon-block">
										<h1 className="center">
											<i className="material-icons md-48">flash_on</i>
										</h1>
										<h5 className="center">Speeds up development</h5>

										<p className="white-text">We did most of the heavy lifting for you to provide a default stylings that incorporate our custom components. Additionally, we refined animations and transitions to provide a smoother experience for developers.</p>
									</div>
								</div>

								<div className="col s12 m4">
									<div className="icon-block">
										<h1 className="center">
											<i className="material-icons md-48">group</i>
										</h1>
										<h5 className="center">User Experience Focused</h5>

										<p className="white-text">By utilizing elements and principles of Material Design, we were able to create a framework that incorporates components and animations that provide more feedback to users. Additionally, a single underlying responsive system across all platforms allow for a more unified user experience.</p>
									</div>
								</div>

								<div className="col s12 m4">
									<div className="icon-block">
										<h1 className="center">
											<i className="material-icons md-48">settings</i>
										</h1>
										<h5 className="center">Easy to work with</h5>

										<p className="white-text">We have provided detailed documentation as well as specific code examples to help new users get started. We are also always open to feedback and can answer any questions a user may have about Materialize.</p>
									</div>
								</div>
							</div>

						</div>
					</div>
				</div>

				<div className="parallax-container">
					<div className="parallax"><img src="img/grass-blue.jpg"/></div>
					<div className="valign-wrapper">
						<h2 className="valign center white-text">This should be vertically aligned</h2>
					</div>
				</div>

				<LandingPageFooter/>
				<JoinModal/>

			</div>

		)
	};
}
