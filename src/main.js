'use strict';

var FilterJS = function(){

	this.version = '0.0.0';

	var filters = new FilterJS.Filters();

	// Filter management
	this.addFilter = filters.addFilter;
};

// Export to multiple environments
if (typeof define === 'function' && define.amd){
	// AMD
	define(function(){
		return FilterJS;
	});
} else if (typeof module !== 'undefined' && module.exports){
	// Node
	module.exports = FilterJS;
}

window.FilterJS = FilterJS;