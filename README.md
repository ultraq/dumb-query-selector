
Dumb Query Selector
===================

[![Build Status](https://travis-ci.org/ultraq/dumb-query-selector.svg?branch=master)](https://travis-ci.org/ultraq/dumb-query-selector)

A tiny selector function that returns either the matching element or an array of
elements (because `NodeList`s are dumb).

 - Current version: 1.1.0
 - Released: 1 June 2015


Installation
------------

Via Bower:

```
bower install dumb-query-selector
```

Or download the raw version of the compiled file,
[dumbqueryselector.js](https://github.com/ultraq/dumb-query-selector/blob/master/dumbqueryselector.js).


Usage
-----

This project exports a single function via [UMD](https://github.com/umdjs/umd),
so is available to you through a variety of different module loaders, either as
`DumbQuerySelector` or the name of the file.  (Often I alias the import to `$`,
so it's like using jQuery, but not :P  The examples below will use `$`.)

### $(query[, scope])

A unified query selector, returning either the matching element (for ID queries)
or an array of elements (for anything else).

```javascript
define('MyModule', ['DumbQuerySelector'], function($) {

  // Return matching element, use it directly
  var result = $('#some-id');
  var blah = result.getAttribute('data-blah');

  // Return array of matching elements, allowing the use of array functions
  var results = $('.some-classes');
  results.forEach(function(result) {
    // ...
  });
});
```

#### query

Type: `String`

Your standard CSS selector.  If it's determined that the selector is a simple ID
selector, then the return value will be the matching element (or `null` if no
match is found).

#### scope

Type: `Node`

Optional node at which to restrict the search to, when the query is not a simple
ID selector.  Defaults to `document` if not specified.


Changelog
---------

### 1.1.0
 - Speed improvements (use a regular expression to test for ID queries, use
   `document.getElementById` for ID queries).
 - Remove `String.prototype.contains` and `String.prototype.startsWith`
   polyfills as they are no longer necessary.
 - Added tests w/ Mocha, Chai, and CI via Travis.

### 1.0.2
 - Use the optional `scope` parameter for ID queries going down the `(scope).querySelector`
   path.

### 1.0.1
 - Include `String.prototype.contains` and `String.prototype.startsWith`
   polyfills for browsers that didn't support it.

### 1.0.0
 - Initial release as a standalone module (used to exist as a utility function
   inside my personal projects)
