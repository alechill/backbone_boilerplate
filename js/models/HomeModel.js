define([
  'libs/backbone'
], function(Backbone) {
  
  var HomeModel = Backbone.Model.extend({

    url: 'fixtures/home.json',

    defaults: {
      name: 'Mr Majeeka'
    } 

  });

  return HomeModel;

});