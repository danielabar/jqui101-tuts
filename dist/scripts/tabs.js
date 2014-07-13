'use strict';

(function() {

  // Initialize the tabs component with default settings
  var tabsElement = $('#tabs');
  tabsElement.tabs();

  // Change tabs option hide animation effect
  $('#changeAnimation').on('click', function() {
    tabsElement.tabs('option', 'hide', 'explode');
  });

})();