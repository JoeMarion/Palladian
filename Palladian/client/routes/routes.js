Router.configure({
  layoutTemplate: 'Application'
});

Router.route('/', function(){
  this.render('Dashboard');
});

Router.route('/services/', function() {
  this.render ('Services');
});

Router.route('/massage/', function() {
  this.render ('Massage')
});

Router.route('/hair/', function() {
  this.render ('Hair')
});

Router.route('/waxing/', function() {
  this.render ('Waxing')
});

Router.route('/tanning/', function() {
  this.render ('Tanning')
});

Router.route('/skincare/', function() {
  this.render ('SkinCare')
});

Router.route('/nails/', function() {
  this.render ('Nails')
});