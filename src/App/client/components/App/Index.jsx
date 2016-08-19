import {Component} from 'react';
import ReactMixin from 'react-mixin';
import Header from './Navigation/Header';
import Footer from './Navigation/Footer';

export default class Index extends Component {

	//see material colors here:
	//http://materializecss.com/color.html
	//don't pass any 'lighten' or 'accent'
	//attributes into the theme variable,
	//just the color name, i.e. 'red' or 'green'
	theme = 'blue';

	render() {
		return (
			<div className={this.theme + " lighten-5"}>
				<Header theme={this.theme}/>
				<main>
					<div className="container body-container">

						<div className="col s12 m12 l12 hoverable">
							<div className="card large z-depth-3">
								<div className="card-content">
									{this.props.content()}
								</div>
							</div>
						</div>
					</div>
				</main>
				<Footer theme={this.theme}/>
			</div>
		);
	}

};
