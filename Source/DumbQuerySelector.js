/**
 * A collection of selector shortcuts.
 * 
 * @author Emanuel Rabina
 */

/**
 * An element selector and shortcut for `(document/element).querySelector`.
 * 
 * @param {String} query
 * @param {Node} [scope] The scope to limit the search to for non-ID queries.
 *   Defaults to document scope.
 * @return {Element} The matching element, or `null` if no match is found.
 */
export function $(query, scope = document) {

	return scope.querySelector(query);
}

/**
 * An element list selector, returning an array of elements because `NodeList`s
 * are dumb.
 *
 * @param {String} query
 * @param {Node} [scope] The scope to limit the search to for non-ID queries.
 *   Defaults to document scope.
 * @return {Array} The list of matching elements.
 */
export function $$(query, scope = document) {

	return Array.prototype.slice.call(scope.querySelectorAll(query));
}
