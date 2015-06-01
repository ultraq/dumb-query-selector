
// Regular expression for a single ID query
const ID_SELECTOR_REGEX = /^#[a-zA-Z][\w-]*$/;

/**
 * A unified query selector, returning either the matching element (for ID
 * queries) or an array of elements (for anything else) because `NodeList`s are
 * dumb.
 * 
 * @param {String} query
 * @param {Node} [scope] The scope to limit the search to for non-ID queries.
 *                       Defaults to document scope.
 * @return {Element|Array} The matching element (or `null` if no match is found)
 *                         or list of matching elements.
 * 
 * @author Emanuel Rabina
 */
export default function $(query, scope = document) {

	return ID_SELECTOR_REGEX.test(query) ?
		document.getElementById(query.substring(1)) :
		Array.prototype.slice.call(scope.querySelectorAll(query));
}
