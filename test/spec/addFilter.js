'use strict';

describe('Method: addFilter', function(){

	var f;

	beforeEach(function(){
		f = new FilterJS();
	});

	it('should add a listener to a filter', function(){
		f.addFilter('filter1', function(data){
			return data;
		});
		expect(f.listeners).toHaveKey('filter1');
		expect(f.listeners['filter1']).toHaveLengthOf(1);
	});

	it('should add an array of listeners to a filter', function(){
		var listeners = [function(data){
			return data;
		}, function(data){
			return data;
		}]

		f.addFilter('filter1', listeners);
		expect(f.listeners).toHaveKey('filter1');
		expect(f.listeners['filter1']).toHaveLengthOf(listeners.length);
	});

	it('should add listeners to a filter in order', function(){
		var listener = function(data){
			return data
		}, listeners = [function(data){
			return data;
		}, function(data){
			return data;
		}]

		f.addFilter('filter1', listener);
		expect(f.listeners).toHaveKey('filter1');
		expect(f.listeners['filter1']).toHaveLengthOf(1);

		f.addFilter('filter1', listeners);
		expect(f.listeners['filter1']).toHaveLengthOf(1 + listeners.length);
	})
});