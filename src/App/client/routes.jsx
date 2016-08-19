import React from 'react';
import {FlowRouter} from 'meteor/meteorhacks:flow-router';
import {mount} from 'react-mounter';
import LandingPage from './components/LandingPage/LandingPage';
import App from './components/App/Index';
import Todo from './components/App/Todo/Index';
import AnotherPage from './components/App/AnotherPage/Index';
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
// LANDING PAGE
FlowRouter.route('/', {
	action() {
		//passing our dynamic account login form
		//as a prop to the LandingPage
		mount(LandingPage, {userControls: <Accounts.ui.LoginForm/>});
	}
});
//
//
//

//
//
// APP
var authenitcatedRoutes = FlowRouter.group({prefix: "/home", name: "home"});

// handling /app
authenitcatedRoutes.route('/', {
	name: 'home',
	action: function() {
		mount(App, {
			//passing our dynamic account login form
			//as a prop to be used in the nested component
			content: () => (
				<Todo userControls={< Accounts.ui.LoginForm />}/>
			)
		});
	}
});

// handling /app/anotherPage
authenitcatedRoutes.route('/anotherPage', {
	name: 'home.anotherPage',
	action: function() {
		mount(App, {
			//passing our dynamic account login form
			//as a prop to be used in the nested component
			content: () => (
				<AnotherPage userControls={< Accounts.ui.LoginForm />}/>
			)
		});
	}
});
//
//
//
