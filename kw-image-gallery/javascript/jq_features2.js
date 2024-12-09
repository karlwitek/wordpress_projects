jQuery(document).ready(function($) {

  // set gallery image to first slide image
  let firstImgSrc = $('.thumbsize').first().attr('src');

  $('#kwsg-gallery-large').attr('src', firstImgSrc);

  $('.thumbsize').on({
    "click" : function(event) {
      $('#kwsg-gallery-large').fadeOut(350);

      setTimeout(function() {
        $('#kwsg-gallery-large').attr('src', event.target.src);
        $('#kwsg-gallery-large').fadeIn(350);

      }, 350);
    },
    "mouseover": function(event) {
      $(this).addClass('scaleup');
    },
    "mouseout": function(event) {
      $(this).removeClass('scaleup');
    }
  });
});