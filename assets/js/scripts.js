/** Menu Control **/
$( ".cross" ).hide();
$( ".menu" ).hide();

$( ".hamburger" ).click(function() {
  $( ".menu" ).slideToggle( "slow", function() {
    $( ".hamburger" ).hide();
    $( ".cross" ).show();
  });
});

$( ".cross" ).click(function() {
  $( ".menu" ).slideToggle( "slow", function() {
    $( ".cross" ).hide();
    $( ".hamburger" ).show();
  });
});

$('a[href*="#"]:not([href="#"])').click(function() {
  if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
    var target = $(this.hash);
    target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
    if (target.length) {
      $( ".cross" ).click();
      $('html, body').animate({
        scrollTop: target.offset().top
      }, 2000);
      return false;
    }
  }
});

/** Scroll past parallax **/
$(".get-scrolling").click(function(){
  $('html, body').animate({ scrollTop: $(this).offset().top }, 2000);
});


/** Surprise about image change **/
$('#ffxiv').mouseover(function(event){
  event.preventDefault();
  $('#about-image').attr('src', 'assets/images/about-balloon-alt.png');
});

$('#ffxiv').mouseout(function(event){
  event.preventDefault();
  $('#about-image').attr('src', 'assets/images/about-balloon.png');
});

/** Tooltips **/
$('[data-toggle="tooltip"]').tooltip();

/** Example image switcher **/
$('.example-image').mouseover(function(){
  var theClass = $(this).attr("class").match(/num-[\w-]*\b/).toString();
  var theNum = theClass.substring(theClass.length-1, theClass.length);
  $('.'+theClass).attr('src', 'assets/images/example-'+ theNum +'-alt.png');
});
$('.example-image').mouseout(function(){
  var theClass = $(this).attr("class").match(/num-[\w-]*\b/).toString();
  var theNum = theClass.substring(theClass.length-1, theClass.length);
  $('.'+theClass).attr('src', 'assets/images/example-'+ theNum +'.png');
});