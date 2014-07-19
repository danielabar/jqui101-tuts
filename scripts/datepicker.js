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
  });

  // Week of eyar
  $('#date4').datepicker({
    showWeek: true
  });

  // Show other months
  $('#date5').datepicker({
    showOtherMonths: true
  });

  // Append Text
  $('#date6').datepicker({
    appendText: 'dd/mm/yyyy'
  });

  // Button Trigger
  $('#date7').datepicker({
    buttonImage: $('#calImg').attr('src'),
    buttonImageOnly: true,
    buttonText: 'Open the datepicker',
    showOn: 'both'
  });

  // Date Format
  $('#date8').datepicker({
    dateFormat: 'dd/mm/yy'
  });

  // Before Show Day Event
  $('#date9').datepicker({
    // This function must return an array
    // First element in array is true/false whether date is selectable
    // Second element in array is optional css class to add to date element
    // Third element in array is text that will be displayed as tooltip when unselectable date is hovered over
    beforeShowDay: function(date) {
      var dateSplit = date.toString().split(' ');
      // Make first Monday of each month not selectable
      if (dateSplit[0] === 'Mon' && dateSplit[2] < 7) {
        return [false, 'disabled', 'You cannot pick first monday of the month!'];
      } else {
        return [true];
      }
    }
  });

})();