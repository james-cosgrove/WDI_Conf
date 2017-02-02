$(document).ready(function() {

  $(".front-box").mouseenter(function() {
    $(this).fadeOut();
  });

  $(".box-base").mouseleave(function() {
    $(".front-box").fadeIn();
  });

  $(function() {
    $('a[href*="#"]:not([href="#"]):not([href="#collapseOne"])').click(function() {
      if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
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

  var socket = io('https://shrouded-everglades-13835.herokuapp.com/');

  var sendMessage = function(){
    var message = $("#btn-input").val();
    console.log("message: " + message);
    socket.emit('chat message', message);
    $("#chatbox").append(
      '<li class="right clearfix"><span class="chat-img pull-right">' +
      '<img src="http://placehold.it/50/FA6F57/fff&text=ME" alt="User Avatar" class="img-circle" /></span>' +
      '<div class="chat-body clearfix">' +
      '<div class="header">' +
      '<small class=" text-muted"><span class="glyphicon glyphicon-time"></span></small>' +
      '<strong class="pull-right primary-font">User</strong></div>' +
      '<p>' + message + '</p></div></li>'
    );
    $("#btn-input").val("");
    return false;
  }

  $("#btn-chat").bind("click", sendMessage);

  $("#send-message").submit(sendMessage);

  socket.on('chat response', function(msg) {
    console.log("message back: " + msg);
    // $("#chatbox").append("<p>" + msg + "</p>");
    $("#chatbox").append(
      '<li class="left clearfix"><span class="chat-img pull-left">' +
          '<img src="http://placehold.it/50/55C1E7/fff&text=U" alt="User Avatar" class="img-circle" />' +
      '</span>' +
          '<div class="chat-body clearfix">' +
              '<div class="header">' +
                  '<strong class="primary-font">Bot</strong> <small class="pull-right text-muted">' +
                      '<span class="glyphicon glyphicon-time"></span></small>' +
              '</div>' +
              '<p>' + msg + '</p></div></li>'
    );
    $("#btn-input").val("");
  });

  function init() {
    window.addEventListener('scroll', function(e) {
      var distanceY = window.pageYOffset || document.documentElement.scrollTop;
      shrinkOn = 630;
      // var header = document.querySelector("#navbar-primary");
      if (distanceY > shrinkOn) {
        // $('#logo-text').slideUp(500);
        $('nav').addClass("smaller");
        // $('#logo-navbar-middle').hide();
      } else {
        $('nav').hasClass("smaller");
        $('nav').removeClass("smaller");
        // $('#logo-text').slideDown(500);
        // $('#logo-navbar-middle').show();
      }
    });
  }
  window.onload = init();
});
