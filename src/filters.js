'use strict';

(function(root){
	// initialise variables
	var _filters = {};

	var _getFilter = function(name){
		if(!!name){
			if(!_filters.hasOwnProperty(name)){
				_filters[name] = [];
			}
			return _filters[name];
		}
		return _filters;
	};

	var _addFilter = function(name, cb){
		if(!!name){
			_getFilter(name).push(cb);
		}
	};

})( (typeof window === 'object' && window ) || this);