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
    'libs/modernizr': {
      exports: 'Modernizr'
    },
    'libs/bootstrap': {
      deps: ['jquery'],
      exports: 'jQuery.fn.modal'
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

define(['launch'], function(Launch) {

  Launch.initialize();
    
});