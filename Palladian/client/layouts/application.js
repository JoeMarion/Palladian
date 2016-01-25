Template.application.helpers({
  firstName: function(){
    var users = Meteor.users.find({}, { fields: {emails: 1} }).fetch();
    console.log(currentUser)

    // var currUser = UserProfile.find(emails: currentUser)
    // console.log(UserProfile.find({email: users()}))
  }
});