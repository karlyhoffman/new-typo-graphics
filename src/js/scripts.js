(function ($, window, document, undefined) {
  'use strict';
  $(function () {

    /*** Page 10 Scripts ***/

    // Intro animations
    var tl_options = {
      delay: 0,
      stagger: 0,
      autoRemoveChildren: false,
      smoothChildTiming: false,
      repeat: 0,
      yoyo: false
    };

    var tl     = new TimelineMax(tl_options),
        $nav   = $('#navigation'),
        $about = $('#about'),
        $projects = $('#projects');

    tl.fromTo($nav, 0.75,
      { rotation: 0 },
      { rotation: -90, ease: Quad.easeInOut }
    ).fromTo($about, 0.75,
      { marginTop: 150, "opacity": "0" },
      { marginTop: 0, "opacity": "1", ease: Power1.easeOut }
    ).fromTo($projects, 0.75,
      { marginTop: 10, "opacity": "0" },
      { marginTop: 0, "opacity": "1", ease: Power1.easeOut }
    );

    // Scroll reveal animation
    var controller = new ScrollMagic.Controller({
      globalSceneOptions: {
        reverse: false
      }
    });

    $( ".reveal" ).each(function( index, elem ) {
     var revealIn = TweenMax.fromTo(this, 0.4, { "opacity": "0", marginTop: 40 }, { "opacity": "1", marginTop:0, ease: Power0.easeNone });
     var revealScene = new ScrollMagic.Scene({triggerHook: "0.85", triggerElement: this}).setTween(revealIn).addTo(controller);
    });


    // navbar scroll
    var navLinks = $('#navigation a');
    navLinks.click( function(e) {
        e.preventDefault();
        $('#projects, #work-history').removeClass('hover');
        var linkLocation = $(this).attr('href');
        var projectNum = $(this).attr('data-project');
        $('html, body').animate({
            scrollTop: $(linkLocation).offset().top - 75
        }, 400 ).promise().done(function(){
          if (projectNum !== "undefined") {
            var openModal = "#modal-toggle-" + projectNum;
            setTimeout(function () {
               $(openModal).prop("checked", !$(openModal).prop("checked"));
           }, 225);
          }
        });

        if (linkLocation === '#projects' || linkLocation === '#work-history') {
          $(linkLocation).addClass('hover').delay(600);
        }
    });

    $('#projects, #work-history').mouseover(function(){
      $(this).removeClass('hover');
    })

    // modal
    var modalTriggers = $('.trigger');
    modalTriggers.click( function(e) {
      e.preventDefault();
      var modal = '#' + $(this).attr('for');
      $(modal).prop("checked", !$(modal).prop("checked"));
    });

  });
})(jQuery, window, document);
