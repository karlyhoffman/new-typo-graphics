(function ($, window, document, undefined) {
  'use strict';
  $(function () {

    // Scroll reveal animations
    var controller = new ScrollMagic.Controller({
      globalSceneOptions: {
        reverse: false
      }
    });

    $( ".reveal" ).each(function( index, elem ) {
     var revealIn = TweenMax.fromTo(this, 0.4, { "opacity": "0", marginTop: 40 }, { "opacity": "1", marginTop:0, ease: Power0.easeNone });
     var revealScene = new ScrollMagic.Scene({triggerHook: "0.85", triggerElement: this}).setTween(revealIn).addTo(controller);
    });

  });
})(jQuery, window, document);
