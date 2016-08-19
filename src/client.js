import { FlowRouter } from 'meteor/meteorhacks:flow-router';

import 'App/client';

Meteor.startup(function() {
  FlowRouter.initialize();
});
