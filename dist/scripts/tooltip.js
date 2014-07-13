'use strict';

(function() {

  // Default
  $('#image1').tooltip();

  // Use alt attribute instead of default title
  $('#image2').tooltip({
    items: '#image2',
    content: function() {
      return $(this).attr('alt');
    }
  });

  // Track mouse position
  $('#image3').tooltip({
    items: '#image3',
    content: function() {
      return $(this).attr('alt');
    },
    track: true
  });

})();