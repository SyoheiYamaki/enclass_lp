$(function() {
  let shapeTop1 = parseInt($('.js-shape-parallax-1').css('top'));
  let shapeTop2 = parseInt($('.js-shape-parallax-2').css('top'));
  let shapeTop3 = parseInt($('.js-shape-parallax-3').css('top'));
  let shapeTop4 = parseInt($('.js-shape-parallax-4').css('top'));
  let shapeTop5 = parseInt($('.js-shape-parallax-5').css('top'));
  let shapeTop6 = parseInt($('.js-shape-parallax-6').css('top'));
  let shapeTop7 = parseInt($('.js-shape-parallax-7').css('top'));
  let shapeTop8 = parseInt($('.js-shape-parallax-8').css('top'));
  let shapeTop9 = parseInt($('.js-shape-parallax-9').css('top'));
  let shapeTop10 = parseInt($('.js-shape-parallax-10').css('top'));
  let shapeTop11 = parseInt($('.js-shape-parallax-11').css('top'));
  let shapeTop12 = parseInt($('.js-shape-parallax-12').css('top'));
  
  $(window).on('scroll', function() {
    let scrollValue = $(this).scrollTop();
    let scrollValue4 =  scrollValue / 4;
    let scrollValue5 =  scrollValue / 5;
    $('.js-shape-parallax-1').css('top', shapeTop1 + scrollValue5);
    $('.js-shape-parallax-2').css('top', shapeTop2 + scrollValue4);
    $('.js-shape-parallax-3').css('top', shapeTop3 + scrollValue5);
    $('.js-shape-parallax-4').css('top', shapeTop4 + scrollValue5);
    $('.js-shape-parallax-5').css('top', shapeTop5 + scrollValue5);
    $('.js-shape-parallax-6').css('top', shapeTop6 + scrollValue5);
    $('.js-shape-parallax-7').css('top', shapeTop7 + scrollValue5);
    $('.js-shape-parallax-10').css('top', shapeTop10 + scrollValue5);
    $('.js-shape-parallax-11').css('top', shapeTop11 + scrollValue4);
    $('.js-shape-parallax-12').css('top', shapeTop12 + scrollValue5);
  });
});