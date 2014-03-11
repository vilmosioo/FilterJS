'use strict';

describe('Method: applyFilters', function(){

	it('should apply filters', function(){
		var f = new FilterJS(),
			cbs = [
				function(data){
					return data.substring(1);
				},
				function(data){
					return data + 'x';
				}
			],
			input = 'some string';

		f.addFilter('filter', cbs);

		var expected = input;
		for(var i = 0, l = cbs.length; i < l; i++){
			expected = cbs[i](expected);
		}

		expect(f.applyFilters('filter', input)).toEqual(expected);
	});

});