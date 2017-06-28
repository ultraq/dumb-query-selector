(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports);
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports);
    global.dumbQuerySelector = mod.exports;
  }
})(this, function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.$ = $;
  exports.$$ = $$;
  /* 
   * Copyright 2017, Emanuel Rabina (http://www.ultraq.net.nz/)
   * 
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   * 
   *     http://www.apache.org/licenses/LICENSE-2.0
   * 
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */

  /**
   * An element selector and shortcut for `(document/element).querySelector`.
   * 
   * @param {String} query
   * @param {Node} [scope=document]
   *   The scope to limit the search to for non-ID queries.  Defaults to `document`
   *   scope.
   * @return {Element} The matching element, or `null` if no match is found.
   */
  function $(query) {
    var scope = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : document;


    return scope.querySelector(query);
  }

  /**
   * An element list selector, returning an array of elements because
   * `NodeList`s are dumb.
   * 
   * @param {String} query
   * @param {Node} [scope=document]
   *   The scope to limit the search to for non-ID queries.  Defaults to `document`
   *   scope.
   * @return {Array} The list of matching elements.
   */
  function $$(query) {
    var scope = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : document;


    return Array.prototype.slice.call(scope.querySelectorAll(query));
  }
});
