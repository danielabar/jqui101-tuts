'use strict';

(function() {

  // Style anchor tag as button
  $('#button1').button();

  // Style input as button
  $('#button2').button();

  // Style button as button with configuration object to set icon
  // Primary puts icon before button label
  $('#button3').button({
    icons: {
      primary: 'ui-icon-plus'
    }
  });

  // Secondary puts icon after button label
  $('#button4').button({
    icons: {
      secondary: 'ui-icon-circle-plus'
    }
  });

  // Button with icon only -> set text to false
  // Tooltip will use text from button label in html
  $('#button5').button({
    text: false,
    icons: {
      primary: 'ui-icon-search'
    },
    create: function(e, ui) {
      console.dir(e);
      console.dir(ui);
    }
  });

  // Use jQuery attribute selector to select all checkboxes
  $('[type="checkbox"]').button();

  // Use buttonset to apply button styling to radio options
  $('#set').buttonset();

})();