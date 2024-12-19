
$('.banner').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  dots: true,
  arrows: false,
});
$('.banner-bottom').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: false,
  dots: false,
  arrows: true,
});
$(document).ready(function(){
  $(".logo-partner").slick({
    slidesToShow: 5.5,
	slidesToScroll: 1,
	arrows: true,
  });
});

$(document).ready(function(){
  $(".logo-partner-mb").slick({
    slidesToShow: 1.4,
	slidesToScroll: 1,
	arrows: true,
  });
});

$(document).ready(function() {
    $( "#btn-menu" ).click(function() {
		$("nav").slideToggle();
   });
});
$(document).ready(function() {
    $( ".footer-mb2" ).click(function() {
		$(".footer-list").slideToggle();
   });
});