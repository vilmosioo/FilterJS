'use strict';

describe('Method: removeAllFilters', function(){

	var f;

	beforeEach(function(){
		f = new FilterJS();
	});

	it('should remove all hooks from a filter', function(){
		var cb = function(data){
			return data;
		};

		f.addFilter('filter1', cb);
		expect(f.hooks['filter1']).toHaveLengthOf(1);
		f.removeAllFilters('filter1');
		expect(f.hooks['filter1']).toHaveLengthOf(0);
	});

});