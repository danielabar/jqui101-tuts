'use strict';

(function() {

  // Default
  $('#slider1').slider();

  // Vertical
  $('#slider2').slider({
    orientation: 'vertical'
  });

  // Value
  $('#slider3').slider({
    'value': 50
  });

  // Step
  $('#slider4').slider({
    'step': 10
  });

  // Values
  $('#slider5').slider({
    'values': [25, 75]
  });

  // Value Method
  $('#slider6').slider();
  $('#getValue').on('click', function() {
    var currentValue = $('#slider6').slider('value');
    toastr.info('Value Method Slider is: ' + currentValue);
  });
  $('#setValue').on('click', function() {
    $('#slider6').slider('value', 99);
    toastr.success('Value Method Slider changed to: ' + 99);
  });

  // Bind events to slider6 AFTER it has been initialized
  $('#slider6').on('slidecreate slidechange slidestart slidestop slide', function(e) {
    console.log('The event is: ' + e.type);
  });

})();