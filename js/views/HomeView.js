define([
  'jquery',
  'libs/underscore',
  'libs/backbone',
  'utils/handlebars',
  'text!templates/home.html',
  'i18n!nls/lang',
  'fonts/fonts'
], function($, _, Backbone, Handlebars, tmpl, lang, fonts){

  var HomeView = Backbone.View.extend({

    el: $('#app'),

    tmpl: function(data) {
      if (!this.compiledTmpl) {
        this.compiledTmpl = Handlebars.compile(tmpl);
      }
      return this.compiledTmpl( $.extend(data || {}, this.model ? this.model.toJSON() : {},  {lang: lang}) );
    },

    render: function(data){
      this.$el.html( this.tmpl(data) );
      fonts.update();
    }

  });

  return HomeView;

});