/*
 * jQuery liScrollToTop v 2.0
 *
 * Copyright 2012, Linnik Yura | MASS CODE
 * Free to use
 * 
 * September 2012
 */
(function($){
	$.fn.liScrollToTop = function(params){
		return this.each(function(){
			var scrollUp = $(this);
			scrollUp.hide();
			if ($(window).scrollTop() > 0) scrollUp.fadeIn("slow") //скорость анимации (появление)
			$(window).scroll(function() {
				if ($(window).scrollTop() <= 0) scrollUp.fadeOut("slow") //скорость анимации (растворение)
				else scrollUp.fadeIn("slow")
			});
			scrollUp.click(function() {
				$("html, body").animate({scrollTop: 0}, "slow") //скорость движения вверх slow/fast/normal
			})
		});
	};
})(jQuery);