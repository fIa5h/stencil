import {Component} from 'react';
import Controls from './Controls';

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

		//we are going to use collapsible sections on our nav
		//so we need to initialize that below
		$('.collapsible').collapsible();

		$('.button-collapse').sideNav({
			menuWidth: 300, // Default is 240
			//closeOnClick: true // Closes side-nav on <a> clicks, useful for Angular/Meteor
			//the above property is broken, the main nav closes on full width screen
			//thus leaving a large blank space... We have a patch below
		});

		//so here's our fix for the above issue...
		$('.menu-link-collapse').click(function() {
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
					<nav className={this.props.theme.baseColor + " top-nav"}>
						<div className="nav-wrapper">
							<Controls theme={this.props.theme}/>
						</div>
					</nav>
					<div className="container">
						<a id="mobile-menu-toggle-button" href="#" data-activates="nav-mobile" className="button-collapse top-nav full hide-on-large-only">
							<i className="material-icons">menu</i>
						</a>
					</div>
					<ul id="nav-mobile" className="side-nav fixed hoverable" style={{
						cssTranslate
					}}>

						<li className="center user-nav-li">
							<a className="waves-effect modal-trigger nav-link" href="#modal1">
								<div className="avatar-image-container center">
									<img src={Meteor.user().avatar || "/img/blank-avatar.png"} alt="" className="circle avatar-image"/>
								</div>
								<div className="bold big-text-2 center menu-user-info">
									{"@" + Meteor.user().username}&nbsp;<span className="nav-icon">
										<i className="material-icons">expand_more</i>
									</span>
								</div>
								<div className="menu-user-info grey-text text-lighten-1">
									{Meteor.user().emails
										? Meteor.user().emails[0].address
										: 'No verified email...'}
								</div>
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
							<a className="waves-effect menu-link menu-link-collapse" href="/home">
								Home
							</a>
						</li>

						<li className="bold">
							<ul className="collapsible collapsible-accordion">
								<li className="bold">
									<a className="collapsible-header menu-link waves-effect">Dynasties
									</a>
									<div className="collapsible-body">
										<ul>
											<li>
												<a className="waves-effect menu-link menu-link-collapse" href="/home/dynasty">
													Dynasty
												</a>
											</li>
										</ul>
									</div>
								</li>
							</ul>
						</li>

						<li className="bold">
							<ul className="collapsible collapsible-accordion">
								<li className="bold">
									<a className="collapsible-header menu-link waves-effect">Leagues
									</a>
									<div className="collapsible-body">
										<ul>
											<li>
												<a className="waves-effect menu-link menu-link-collapse" href="/home/league">
													League
												</a>
											</li>
										</ul>
									</div>
								</li>
							</ul>
						</li>

						<li className="bold">
							<a className="waves-effect menu-link" onClick={function() {
								var message = '<span class="big-text-1"><b>@user</b></span>&nbsp;&nbsp;Yo yo yo yo yo, this text is to long to fit inside this notification this text is to long to fit inside this notification...';
								var length = 5000;
								var classes = 'grey darken-4 toast-bottom-right z-depth-5 padding-3 toast-truncate';
								Materialize.toast(message, length, classes);
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
