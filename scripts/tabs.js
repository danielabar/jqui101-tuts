'use strict';

(function() {

  // Initialize the tabs component with default settings
  var tabsElement = $('#tabs');
  tabsElement.tabs();

  // Change tabs option hide animation effect
  $('#changeAnimation').on('click', function() {
    tabsElement.tabs('option', 'hide', 'explode');
  });

  $('#changeEvent').on('click', function() {
    tabsElement.tabs('option', 'event', 'mouseover');
  });

  // Load the 4th tab (tab indicies are zero-based)
  $('#reloadRemote').on('click', function() {
    tabsElement.tabs('load', 3);
  });

})();