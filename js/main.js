require.config({
  //enforceDefine: true,
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

define(['bootstrap'], function(Bootstrap) {

  Bootstrap.initialize();
    
});