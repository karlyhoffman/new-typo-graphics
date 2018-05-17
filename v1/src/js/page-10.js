(function ($, window, document, undefined) {
  'use strict';
  $(function () {

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
        $line  = $('.line-dec'),
        $about = $('#about'),
        $projects = $('#projects');


    $(window).on('load resize', function() {
      tl.pause(0).clear().restart();

      var windowWidth = $( window ).width();
      if ( windowWidth > 900 ) {

        tl.fromTo($nav, 0.75,
          { "opacity": "0" },
          { "opacity": "1", ease: Power1.easeOut }
        ).fromTo($line, 0.75,
          { "bottom": "100%" },
          { "bottom": "0", ease: Power1.easeOut }
        ).fromTo($about, 0.75,
          { marginTop: 150, "opacity": "0" },
          { marginTop: 0, "opacity": "1", ease: Power1.easeOut }
        ).fromTo($projects, 0.75,
          { marginTop: 10, "opacity": "0" },
          { marginTop: 0, "opacity": "1", ease: Power1.easeOut }
        );

      } else {

        tl.fromTo($nav, 0.75,
          { "opacity": "0" },
          { "opacity": "1", ease: Power1.easeOut }
        ).fromTo($about, 0.75,
          { "opacity": "0" },
          { "opacity": "1", ease: Power1.easeOut }
        ).fromTo($projects, 0.75,
          { "opacity": "0" },
          { "opacity": "1", ease: Power1.easeOut }
        );

      }
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
