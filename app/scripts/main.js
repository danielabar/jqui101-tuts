'use strict';

(function() {

  var wrap = $('#main-view');
  var subheader = $('#sub-header');

  var loadHtml = function(element, path) {
    return element.load(path).promise();
  };

  var loadScript = function(path) {
    return $.getScript(path).promise();
  };

  $('#accordionLink').on('click', function(e) {
    loadHtml(wrap, 'partials/accordion.html').done(function() {
      subheader.text('The Accordion Widget');
      loadScript('scripts/accordion.js');
    });
    e.preventDefault();
  });

  $('#tabsLink').on('click', function(e) {
    loadHtml(wrap, 'partials/tabs.html').done(function() {
      subheader.text('The Tabs Widget');
      loadScript('scripts/tabs.js');
    });
    e.preventDefault();
  });

})();