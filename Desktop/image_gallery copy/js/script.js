$("document").ready(function() {
	$('ul#gallery li').on('mouseenter', function(){
		var title = $(this).children().data('title');
		var desc = $(this).children().data('desc');

		// Validation

		if(desc == null) {
			desc ='Click to Enlarge';
		}
		if(title == null) {
			title = ' ';
		}

		//Create Overlay Div
		$(this).append('<div class="overlay"></div>');

		// Get Overlay div

		var overlay = $(this).children('.overlay');

		// Add html to overlay

		overlay.html('<h3>' + title + '</h3><p>' + desc + '</p>');

		// fade in overlay
		overlay.fadeIn();

		// Mouseleave overlay

		$('ul#gallery li').on('mouseleave', function() {
			//Create Overlay Div
		$(this).append('<div class="overlay"></div>');

		// Get Overlay div

		var overlay = $(this).children('.overlay');

		// Fade Out Overlay
		overlay.fadeOut(500);

		})



	})
})