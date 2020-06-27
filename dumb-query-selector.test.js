/* 
 * Copyright 2015, Emanuel Rabina (http://www.ultraq.net.nz/)
 * 
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 * 
 *     http://www.apache.org/licenses/LICENSE-2.0
 * 
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/* eslint-env es6, jest */
/* eslint-disable strict */
const {$, $$} = require('./dumb-query-selector.js');
const {JSDOM} = require('jsdom');

/**
 * Tests for the query selector.
 * 
 * @author Emanuel Rabina
 */
describe('dumb-query-selector', function() {

	describe('$', function() {

		test('Should return a single DOM node', function() {
			let doc = new JSDOM(`
				<div>
					<div id="test-item1" class="test-item"></div>
					<div id="test-item2" class="test-item"></div>
				</div>
			`).window.document;

			let result = $('.test-item', doc);
			expect(result.nodeType).toBe(Node.ELEMENT_NODE);
		});
	});

	describe('$$', function() {

		test('Should return an array', function() {
			let doc = new JSDOM(`
				<div>
					<div id="test-item1" class="test-item"></div>
					<div id="test-item2" class="test-item"></div>
				</div>
			`).window.document;
			let result = $$('.test-item', doc);
			expect(Array.isArray(result)).toBe(true);
			expect(result).toHaveLength(2);
		});

		test('Should return an empty array when there are no matches', function() {
			let result = $$('.lols');
			expect(Array.isArray(result)).toBe(true);
			expect(result).toHaveLength(0);
		});
	});
});
