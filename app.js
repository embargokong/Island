var main = function() {
	var startNbr = 1;
	if ($('.active-page').parent().prev().length == 0){
		startNbr = Math.floor(1 + 10*Math.random());
	}
	$('.dot:nth-child(' + startNbr + ')').addClass('active-dot');
	$('.front-image:nth-child(' + startNbr + ')').addClass('active-image');

	$('.dot a').click(function() {
		var currentDot = $('.active-dot');
		currentDot.removeClass('active-dot');
		var nextDot = $(this).parent();
		nextDot.addClass('active-dot');
		var index = 0;
		for (i = nextDot; i.length > 0; i = i.prev()){
			index++;
		}
		var currentImage = $('.active-image');
		var nextImage = $('.front-image:nth-child(' + index + ')');
		
		/* $('.left-arrow, .right-arrow').hide(); */
		currentImage.removeClass('active-image');	
		nextImage.addClass('active-image');
		/* $('.left-arrow, .right-arrow').show(); */
	});
	$('.right-arrow').click(function(){
        var currentSlide = $('.active-image');
        var nextSlide = currentSlide.next();
        if (nextSlide.length == 0) {
            nextSlide = $('.front-image').first();   
        }
        
        var currentDot = $('.active-dot');
        var nextDot = currentDot.next();
        if (nextDot.length == 0) {
            nextDot = $('.dot').first();   
        }
        
        currentSlide.removeClass('active-image');
        nextSlide.addClass('active-image');
        
        currentDot.removeClass('active-dot');
        nextDot.addClass('active-dot');
    });
	$('.left-arrow').click(function(){
        var currentSlide = $('.active-image');
        var nextSlide = currentSlide.prev();
        if (nextSlide.length == 0) {
            nextSlide = $('.front-image').last();   
        }
        
        var currentDot = $('.active-dot');
        var nextDot = currentDot.prev();
        if (nextDot.length == 0) {
            nextDot = $('.dot').last();   
        }

        currentSlide.removeClass('active-image');
        nextSlide.addClass('active-image');
        
        currentDot.removeClass('active-dot');
        nextDot.addClass('active-dot');
    });
	$('.menu-trigger').click(function() {
		$('.menu').toggle();
	});
	$('.menu-close').click(function() {
		$('.menu').hide();
	});
}

$(document).ready(main);