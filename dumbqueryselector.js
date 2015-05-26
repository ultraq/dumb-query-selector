(function (global, factory) {
  if (typeof define === 'function' && define.amd) {
    define('DumbQuerySelector', ['exports', 'module'], factory);
  } else if (typeof exports !== 'undefined' && typeof module !== 'undefined') {
    factory(exports, module);
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, mod);
    global.DumbQuerySelector = mod.exports;
  }
})(this, function (exports, module) {
  'use strict';

  module.exports = $;

  function $(selector) {
    var scope = arguments[1] === undefined ? document : arguments[1];

    var id = !selector.contains(',') && (!selector.contains(' ') && selector.startsWith('#') || selector.contains(' ') && selector.substring(selector.lastIndexOf(' ')).contains('#'));

    return id ? scope.querySelector(selector) : Array.prototype.slice.call(scope.querySelectorAll(selector));
  }
});