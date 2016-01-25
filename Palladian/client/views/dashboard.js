Template.Dashboard.events({
  'click .logout': function(e){
    e.preventDefault();
    Meteor.logout();
  }
});