jQuery(document).ready(function($) {
	var $catPath = $('.cat-path');
	var $widthCatPath = $catPath.width();
	var isSlideAnim = false;
	var $startWitdh = 51;                    

	$(window).trigger('resize');
	
	$catPath.width("0");
	
	startSlideshow();
	increseWidth();

	setupPositionSlide();
	
	$('.ui-sr-arrow').click(function(e) {
		slideSwitchForth();
		e.preventDefault();
	});

	$('.ui-sl-arrow').click(function(e) {
		slideSwitchBack();
		e.preventDefault();
	});

	$('.ui-scroll a').click(function(e) {
		$('.popup').fadeIn();
		e.preventDefault();
	});

	$('.popup_close').click(function(e) {
		$('.popup').fadeOut();
		e.preventDefault();
	});


function startSlideshow () {
	slideshow = setInterval(slideSwitchForth, 5000);
}

function increseWidth () {     
   setTimeout(function () {    
      $catPath.width($startWitdh);
      $startWitdh=$startWitdh+25;                     
      if ($startWitdh < $widthCatPath) {            
         increseWidth();       
      } else	{
      	$catPath.width("100%");
      }                       
   }, 300)
}

function setupPositionSlide () {
	var $allSlides = $('.container-slider__slide');
	$allSlides.each(function(e) {
		$(this).data('position', $(this).index()+1);
	});
	var $currentPosition = $('.container-slider__slide.showed').data("position");
	countSlide($currentPosition);
}

function countSlide ($currentPosition) {
	var $allSlides = $('.container-slider__slide').length;
	var $html = $currentPosition+"/"+$allSlides;
	$('.ui-lister__count').html($html);
}

function slideSwitchForth() {
	if(isSlideAnim) { return; }
  isSlideAnim = true;

  var $active = $('.container-slider__slide.showed');
  var $next =  $active.next().length ? $active.next() : $('.container-slider__slide:first');
	$active.fadeOut(1000,function() {
		$(this).removeClass('showed');
		isSlideAnim = false;
	});
	$next.fadeIn(1000).addClass('showed').find('.ui-caption-img').hide().delay(500).slideDown();
	countSlide($next.data('position'));
	clearInterval(slideshow);
	startSlideshow();
}

function slideSwitchBack() {

	if(isSlideAnim) { return; }
  isSlideAnim = true;


  var $active = $('.container-slider__slide.showed');
  var $prev =  $active.prev().length ? $active.prev() : $('.container-slider__slide:last');
	$active.fadeOut(1000, function() {
		$(this).removeClass('showed');
		isSlideAnim = false;
	});
	$prev.fadeIn(1000).addClass('showed').find('.ui-caption-img').hide().delay(500).slideDown();
	countSlide($prev.data('position'));
}


});