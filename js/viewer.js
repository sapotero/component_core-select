"use strict";
!(function($, win, doc) {
  var $doc, $win;
  $doc = $(doc);
  $win = $(win);

  return win.Viewer = (function() {
    function Viewer(options) {
      var defaults = {
        div: 'canvas',
        model: {},
        smooth: false,
        svg: null
      };
      // this.opt = $.extend({}, defaults, options);
      // this.div = $('#' + this.opt.div);
      // this.wrapper = this.div.parent();
      // this.build_content();
      // this.controller();
    }

    Viewer.prototype.load = function() {
      console.log('load Viewer')
    };
    return Viewer;

  })();
})(jQuery, window, document);