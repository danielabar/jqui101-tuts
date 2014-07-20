'use strict';

(function() {

  var data = ['Apples', 'Oranges', 'bananas', 'pears', 'peaches', 'Sstarfruit', 'Grapes'];

  // Customize position of autocomplete list
  $('#auto1').autocomplete({
    source: data,
    position: {
      my: 'left top',
      at: 'right top'
    }
  });

  // Position utility used with custom code (not a prebuilt widget)
  // In this case, we are positioning myElement relative to someOtherElement
  $('#myElement').position({
    of: '#someOtherElement',
    my: 'left bottom',
    at: 'right top'
  });

})();