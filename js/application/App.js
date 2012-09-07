define([
  'libs/backbone',
  'controllers/HomeController'
], function(Backbone, HomeController) {

  var App = Backbone.Router.extend({

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
      this.navigate('home', {trigger: true});
      //this.controllers.home.show();
      console.warn('route not found');
    }

  });

  return App;

});