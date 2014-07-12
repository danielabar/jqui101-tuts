'use strict';

(function() {

  var wrap = $('#main-view');
  var subheader = $('#sub-header');

  var assetLocation = function(asset) {
    return {
      htmlLoc: 'partials/' + asset + '.html',
      jsLoc: 'scripts/' + asset + '.js'
    };
  };

  var loadHtml = function(element, path) {
    return element.load(path).promise();
  };

  var loadScript = function(path) {
    return $.getScript(path).promise();
  };

  $('.dynamicLink').on('click', function(e) {
    var $this = $(this);
    var assets = assetLocation($this.data('asset'));
    loadHtml(wrap, assets.htmlLoc).done(function() {
      wrap.hide();
      subheader.text($this.data('heading'));
      wrap.fadeIn();
      loadScript(assets.jsLoc);
    });
    e.preventDefault();
  });

})();