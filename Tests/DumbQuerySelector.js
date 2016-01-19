/**
 * Tests for the query selector.
 * 
 * @author Emanuel Rabina
 */
/* global describe, chai, DumbQuerySelector, it */
describe('DumbQuerySelector', function() {
	'use strict';	// eslint-disable-line

	var assert = chai.assert;


	describe('$', function() {
		var $ = DumbQuerySelector.$;

		it('Should return a single result', function() {
			var result = $('.test-item');
			assert.isNotNull(result);
			assert.isNotArray(result);
		});
	});


	describe('$$', function() {
		var $$ = DumbQuerySelector.$$;

		it('Should return an array', function() {
			var result = $$('.test-item');
			assert.isNotNull(result);
			assert.isArray(result);
			assert.strictEqual(result.length, 2);
		});

		it('Should return an empty array when there are no matches', function() {
			var result = $$('.lols');
			assert.isArray(result);
			assert.strictEqual(result.length, 0);
		});
	});
});
