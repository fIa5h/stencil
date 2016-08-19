import {FlowRouter} from 'meteor/meteorhacks:flow-router';
import {mount} from 'react-mounter';
import LandingPage from './components/LandingPage/LandingPage';
import App from './components/App/Index';
import Todo from './components/App/Todo/Index';
import AnotherPage from './components/App/AnotherPage/Index';

//
//
// LANDING PAGE
FlowRouter.route('/', {
	action() {
		mount(LandingPage);
	}
});
//
//
//

//
//
// APP
var authenitcatedRoutes = FlowRouter.group({prefix: "/app", name: "app"});

// handling /app
authenitcatedRoutes.route('/', {
	name: 'app',
	action: function() {
		mount(App, {
			content: () => (<Todo/>)
		});
	}
});

// handling /app/anotherPage
authenitcatedRoutes.route('/anotherPage', {
	name: 'app.anotherPage',
	action: function() {
		mount(App, {
			content: () => (<AnotherPage/>)
		});
	}
});
//
//
//
