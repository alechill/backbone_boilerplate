define([
  'libs/handlebars', 
  'i18n!nls/lang'
], function(Handlebars, lang) {
  
  /**
    @description Creates a link, internal links will be #url
                 Usage: {{_link "Pie eating" "pie/eating" internal=true}} => <a href="#pie/eating">Pie eating</a>
    @param {String} text The text
    @param {String} url The url
    @param {Object} [options] Other options (ie {internal: true} )
    @return {String}
  */
  Handlebars.registerHelper('_link', function(text, url, options) {
    var link;
    text = Handlebars.Utils.escapeExpression(text);
    url  = Handlebars.Utils.escapeExpression(url);
    link = '<a href="' + (options.hash.internal ? '#' : '') + url + '">' + text + '</a>';
    return new Handlebars.SafeString(result);
  });

  /**
    @description Looks up translation via key, then substitutes any data into it using Handlebars syntax.
                 Usage: lang = { "hello": "Hello {{name}}!" }
                        {{_t "hello" name="world"}}
    @param {String} key The translation key
    @param {Object} data Any data to substitute (via normal Handlebars templating syntax)
    @return {String}
  */
  Handlebars.registerHelper('_t', function(key, data) {
    var translation = lang[key] || key,
        tmpl = Handlebars.compile(translation);
    return tmpl(data.hash);
  });

  return Handlebars;

});