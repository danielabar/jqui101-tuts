'use strict';

(function() {

  var interval;

  var progressBarEl = $('#progress1');

  progressBarEl.progressbar({
    complete: function() {
      clearInterval(interval);
      toastr.success('Activity finished!');
    }
  });

  $('#start').on('click', function() {
    var currentVal = progressBarEl.progressbar('value');
    var increasePercent = function() {
      currentVal = currentVal + 5;
      progressBarEl.progressbar('option', 'value', currentVal);
    };
    // This is just some nonsense to fake out stuff happening,
    // in a real app, this would be a file upload, or some other activity that takes a while
    if (!interval) {
      interval = setInterval(increasePercent, 50);
    }
  });

})();