(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define("DumbQuerySelector", ["exports", "module"], factory);
  } else if (typeof exports !== "undefined" && typeof module !== "undefined") {
    factory(exports, module);
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, mod);
    global.DumbQuerySelector = mod.exports;
  }
})(this, function (exports, module) {
  "use strict";

  module.exports = $;

  var ID_SELECTOR_REGEX = /^#[a-zA-Z][\w-]*$/;

  function $(query) {
    var scope = arguments[1] === undefined ? document : arguments[1];

    return ID_SELECTOR_REGEX.test(query) ? document.getElementById(query.substring(1)) : Array.prototype.slice.call(scope.querySelectorAll(query));
  }
});