define([
  'libs/underscore',
  'libs/backbone',
  'models/HomeModel',
  'views/HomeView'
], function(_, Backbone, HomeModel, HomeView) {

  var HomeController = Backbone.Router.extend({

    routes: {
      'home': 'show'
    },

    initialize: function() {
      this.model = new HomeModel();
      this.view = new HomeView({model: this.model});
    },

    show: function() {
      this.model.fetch({
        success: _.bind(function(){
          this.view.render();
        }, this)
      });
    }

  });

  return HomeController;

});