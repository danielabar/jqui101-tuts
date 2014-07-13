'use strict';

(function() {

  $('#image1').tooltip();

  $('#image2').tooltip({
    items: '#image2',
    content: function() {
      return $(this).attr('alt');
    }
  });

})();