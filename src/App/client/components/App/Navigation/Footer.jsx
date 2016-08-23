import {Component} from 'react';
export default class Footer extends Component {

	componentDidMount() {
		console.log('Footer');
		//our theme was passed into this component from
		//App.jsx as theme={this.theme} and is now available
		//under this.props.theme
	}

	render() {

		return (
			<div className="app-footer-container">
				<footer className={this.props.theme.baseColor + "page-footer"}>
					<div className="container">
						<div className="row">
							<div className="col l4 s4 center">
								<h5 className={this.props.theme.textColor}>About</h5>
								<ul>
									<li>
										<a className="grey-text text-lighten-4" href="#!">The FSL</a>
									</li>
									<li>
										<a className="grey-text text-lighten-4" href="#!">Careers</a>
									</li>
									<li>
										<a className="grey-text text-lighten-4" href="#!">Blog</a>
									</li>
									<li>
										<a className="grey-text text-lighten-4" href="#!">Press</a>
									</li>
								</ul>
							</div>
							<div className="col l4 s4">
								<div className="valign-wrapper">
									<div className="valign center"><img className="responsive-img footer-logo" src="img/FSL-crest-md.png"/></div>
								</div>
							</div>
							<div className="col l4 s4 center">
								<h5 className={this.props.theme.textColor}>Help</h5>
								<ul>
									<li>
										<a className="grey-text text-lighten-4" href="#!">Rules</a>
									</li>
									<li>
										<a className="grey-text text-lighten-4" href="#!">Support</a>
									</li>
									<li>
										<a className="grey-text text-lighten-4" href="#!">Guidelines</a>
									</li>
									<li>
										<a className="grey-text text-lighten-4" href="#!">Forum</a>
									</li>
								</ul>
							</div>
						</div>
					</div>
					<div className="footer-copyright">
						<div className="container">
							© Fantasy Sports Land 2016
							<a className="grey-text text-lighten-4 right" href="#!">All Rights Reserved</a>
						</div>
					</div>
				</footer>
			</div>
		);
	}

};
