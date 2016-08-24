import React from 'react';
import {FlowRouter} from 'meteor/meteorhacks:flow-router';
import {mount} from 'react-mounter';
import LandingPage from './components/LandingPage/LandingPage';
import App from './components/App/Index';
import Todo from './components/App/Todo/Index';
import Dynasty from './components/App/Dynasty/Index';
import League from './components/App/League/Index';
import {Accounts} from 'meteor/std:accounts-material';

//
//
//
//how do we want our dynamic account forms
//to behave?
var accountsUIConfigOptions = {
	passwordSignupFields: "USERNAME_AND_EMAIL",
	minimumPasswordLength: 7,
	//onSignedInHook: () => FlowRouter.go('/app'),
	//onSignedOutHook: () => FlowRouter.go('/')
	onSignedInHook: function() {
		FlowRouter.go('/home');
		$('#joinModal').closeModal();
		$('#modal1').closeModal();
		$(".lean-overlay").each(function() {
			$(this).fadeOut('slow');
		});
	},
	onSignedOutHook: function() {
		FlowRouter.go('/');
		$('#joinModal').closeModal();
		$('#modal1').closeModal();
		$(".lean-overlay").each(function() {
			$(this).fadeOut('slow');
		});
	}
}
//intialize our settings
Accounts.ui.config(accountsUIConfigOptions);
//
//
//

//
//
//
//	GOOGLE ANALYTICS
//	GOOGLE ANALYTICS
//	GOOGLE ANALYTICS
var gaScript = 'https://www.google-analytics.com/analytics.js';
DocHead.loadScript(gaScript, function() {
	ga('create', 'UA-82998797-1', 'auto');
	ga('send', 'pageview');
});
//	GOOGLE ANALYTICS
//	GOOGLE ANALYTICS
//	GOOGLE ANALYTICS
//
//
//

//
//
//	ROUTES
//	ROUTES
//	ROUTES
//
//

//
//
// LANDING PAGE
// LANDING PAGE
// LANDING PAGE
FlowRouter.route('/', {
	action() {

		//
		//if they're logged in
		//send them to /home
		if (Meteor.user()) {
			FlowRouter.go('/home');
		}
		//
		//

		//
		//remove old tags
		DocHead.removeDocHeadAddedTags();
		//
		//

		//
		//Update our meta information
		DocHead.setTitle("FSL: The Fantasy Sports League - Football | Baseball | Basketball");
		var metaInfo = {
			name: "description",
			content: "The FSL is the only multi-sport, realtime, social fantasy sports platform. Start building your FSL dynasty today!"
		};
		DocHead.addMeta(metaInfo);
		//
		//

		//passing our dynamic account login form
		//as a prop to the LandingPage
		mount(LandingPage, {userControls: <Accounts.ui.LoginForm/>});
		//
		//

		//
		//Update Google Analytics
		FlowRouter.triggers.enter([(context) => {
				ga('send', 'pageview', {path: context.path});
			}
		]);
		//
		//
	}
});
// LANDING PAGE
// LANDING PAGE
// LANDING PAGE
//
//
//

//
//
//
// HOME HOME HOME
// HOME HOME HOME
// HOME HOME HOME
var authenitcatedRoutes = FlowRouter.group({prefix: "/home", name: "home"});

//
//
//
//  /home
//  /home
//  /home
authenitcatedRoutes.route('/', {
	name: 'home',
	action: function() {

		//
		//remove old tags
		DocHead.removeDocHeadAddedTags();
		//
		//

		//
		//Update our meta information
		DocHead.setTitle("FSL: Home");
		var metaInfo = {
			name: "description",
			content: ""
		};
		DocHead.addMeta(metaInfo);
		//
		//

		//
		//
		mount(App, {
			//passing our dynamic account login form
			//as a prop to be used in the nested component
			content: () => (
				<Todo userControls={< Accounts.ui.LoginForm />}/>
			)
		});
		//
		//

		//
		//Update Google Analytics
		FlowRouter.triggers.enter([(context) => {
				ga('send', 'pageview', {path: context.path});
			}
		]);
		//
		//
	}
});
//  /home
//  /home
//  /home
//
//
//
//  /home/dynasty
//  /home/dynasty
//  /home/dynasty
authenitcatedRoutes.route('/dynasty', {
	name: 'home.dynasty',
	action: function() {

		//
		//remove old tags
		DocHead.removeDocHeadAddedTags();
		//
		//

		//
		//Update our meta information
		DocHead.setTitle("FSL: Dynasty");
		var metaInfo = {
			name: "description",
			content: ""
		};
		DocHead.addMeta(metaInfo);
		//
		//

		//
		//
		mount(App, {
			//passing our dynamic account login form
			//as a prop to be used in the nested component
			content: () => (
				<Dynasty userControls={< Accounts.ui.LoginForm />}/>
			)
		});
		//
		//

		//
		//Update Google Analytics
		FlowRouter.triggers.enter([(context) => {
				ga('send', 'pageview', {path: context.path});
			}
		]);
		//
		//
	}
});
//  /home/dynasty
//  /home/dynasty
//  /home/dynasty
//
//
//
//  /home/league
//  /home/league
//  /home/league
authenitcatedRoutes.route('/league', {
	name: 'home.league',
	action: function() {

		//
		//remove old tags
		DocHead.removeDocHeadAddedTags();
		//
		//

		//
		//Update our meta information
		DocHead.setTitle("FSL: League");
		var metaInfo = {
			name: "description",
			content: ""
		};
		DocHead.addMeta(metaInfo);
		//
		//

		//
		//
		mount(App, {
			//passing our dynamic account login form
			//as a prop to be used in the nested component
			content: () => (
				<League userControls={< Accounts.ui.LoginForm />}/>
			)
		});
		//
		//

		//
		//Update Google Analytics
		FlowRouter.triggers.enter([(context) => {
				ga('send', 'pageview', {path: context.path});
			}
		]);
		//
		//
	}
});
//  /home/league
//  /home/league
//  /home/league
//
//
// /HOME /HOME /HOME
// /HOME /HOME /HOME
// /HOME /HOME /HOME
//
//
//
