'use strict';

describe('Core tests', function(){

	it('should be defined', function(){
		expect(FilterJS).toBeDefined();

		var f = new FilterJS();

		expect(f).toBeDefined();
		expect(f.hooks).toBeObject();
		expect(f.addFilter).toBeFunction();
		expect(f.removeFilter).toBeFunction();
		expect(f.removeAllFilters).toBeFunction();
		expect(f.applyFilters).toBeFunction();
	});

});