(function(root, factory){
	'use strict';

	// CommonJS
	if (typeof exports === 'object' && module){
		module.exports = factory();
		// AMD
	} else if (typeof define === 'function' && define.amd){
		define(factory);
	}

	// Browser
	root.FilterJS = factory();

})( (typeof window === 'object' && window ) || this, function(){
	'use strict';

	var FilterJS = function(){
		this.listeners = {};
	};

	FilterJS.prototype = {
		/**
		 * Returns the callbacks assigned to a specific name.
		 * */
		getListeners: function(name){
			if(!this.listeners.hasOwnProperty(name) || !(this.listeners[name] instanceof Array)){
				this.listeners[name] = [];
			}
			return this.listeners[name];
		},
		/**
		 * Adds a callback for a specific filter. It can accept an array of callbacks.
		 * */
		addFilter: function(name, cb){
			var listeners = this.getListeners(name);

			if(cb instanceof Array){
				for(var i = 0, l = cb.length; i < l; i++){
					listeners.push(cb[i]);
				}
			} else {
				listeners.push(cb);
			}
		},
		/**
		 * Removes the specified callback from the specified filter. Can remove an array of callbacks.
		 * */
		removeFilter: function(name, cb){
			var listeners = this.getListeners(name);

			if(cb instanceof Array){
				for(var i = 0, l = cb.length; i < l; i++){
					var index = listeners.indexOf(cb[i]);
					if(index !== -1){
						listeners.splice(index, 1);
					}
				}
			} else {
				var index = listeners.indexOf(cb);
				if(index !== -1){
					listeners.splice(index, 1);
				}
			}
		},
		removeAllFilters: function(){},
		applyFilters: function(){}
	};

	return FilterJS;
});