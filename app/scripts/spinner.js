'use strict';

(function() {

  // Default Settings
  $('#spin1').spinner();

  // Min and max
  $('#spin2').spinner({
    min: 0,
    max: 10
  });

  // Custom Icons
  $('#spin3').spinner({
    icons: {
      up: 'ui-icon-plus',
      down: 'ui-icon-minus'
    }
  });

  // Step
  $('#spin4').spinner({
    max: 100,
    step: 10
  });

})();