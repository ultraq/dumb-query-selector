
Dumb Query Selector
===================

[![Build Status](https://travis-ci.org/ultraq/dumb-query-selector.svg?branch=master)](https://travis-ci.org/ultraq/dumb-query-selector)
[![Coverage Status](https://coveralls.io/repos/github/ultraq/dumb-query-selector/badge.svg?branch=master)](https://coveralls.io/github/ultraq/dumb-query-selector?branch=master)
[![GitHub Release](https://img.shields.io/github/release/ultraq/dumb-query-selector.svg?maxAge=3600)](https://github.com/ultraq/dumb-query-selector/releases/latest)
[![License](https://img.shields.io/github/license/ultraq/dumb-query-selector.svg?maxAge=2592000)](https://github.com/ultraq/dumb-query-selector/blob/master/LICENSE.txt)

Shortcuts to the `querySelector(All)` functions, the `(All)` instead returning
an array of nodes (because `NodeList`s are dumb).


Installation
------------

Via Bower:

```
bower install dumb-query-selector --save
```

Via NPM:

```
npm install dumb-query-selector --save
```

Since this project is only 1 script, you can also download the script to your
project if you prefer: [dumb-query-selector.js](https://raw.githubusercontent.com/ultraq/dumb-query-selector/master/dumb-query-selector.js).


Usage
-----

This project exports 2 functions via [UMD](https://github.com/umdjs/umd), `$`
and `$$`, and is available to you through a variety of different module loaders.
If used in the browser outside of a module environment, then both functions are
available globally.

The first, `$`, returns a single node, whereas `$$` returns an array of nodes.

```javascript
import {$, $$} from 'dumb-query-selector';

// Return matching element, use it directly
let result = $('#some-id');
let blah = result.getAttribute('data-blah');

// Return array of matching elements, allowing the use of array functions
let results = $$('.some-classes');
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
