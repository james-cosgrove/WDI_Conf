$(document).ready(function() {

  $(".front-box").mouseenter(function() {
    $(this).fadeOut();
  });

  $(".box-base").mouseleave(function() {
    $(".front-box").fadeIn();
  });

  $(function() {
    $('a[href*="#"]:not([href="#"])').click(function() {
      if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
        if (target.length) {
          $('html, body').animate({
            scrollTop: target.offset().top - 60
          }, 1000);
          return false;
        }
      }
    });
  });

  function init() {
    window.addEventListener('scroll', function(e) {
      var distanceY = window.pageYOffset || document.documentElement.scrollTop;
      shrinkOn = 630;
      // var header = document.querySelector("#navbar-primary");
      if (distanceY > shrinkOn) {
        $('nav').addClass("smaller");
        // $('#logo-navbar-middle').hide();
      } else {
        $('nav').hasClass("smaller");
        $('nav').removeClass("smaller");
        // $('#logo-navbar-middle').show();
      }
    });
  }
  window.onload = init();
});
