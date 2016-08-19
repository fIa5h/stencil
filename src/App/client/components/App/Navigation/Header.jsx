import {Component} from 'react';

export default class Header extends Component {

	//
	//
	//
	//
	componentDidMount() {

		console.log('Header');
		//our theme was passed into this component from
		//App.jsx as theme={this.theme} and is now available
		//under this.props.theme, which we use in the render method

		$('.button-collapse').sideNav({
			menuWidth: 300, // Default is 240
			//closeOnClick: true // Closes side-nav on <a> clicks, useful for Angular/Meteor
			//the above property is broken, the main nav closes on full width screen
			//thus leaving a large blank space... We have a patch below
		});

		//so here's our fix for the above issue...
		$('.menu-link').click(function() {
			if (window.innerWidth < 993) {
				$('.button-collapse').sideNav('hide');
			}
		});

		//detracts the search bar when blurred
		$("#search").blur(function() {
			$('#search-card').removeClass('focused');
		});

		//expands the search bar when focused
		$("#search").focus(function() {
			$('#search-card').addClass('focused');
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

		console.log(Meteor.user());

		//this is for the nav menu
		var translate = 'translateX(-100 %)';
		var cssTranslate = {
			transform: translate
		}

		return (
			<div className="header-container-div">

				<header>
					<nav className={this.props.theme + " top-nav"}>
						<div className="nav-wrapper">
							<a href="#" className="brand-logo center">Stencil</a>
						</div>
					</nav>
					<div className="container">
						<a href="#" data-activates="nav-mobile" className="button-collapse top-nav full hide-on-large-only">
							<i className="material-icons">menu</i>
						</a>
					</div>
					<ul id="nav-mobile" className="side-nav fixed hoverable" style={{
						cssTranslate
					}}>
						<li className="logo">
							<a id="logo-wrapper" className="waves-effect menu-link flow-text modal-trigger" href="#modal1">
								<h5 className="brand-header bold">{Meteor.user().username}
									&nbsp;
									<i className="material-icons flow-text">expand_more</i>
								</h5>
								<span className="grey-text text-lighten-1">{Meteor.user().emails[0].address}</span>
							</a>
						</li>
						<li className="search">
							<div id="search-card" className="search-wrapper card hoverable">
								<input id="search"/>
								<i className="material-icons">search</i>
								<div className="search-results"></div>
							</div>
						</li>
						<li className="bold">
							<a className="waves-effect menu-link" href="/">
								Landing Page
							</a>
						</li>
						<li className="bold">
							<a className="waves-effect menu-link" href="/home">
								Home
							</a>
						</li>
						<li className="bold">
							<a className="waves-effect menu-link" href="/home/anotherPage">
								Another Page
							</a>
						</li>
						<li className="bold">
							<a className="waves-effect menu-link" onClick={function() {
								Materialize.toast('Yo, something happened...', 5000, 'rounded toast-bottom-right')
							}}>Notification</a>
						</li>
					</ul>
				</header>
			</div>
		);
	}
	//
	//
	//
	//

};
