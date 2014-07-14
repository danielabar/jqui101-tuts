'use strict';

(function() {

  // Simple
  $('#dialog1').dialog();

  // Auto open false
  $('#dialog2').dialog({
    autoOpen: false
  });

  // A click handler is required to open dialog2
  $('#openDialog').on('click', function() {
    $('#dialog2').dialog('open');
  });

  // Modal
  $('#dialog3').dialog({
    autoOpen: false,
    modal: true
  });

  // Click handler to open modal dialog
  $('#openModalDialog').on('click', function() {
    $('#dialog3').dialog('open');
  });

  // With buttons
  $('#dialog4').dialog({
    autoOpen: false,
    buttons: {
      'Ok': function() {
        // this is scoped to dialog
        console.log('Ok button was clicked in the dialog');
        $(this).dialog('close');
      }
    }
  });

  // Click handler to open modal dialog
  $('#openButtonsDialog').on('click', function() {
    $('#dialog4').dialog('open');
  });

})();