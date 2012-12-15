jQuery(document).ready(function($) {

	setupPositionSlide();

	var slides = $('.container-slider__slide');
	$('.ui-sr-arrow').click(function(e) {
		slideSwitchForth();
		e.preventDefault();
	});

	$('.ui-sl-arrow').click(function(e) {
		slideSwitchBack();
		e.preventDefault();
	});

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
  var $active = $('.container-slider__slide.showed');
  var $next =  $active.next().length ? $active.next() : $('.container-slider__slide:first');
	$active.fadeOut(function() {
		$(this).removeClass('showed');
		$next.fadeIn().addClass('showed').find('.ui-caption-img').hide().delay(200).slideDown();
		countSlide($next.data('position'));
	});
}

function slideSwitchBack() {
  var $active = $('.container-slider__slide.showed');
  var $prev =  $active.prev().length ? $active.prev() : $('.container-slider__slide:last');
	$active.fadeOut(function() {
		$(this).removeClass('showed');
		$prev.fadeIn().addClass('showed').find('.ui-caption-img').hide().delay(200).slideDown();
		countSlide($prev.data('position'));
	});
}


});
