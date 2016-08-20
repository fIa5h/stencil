import {Component} from 'react';
export default class LandingPageFooter extends Component {

	//
	//
	componentDidMount() {
		console.log('LandingPageFooter');
	}
	//
	//

	//
	//
	render() {

		return (
			<div>
				<footer className={this.props.theme.baseColor + "page-footer"} id="landing-footer">
					<div className="container">
						<div className="row">
							<div className="col l6 s12">
								<h5 className={this.props.theme.textColor}>Footer Content</h5>
								<p className="grey-text text-lighten-4">You can use rows and columns here to organize your footer content.</p>
							</div>
							<div className="col l4 offset-l2 s12">
								<h5 className={this.props.theme.textColor}>Links</h5>
								<ul>
									<li>
										<a className={this.props.theme.textColor} href="#!">Link 1</a>
									</li>
									<li>
										<a className={this.props.theme.textColor} href="#!">Link 2</a>
									</li>
									<li>
										<a className={this.props.theme.textColor} href="#!">Link 3</a>
									</li>
									<li>
										<a className={this.props.theme.textColor} href="#!">Link 4</a>
									</li>
								</ul>
							</div>
						</div>
					</div>
					<div className="footer-copyright">
						<div className="container">
							© 2014 Copyright Text
							<a className="grey-text text-lighten-4 right" href="#!">More Links</a>
						</div>
					</div>
				</footer>
			</div>
		);
	}
	//
	//

};
