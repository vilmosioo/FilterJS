'use strict';

(function(root){

	var FilterJS = root.FilterJS = function(){},
		proto = FilterJS.prototype;

	proto.VERSION = '0.0.0';

	// export to multiple environments
	if (typeof define === 'function' && define.amd){
		// AMD
		define(function(){
			return FilterJS;
		});
	} else if (typeof module !== 'undefined' && module.exports){
		// Node
		module.exports = FilterJS;
	}

})(window);