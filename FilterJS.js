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

'use strict';

(function(root){
	var FilterJS = root.FilterJS || function(){},
		proto = FilterJS.prototype;

	proto.version = '0.0.0';

	// CommonJS
	if (typeof exports === 'object' && module){
		module.exports = new FilterJS();
		// AMD
	} else if (typeof define === 'function' && define.amd){
		define(FilterJS);
		// Browser
	}

	root.FilterJS = FilterJS;
})( (typeof window === 'object' && window ) || this);