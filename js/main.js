define([], function() {

  require.config({
    enforceDefine: true,
    paths: {
      jquery: 'libs/jquery',
      templates: '../templates'
    },
    shim: {
      'libs/underscore': {
        exports: '_'
      },
      'libs/backbone': {
        deps: ['libs/underscore', 'jquery'],
        exports: 'Backbone'
      },
      'libs/handlebars': {
        exports: 'Handlebars'
      },
      'fonts/cufon': {
        exports: 'Cufon'
      },
      'fonts/Bebas_400': {
        deps: ['fonts/cufon'],
        exports: 'Cufon'
      }
    }
  });

  require(['config/config', 'libs/backbone'], function(config){

    document.title = config.appTitle;


    require(['libs/backbone', 'application/App', 'fonts/fonts', 'domReady!'], function(Backbone, App, fonts){

      fonts.update();

      window.crowdadvisor = {};
      crowdadvisor.app = new App();
      crowdadvisor.app.initialize();
      Backbone.history.start();
    });

  });

});