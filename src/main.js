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