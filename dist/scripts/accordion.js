'use strict';

$(function() {
  // panels are zero-based, active 1 means second panel will be visible
  $('#accordion').accordion({
    active: 1,
    animate: 500  // ms that default animation will run for, can also set to false to have no animation
  });
});