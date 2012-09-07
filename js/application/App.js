define([
  'libs/backbone',
  'controllers/HomeController'
], function(Backbone, HomeController) {

  var Application = Backbone.Router.extend({

    routes: {
      '*actions': 'notFound'
    },

    controllers: {},

    initialize: function() {
      var name;
      this.controllers = {
        home: new HomeController()
      };
      for (name in this.controllers) {
        if (this.controllers.hasOwnProperty(name)) {
          this.controllers[name].initialize();
        }
      }
    },

    notFound: function() {
      console.warn('Route not found - redirecting to default');
      this.redirect('home');
    },

    redirect: function(route) {
      this.navigate(route, {trigger: true});
    }

  });

  return Application;

});