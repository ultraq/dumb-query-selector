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

import {$,$$} from '../dumb-query-selector.js';

import {assert} from 'chai';
import {jsdom}  from 'jsdom';

/**
 * Tests for the query selector.
 * 
 * @author Emanuel Rabina
 */
describe('DumbQuerySelector', function() {

	// Use JSDOM to mock a DOM environment
	before(function() {
		const DEFAULT_HTML = `
			<html>
			<body>
				<div id="test-sandbox">
					<div id="test-item1" class="test-item first"></div>
					<div id="test-item2" class="test-item"></div>
				</div>
			</body>
			</html>
		`;
		global.document = jsdom(DEFAULT_HTML);
	});


	describe('$', function() {
		it('Should return a single result', function() {
			let result = $('.test-item');
			assert.isNotNull(result);
			assert.isNotArray(result);
		});
	});


	describe('$$', function() {
		it('Should return an array', function() {
			let result = $$('.test-item');
			assert.isNotNull(result);
			assert.isArray(result);
			assert.strictEqual(result.length, 2);
		});

		it('Should return an empty array when there are no matches', function() {
			let result = $$('.lols');
			assert.isArray(result);
			assert.strictEqual(result.length, 0);
		});
	});
});
