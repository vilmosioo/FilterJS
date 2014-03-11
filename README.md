# FilterJS

A lightweight JavaScript library (4kb minified).

Filters grant access to internal data for other modules at runtime. It is inspired by WordPress's filters and it behaves in mostly the same way. It hooks functions to a specific filter. These filters can be applied to any content from any module. Hooks will transform the data in the order they were given.

## Installation

Using Bower:

    bower install FilterJS

Or grab the [source](https://github.com/vilmosioo/FilterJS/FilterJS.js) ([minified](https://github.com/vilmosioo/FilterJS/FilterJS.min.js)).

## Usage scenarios

There are many practical usages for this library. For instance, you can parse some JSON data retrieved via an AJAX call before using it. Or you can manage application-wide formatting options to strings. I would be interested to know how you can use it.

Basic usage is as follows:

    var f = new FilterJS();
    
    var callback = function(data){
        // do some transformations to data
        return data;
    };
    
    f.addFilter('filter', callback)


## API

Register a hook for a filter action.

    f.addFilter('filter', callback);
    f.addFilter('filter', [callback1, callback2]);

Remove a hook from a filter action.

    f.removeFilter('filter', callback);
    f.removeFilter('filter', [callback1, callback2]);

Remove all hooks from a filter action.

    f.removeAllFilters('filter');

Apply a filter to some data.

    f.applyFilters('filter', 'some data that needs to be transformed');
    f.applyFilters('filter', {data:'you can also filter any type of data: objects, array...'});

## Contributing

If you want to contribute, please make sure that you checked these things first:

* Provide a comprehensive suite of tests for your fork (preferably using Jasmine).
* Have a clear and documented rationale for your changes.
* Package these up in a pull request.

If you spot an issue please register it to let me know.

## License

MIT. See `LICENSE.txt` in this directory.