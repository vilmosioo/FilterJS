'use strict';

describe('Method: removeFilter', function(){

	var f;

	beforeEach(function(){
		f = new FilterJS();
	});

	it('should remove a listener from a filter', function(){
		var cb = function(data){
			return data;
		};

		f.addFilter('filter1', cb);
		expect(f.listeners['filter1']).toHaveLengthOf(1);
		f.removeFilter('filter1', cb);
		expect(f.listeners['filter1']).toHaveLengthOf(0);
	});

	it('should remove an array of listeners from a filter', function(){
		var listeners = [function(data){
			return data;
		}, function(data){
			return data;
		}];

		f.addFilter('filter1', listeners);
		expect(f.listeners['filter1']).toHaveLengthOf(listeners.length);
		f.removeFilter('filter1', listeners);
		expect(f.listeners['filter1']).toHaveLengthOf(0);
	});
});