
Changelog
=========

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