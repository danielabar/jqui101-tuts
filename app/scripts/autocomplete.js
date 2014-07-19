'use strict';

(function() {

  var data = ['Apples', 'Oranges', 'bananas', 'pears', 'peaches', 'Sstarfruit', 'Grapes'];

  // Default
  $('#auto1').autocomplete({
    source: data
  });

  // Auto Focus
  $('#auto2').autocomplete({
    source: data,
    autoFocus: true
  });

})();