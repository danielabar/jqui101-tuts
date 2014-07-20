'use strict';

// Not part of jQueryUI widgets, this is here to demonstrate qunit testing
myAppNamespace.sumService = (function() {

  var sum;

  return {
    init: function() {
      sum = 0;
    },
    add: function() {
      sum = sum + 1;
      return sum;
    },
    reset: function() {
      sum = 0;
      return;
    }
  };

}());

myAppNamespace.sumService.init();