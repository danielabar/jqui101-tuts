'use strict';

(function() {

  // Default
  $('#date1').datepicker();

  // Min Date
  $('#date2').datepicker({
    minDate: new Date()
  });

  // Change month/year
  $('#date3').datepicker({
    changeMonth: true,
    changeYear: true
  })

  // Week of eyar
  $('#date4').datepicker({
    showWeek: true
  });

  // Show other months
  $('#date5').datepicker({
    showOtherMonths: true
  });

})();