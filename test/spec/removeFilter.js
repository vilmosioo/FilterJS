'use strict';

describe('Method: removeFilter', function(){

	var f;

	beforeEach(function(){
		f = new FilterJS();
	});

	it('should remove a hook from a filter', function(){
		var cb = function(data){
			return data;
		};

		f.addFilter('filter1', cb);
		expect(f.hooks['filter1']).toHaveLengthOf(1);
		f.removeFilter('filter1', cb);
		expect(f.hooks['filter1']).toHaveLengthOf(0);
	});

	it('should remove an array of hooks from a filter', function(){
		var hooks = [function(data){
			return data;
		}, function(data){
			return data;
		}];

		f.addFilter('filter1', hooks);
		expect(f.hooks['filter1']).toHaveLengthOf(hooks.length);
		f.removeFilter('filter1', hooks);
		expect(f.hooks['filter1']).toHaveLengthOf(0);
	});
});