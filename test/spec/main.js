'use strict';

describe('Library should be defined', function(){
	it('should be defined', function(){
		expect(FilterJS).toBeDefined();

		var f = new FilterJS();
		expect(f).toBeDefined();
		expect(f.addFilter).toBeDefined();
		expect(f.removeFilter).toBeDefined();
		expect(f.removeAllFilters).toBeDefined();
		expect(f.applyFilters).toBeDefined();

	});
});