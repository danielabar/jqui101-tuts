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

  // Incremental Function
  $('#spin5').spinner({
    incremental: function(spinNumber) {
      var currentStep = $('#spin5').spinner('option', 'step');
      return currentStep * spinNumber;
    }
  });

  // Page Up - move up by 50
  $('#spin6').spinner({
    page: 5,
    step: 10
  });
  $('#doPageUp').on('click', function() {
    $('#spin6').spinner('pageUp');
  });

})();