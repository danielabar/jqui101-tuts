'use strict';

(function() {

  $('#menuDefault').menu();

  $('#menuManual').menu();

  // programmatically open a submenu
  var menuElement = $('#menuDefault');
  var thirdMenuItem = menuElement.find('li').eq(2);
  var menuEvent = ''; // Second arg to focus method is event, but we can just use the custom menu event
  $('#openSubmenu').on('click', function() {
    // Focus and expand on the last menu item
    // Notice use of method chaining to achieve this result
    menuElement.menu('focus', menuEvent, thirdMenuItem).menu('expand');
  });

})();