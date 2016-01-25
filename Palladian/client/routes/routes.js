Router.configure({
  layoutTemplate: 'Application'
});

Router.route('/', function(){
  this.render('Dashboard');
});

Router.route('/register/', function() {
  this.render('Register')
});

Router.route('/services/', function() {
  this.render ('Services');
});