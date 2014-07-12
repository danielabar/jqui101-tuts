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

  var loadContent = function(assets, heading) {
    loadHtml(wrap, assets.htmlLoc).done(function() {
      wrap.hide();
      subheader.text(heading);
      wrap.fadeIn();
      loadScript(assets.jsLoc);
    });
  };

  $('.dynamicLinks a').on('click', function() {
    var $this = $(this);
    var assets = assetLocation($this.attr('href').slice(1));
    var heading = $this.data('heading');
    loadContent(assets, heading);
  });

  window.onload = function() {
    var locationHash = location.hash || '#intro';
    var assets = assetLocation(locationHash.slice(1));
    var heading = $('a[href=\'' + locationHash + '\']').data('heading');
    loadContent(assets, heading);
  };

})();