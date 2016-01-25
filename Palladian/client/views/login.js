Template.login.events({
  'submit form': function(e) {
    e.preventDefault();
    var emailVar = e.target.loginEmail.value;
    var passwordVar = e.target.loginPassword.value;
    Meteor.loginWithPassword(emailVar, passwordVar);
  }
});