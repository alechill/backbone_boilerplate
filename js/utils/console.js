define(function(){
  var cons = window.console;
  // Avoid `console` errors in browsers that lack a console.
  if (!(window.console && console.log)) {
    cons = (function() {
      var noop = function() {},
        methods = ['assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error', 'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log', 'markTimeline', 'profile', 'profileEnd', 'markTimeline', 'table', 'time', 'timeEnd', 'timeStamp', 'trace', 'warn'],
        length = methods.length,
        console = window.console = {};
      while (length--) {
        console[methods[length]] = noop;
      }
    }());
  }

  return cons;
});