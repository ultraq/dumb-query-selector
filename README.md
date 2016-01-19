
Dumb Query Selector
===================

[![Build Status](https://travis-ci.org/ultraq/dumb-query-selector.svg?branch=master)](https://travis-ci.org/ultraq/dumb-query-selector)

Shortcuts to the `querySelector(All)` functions, the `(All)` instead returning
an array of nodes (because `NodeList`s are dumb).

 - Current version: 2.0.0
 - Released: 19 Jan 2016


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

This project exports 2 functions via [UMD](https://github.com/umdjs/umd), `$`
and `$$`, and is available to you through a variety of different module loaders.

The first, `$`, returns a single node, whereas `$$` returns an array of nodes.

```javascript
// ES6 example
import { $, $$ } from 'dumb-query-selector';

// Return matching element, use it directly
var result = $('#some-id');
var blah = result.getAttribute('data-blah');

// Return array of matching elements, allowing the use of array functions
var results = $('.some-classes');
results.forEach(result => {
// ...
});
```

Both functions take up to 2 arguments:

 - **query**
   Type: `String`  
   A standard CSS selector.

 - **scope**
   Type: `Node`  
   Optional context on which to invoke the function.  Defaults to `document` if
   not specified.


Changelog
---------

### 2.0.0
 - Now exports as 2 functions, `$` and `$$` to make it easier to know the return
   type.

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
