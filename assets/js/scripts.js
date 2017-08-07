/** Menu Control **/
$(".cross").hide();
$(".menu").hide();

$(".hamburger").click(function() {
  $(".menu").slideToggle( "slow", function() {
    $(".hamburger").hide();
    $(".cross").show();
  });
});

$(".cross").click(function() {
  $(".menu").slideToggle( "slow", function() {
    $(".cross").hide();
    $(".hamburger").show();
  });
});

function isiPhone(){
  return (
    (navigator.platform.indexOf("iPhone") != -1) ||
    (navigator.platform.indexOf("iPod") != -1)
  );
}
if(isiPhone()){
  $('.hamburger').css({"position": "fixed", "top": "23px", "left": "-10px"});
  $('.cross').css({"position": "fixed", "top": "23px", "left": "-10px"});
  $('.parallax').css("background-attachment", "scroll");
}

$('a[href*="#"]:not([href="#"])').click(function() {
  if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
    var target = $(this.hash);
    target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
    if (target.length) {
      if ($(window).width() < 768) {
        $(".cross").click();
      }
      $('html, body').animate({
        scrollTop: target.offset().top
      }, 2000);
      return false;
    }
  }
});

function appropriateMenu() {
if ($(window).width() < 768) {
    $(".side-piece").hide();
    $(".get-scrolling").hide();
    $(".hamburger").show();
  } else {
    $(".side-piece").show();
    $(".get-scrolling").show();
    $(".hamburger").hide();
  }
}

$(document).ready(appropriateMenu);
$(window).resize(appropriateMenu);

var height = $(".parallax").outerHeight();

$(window).scroll(function(){
  if (($('.hamburger').is(":visible") || $('.cross').is(":visible"))) {
    if($(window).scrollTop() > (height-50)){
       $("header").addClass('backed');
    }
    else{
       $("header").removeClass('backed');
    }
  }
});

$(document).keyup(function(e) {
 if ((e.keyCode == 27)&& ($(".menu").is(":visible"))) {
    $(".cross").click();
  }
});

$(document).on('scroll', function() {
  if ($('.side-piece').length) {
    $('.side-piece a div').removeClass("current-section");
    if ($(window).scrollTop() + $(window).height() == $(document).height()) {
      $('.contact-section').addClass('current-section');
    } else if ($(this).scrollTop()>=$('#portfolio').position().top - 10) {
      $('.portfolio-section').addClass('current-section');
    } else if ($(this).scrollTop()>=$('#skills').position().top - 10) {
      $('.skills-section').addClass('current-section');
    } else if ($(this).scrollTop()>=$('#experience').position().top - 10) {
      $('.experience-section').addClass('current-section');
    } else if ($(this).scrollTop()>=$('#about').position().top - 10) {
      $('.about-section').addClass('current-section');
    }
  }
});

/** Scroll past parallax **/
$(".get-scrolling").click(function(){
  $('html, body').animate({ scrollTop: $(this).offset().top + 85 }, 2000);
  $(this).html('<i class="fa fa-angle-double-down fa-3x"></i>');
});

$(window).scroll(function() {
    var scroll = $(window).scrollTop();
    if (scroll >= $(".get-scrolling").offset().top + 85) {
        $(".side-piece").addClass("affix");
        $(".side-piece").removeClass("stay-put");
    } else {
      $(".side-piece").addClass("stay-put");
    }
});

/** Menu indicator color changes **/
$(".get-scrolling").mouseover(function(){
  $(".get-scrolling i").addClass('hover');
});
$(".get-scrolling").mouseout(function(){
  $(".get-scrolling i").removeClass('hover');
});

/** Tooltips **/
$('[data-toggle="tooltip"]').tooltip();

/** Portfolio Control **/
$('.portfolio-logo').click(function(){
  $('.portfolio-logo').removeClass("active");
  $(this).addClass("active");

  var classes = $('.active div').attr("class").split(' ');
  var currentItem = classes[1];
  var imageUrl = 'assets/images/portfolio/'+ currentItem +'.png';
  $('#portfolio-row').css('backgroundImage', 'url(\''+ imageUrl +'\')');
  $('.modal-body img').attr('src', imageUrl);
  $('.site-description').addClass('hidden');
  $('#' + currentItem).removeClass('hidden');
});