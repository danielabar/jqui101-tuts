'use strict';

// Not part of jQueryUI widgets, this is here to demonstrate qunit testing

/* jshint unused: false */
myAppNamespace.dialogService = (function() {

  var config;
  var dialogElement;

  return {
    init: function(config) {
      this.config = config;
      this.dialogElement = config.dialogElement;
    },
    makeDialog: function() {
      $(this.dialogElement).dialog();
    }
  };

}());