'use strict';

describe('Library should be defined', function(){
	it('should be defined', function(){
		expect(FilterJS).toBeDefined();

		var f = new FilterJS();

		expect(f).toBeDefined();
		expect(f.addFilter).toBeFunction();
		expect(f.removeFilter).toBeFunction();
		expect(f.removeAllFilters).toBeFunction();
		expect(f.applyFilters).toBeFunction();

	});
});