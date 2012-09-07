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
      'libs/modernizr': {
        exports: 'Modernizr'
      },
      'fonts/cufon': {
        exports: 'Cufon'
      },
      'fonts/Bebas_400': {
        deps: ['fonts/cufon'],
        exports: 'Cufon'
      }
    }
    // test other locales easily...
    /*
    ,config: {
      i18n: {
        locale: 'fr-fr'
      }
    }*/
  });

  require(['config/config', 'libs/backbone', 'utils/console'], function(config){

    document.title = config.appTitle;

    require(['libs/backbone', 'application/App', 'fonts/fonts', 'domReady!', 'libs/modernizr'], function(Backbone, App, fonts){

      fonts.update();

      window.crowdadvisor = {};
      crowdadvisor.app = new App();
      crowdadvisor.app.initialize();
      Backbone.history.start();
    });

  });

});