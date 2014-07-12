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

  $('.dynamicLink').on('click', function(e) {
    var $this = $(this);
    var asset = $this.data('asset');
    var htmlLoc = 'partials/' + asset + '.html';
    var jsLoc = 'scripts/' + asset + '.js';
    loadHtml(wrap, htmlLoc).done(function() {
      subheader.text($this.data('heading'));
      loadScript(jsLoc);
    });
    e.preventDefault();
  });

})();