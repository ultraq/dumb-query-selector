
Changelog
=========

### 3.2.0
 - Exclude `.babelrc` from published module so that dependants using the module
   build don't need to includ the es2015 babel preset when building.

### 3.1.0
 - Expose the source modules for ES6-aware module bundlers

### 3.0.0
 - Fixed the expected behaviour when used as without a module loader, which is
   to put `$` and `$$` on the global namespace.  That's a change for consumers
   though, so... major version bump!
 - Made this module available on npm: https://www.npmjs.com/package/dumb-query-selector

### 2.1.0
 - Included `main` entry in `package.json` so it can be used via npm.
 - Swapped out mocha-phantomjs for jsdom (didn't need full browser environment
   for tests anyway).

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
