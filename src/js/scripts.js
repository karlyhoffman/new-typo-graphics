(function ($, window, document, undefined) {
  'use strict';
  $(function () {

    /*** Page 10 Scripts ***/

    // navbar scroll
    var navLinks = $('#navigation a');
    navLinks.click( function(e) {
        e.preventDefault();
        $('#projects, #work-history').removeClass('hover');
        var linkLocation = $(this).attr('href');
        $('html, body').animate({
            scrollTop: $(linkLocation).offset().top - 75
        }, 400);

        if (linkLocation === '#projects' || linkLocation === '#work-history') {
          $(linkLocation).addClass('hover').delay(600);
        }
    });

    $('#projects, #work-history').mouseover(function(){
      $(this).removeClass('hover');
    })

    // modal triggers
    var modalTriggers = $('.trigger');
    modalTriggers.click( function(e) {
      e.preventDefault();
      var modal = '#' + $(this).attr('for');
      $(modal).prop("checked", !$(modal).prop("checked"));
    });


    // next steps:
        // 1. add project modals
        // 2. open modals on nav click

  });
})(jQuery, window, document);
