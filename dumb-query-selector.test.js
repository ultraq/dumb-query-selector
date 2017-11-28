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

/**
 * Tests for the query selector.
 * 
 * @author Emanuel Rabina
 */
describe('dumb-query-selector', function() {

	beforeAll(function() {
		document.body.insertAdjacentHTML('beforeend', `
			<div id="test-sandbox">
				<div id="test-item1" class="test-item first"></div>
				<div id="test-item2" class="test-item"></div>
			</div>
		`);
	});
	afterAll(function() {
		document.getElementById('test-sandbox').remove();
	});


	describe('$', function() {
		const {$} = require('./dumb-query-selector');

		test('Should return a single result', function() {
			let result = $('.test-item');
			expect(result).not.toBeNull();
			expect(result).not.toBeArray();
		});

		test('Custom scope', function() {
			let scope = document.getElementById('test-item2');
			let result = $('.test-item', scope);
			expect(result).toBeNull();
		});
	});


	describe('$$', function() {
		const {$$} = require('./dumb-query-selector');

		test('Should return an array', function() {
			let result = $$('.test-item');
			expect(result).not.toBeNull();
			expect(result).toBeArray();
			expect(result).toHaveLength(2);
		});

		test('Should return an empty array when there are no matches', function() {
			let result = $$('.lols');
			expect(result).toBeArray();
			expect(result).toHaveLength(0);
		});

		test('Custom scope', function() {
			let scope = document.getElementById('test-item2');
			let result = $$('div', scope);
			expect(result).toBeArray();
			expect(result).toHaveLength(0);
		});
	});

	// describe('Module loader tests', function() {
	//
	// 	test('CommonJS', function() {
	//		
	// 	});
	// });
});
