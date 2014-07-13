'use strict';

$(function() {

  // Default settings
  $('#accordion-default').accordion();

  // Make second panel open
  $('#accordion-second').accordion({
    active: 1
  });

  // No animation
  $('#accordion-noanimate').accordion({
    animate: false
  });

  // Animation Duration
  $('#accordion-duration').accordion({
    animate: 1000
  });

  // Animation Easing
  $('#accordion-easing').accordion({
    animate: 'easeOutBounce'
  });

  // Easing Down
  $('#easing-down').accordion({
    animate: {
      easing: 'linear',
      duration: 100,
      down: {
        easing: 'easeOutBounce',
        duration: 300
      }
    }
  });

  // Collapsible
  $('#accordion-collapsible').accordion({

  });

});