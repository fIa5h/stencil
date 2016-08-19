import { Meteor } from 'meteor/meteor';
import Tasks from 'App/collections/Tasks';

// This code only runs on the server
Meteor.publish('tasks', function () {
  return Tasks.find({
    $or: [
      { private: {$ne: true} },
      { owner: this.userId }
    ]
  });
});
