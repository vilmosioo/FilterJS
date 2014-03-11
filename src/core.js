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
		this.hooks = {};
	};

	FilterJS.prototype = {
		/**
		 * Returns the callbacks assigned to a specific name.
		 * */
		getHooks: function(name){
			if(!this.hooks.hasOwnProperty(name) || !(this.hooks[name] instanceof Array)){
				this.hooks[name] = [];
			}
			return this.hooks[name];
		},
		/**
		 * Adds a callback for a specific filter. It can accept an array of callbacks.
		 * */
		addFilter: function(name, cb){
			var hooks = this.getHooks(name);

			if(cb instanceof Array){
				for(var i = 0, l = cb.length; i < l; i++){
					hooks.push(cb[i]);
				}
			} else {
				hooks.push(cb);
			}
		},
		/**
		 * Removes the specified callback from the specified filter. Can remove an array of callbacks.
		 * */
		removeFilter: function(name, cb){
			var listeners = this.getHooks(name);

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
		removeAllFilters: function(name){
			var hooks = this.getHooks(name);
			for(var i = 0, l = hooks.length; i < l; i++){
				this.removeFilter(name, hooks[i]);
			}
		},
		applyFilters: function(){}
	};

	return FilterJS;
});