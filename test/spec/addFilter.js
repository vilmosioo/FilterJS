'use strict';

describe('Method: addFilter', function(){

	var f;

	beforeEach(function(){
		f = new FilterJS();
	});

	it('should add a hook to a filter', function(){
		f.addFilter('filter1', function(data){
			return data;
		});
		expect(f.hooks).toHaveKey('filter1');
		expect(f.hooks['filter1']).toHaveLengthOf(1);
	});

	it('should add an array of hooks to a filter', function(){
		var hooks = [function(data){
			return data;
		}, function(data){
			return data;
		}];

		f.addFilter('filter1', hooks);
		expect(f.hooks).toHaveKey('filter1');
		expect(f.hooks['filter1']).toHaveLengthOf(hooks.length);
	});

	it('should add hooks to a filter in order', function(){
		var listener = function(data){
			return data;
		}, hooks = [function(data){
			return data;
		}, function(data){
			return data;
		}];

		f.addFilter('filter1', listener);
		expect(f.hooks).toHaveKey('filter1');
		expect(f.hooks['filter1']).toHaveLengthOf(1);

		f.addFilter('filter1', hooks);
		expect(f.hooks['filter1']).toHaveLengthOf(1 + hooks.length);
	});
});