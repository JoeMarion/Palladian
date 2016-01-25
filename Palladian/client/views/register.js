Template.Register.events({
  'submit form': function(e) {
    event.preventDefault();
    var firstnameVar = e.target.firstName.value;
    var lastnameVar = e.target.lastName.value;
    var addressVar = e.target.address.value;
    var emailVar = e.target.registerEmail.value;
    var passwordVar = e.target.registerPassword.value;
    Accounts.createUser({
      email: emailVar,
      password: passwordVar
    });
  }
});