define([
  'config/config', 
  'libs/underscore', 
  'libs/backbone', 
  'application/App', 
  'fonts/fonts', 
  'domReady!', 
  'libs/modernizr', 
  'libs/bootstrap'
], function(config, _, Backbone, App, fonts){

  var Launch = {

    initialize: function() {
      document.title = config.appTitle;
      fonts.update();
      window[config.appName] = {};
      window[config.appName].app = new App();
      window[config.appName].app.initialize();
      Backbone.history.start();
    }

  };

  return Launch;
  
});