/**
 * Tests for the query selector.
 * 
 * @author Emanuel Rabina
 */
/* global describe, chai, DumbQuerySelector, it */
describe('DumbQuerySelector', function() {
	'use strict';	// eslint-disable-line

	var $ = DumbQuerySelector;
	var assert = chai.assert;


	describe('ID queries', function() {

		it('Should return a single result for an ID query', function() {
			var result = $('#test-box');
			assert.isNotNull(result, 'Could not locate #test-box element');
			assert.isNotArray(result);
		});
	});


	describe('List queries', function() {

		it('Should return a list for multiple ID queries', function() {
			var result = $('#test-box, #test-item1');
			assert.isArray(result);
		});

		it('Should return a list for class queries', function() {
			var result = $('.first');
			assert.isArray(result);
		});
	});
});
