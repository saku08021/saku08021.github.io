$(document).ready(function() {
  $('.skill').click(function() {
    var target = $(this).data('target');
    $('.detail-content').removeClass('active');
    $('#' + target).addClass('active');
    $('html, body').animate({
      scrollTop: $('#details').offset().top
    }, 500);
  });
});

