define([
  'libs/backbone'
], function(Backbone) {
  
  var HomeModel = Backbone.Model.extend({

    url: 'fixtures/home.json',

    defaults: {
      oi: 'Oi!'
    } 

  });

  return HomeModel;

});