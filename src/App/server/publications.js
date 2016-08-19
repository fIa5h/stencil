import { Meteor } from 'meteor/meteor';
import Tasks from 'App/collections/Tasks';

// This code only runs on the server
Meteor.publish('tasks', function () {
  //notice we had to declare Tasks above
  //as we created this custom collection,
  //unlike a protected/global style collection
  //as seen in the next publish {Meteor.publish 'user'}
  return Tasks.find({
    $or: [
      { private: {$ne: true} },
      { owner: this.userId }
    ]
  });
});

// This code only runs on the server
Meteor.publish('user', function () {
    //notice the call is using Meteor.users
    //this publishes directly to the Meteor.user()
    //method on the client side, as 'Users' is a
    //protected collection
    return Meteor.users.find( {_id: this.userId} , {fields:{'emails': 1, 'username': 1}} );
});
