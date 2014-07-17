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
    collapsible: true
  });

  // Event Mouseover
  $('#accordion-mouseover').accordion({
    event: 'mouseover'
  });

  // Icons
  $('#accordion-icons').accordion({
    icons: {
      header: 'ui-icon-circle-arrow-e',
      activeHeader: 'ui-icon-circle-arrow-s'
    }
  });

  // Hidestyle
  $('#accordion-hidestyle').accordion({
    hidestyle: 'content'
  });

  // Disable/Enable Method
  $('#accordion-disable').accordion({});
  $('#disable-accordion').on('click', function() {
    $('#accordion-disable').accordion('disable');
  });
  $('#enable-accordion').on('click', function() {
    $('#accordion-disable').accordion('enable');
  });

  // Create Event
  $('#accordion-create-event').accordion({
    create: function() {
      console.log('Accordion create event fired!');
    }
  });

});