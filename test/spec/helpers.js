'use strict';

beforeEach(function() {

	var _class2type = {
		'[object Boolean]': 'boolean',
		'[object Number]': 'number',
		'[object String]': 'string',
		'[object Function]': 'function',
		'[object Array]': 'array',
		'[object Date]': 'date',
		'[object RegExp]': 'regexp',
		'[object Object]': 'object',
		'[object Error]': 'error'
	};

	var _type = function (obj) {
		if (obj === null) {
			return String(obj);
		}
		return typeof obj === 'object' || typeof obj === 'function' ? _class2type[toString.call(obj)] || 'object' : typeof obj;
	};

	this.addMatchers({
		toBeArray: function(){
			return _type(this.actual) === 'array';
		},
		toBeFunction: function(){
			return _type(this.actual) === 'function';
		},
		toBeObject: function(){
			return _type(this.actual) === 'object';
		},
		toHaveLengthOf: function(input){
			return this.actual.length === input;
		},
		toHaveKey: function(input){
			return this.actual.hasOwnProperty(input);
		}
	});
});