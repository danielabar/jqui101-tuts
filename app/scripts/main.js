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

  $('.dynamicLinks a').on('click', function() {
    var $this = $(this);
    var assets = assetLocation($this.attr('href').slice(1));
    loadHtml(wrap, assets.htmlLoc).done(function() {
      wrap.hide();
      subheader.text($this.data('heading'));
      wrap.fadeIn();
      loadScript(assets.jsLoc);
    });
  });

  window.onload = function() {
    var locationHash = location.hash || '#intro';
    var stripHash = locationHash.slice(1);
    var assets = assetLocation(stripHash);
    var selector = 'a[href=\'' + locationHash + '\']';
    var heading = $(selector).data('heading');
    loadHtml(wrap, assets.htmlLoc).done(function() {
      wrap.hide();
      subheader.text(heading);
      wrap.fadeIn();
      loadScript(assets.jsLoc);
    });
  };

})();