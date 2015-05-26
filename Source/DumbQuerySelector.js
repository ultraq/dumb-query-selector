/**
 * A unified query selector, determining which of the 2 native query selector
 * methods to use, and then mapping the result set to an array (if the query can
 * potentially be a list).
 * 
 * @param {String} selector
 * @param {Element} [scope] The scope to limit the search to.  Defaults to
 *                          document scope.
 * @return {Array} If `selector` is an ID selector, returns the single node if
 *                 a match is found, otherwise it returns an array of nodes
 *                 that match the given selector.
 * 
 * @author Emanuel Rabina
 */
export default function $(selector, scope = document) {

	// Determine whether we can use the first match or list selector
	var id = !selector.contains(',') &&
		((!selector.contains(' ') && selector.startsWith('#')) ||
		(selector.contains(' ') && selector.substring(selector.lastIndexOf(' ')).contains('#')));

	return id ? scope.querySelector(selector) :
		Array.prototype.slice.call(scope.querySelectorAll(selector));
}
