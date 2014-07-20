'use strict';

test('Makes a dialog', function() {
  var $fixture = $( '#qunit-fixture' );
  $fixture.append( '<div id="dialog1">This is the content of the dialog</div>' );
  var config = {
    dialogElement: $fixture.find('#dialog1')
  };
  myAppNamespace.dialogService.init(config);
  myAppNamespace.dialogService.makeDialog();

  var actualText = $('.ui-dialog-content').text();
  equal(actualText, 'This is the content of the dialog', 'generates a dialog');
});