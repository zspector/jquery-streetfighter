$(document).ready(function (){
	var isMouseEnter = false;
	intro();

	$('.ryu').mouseenter(function (){
		isMouseEnter = true;
		$('.ryu-still').hide();
		$('.ryu-ready').show();
	})
	.mouseleave(function() {
		isMouseEnter = false;
		$('.ryu-ready').hide();
		$('.ryu-still').show();
	})
	.mousedown(function() {
		playHadouken();
		$('.ryu-ready').hide();
		$('.ryu-throwing').show();
		$('.hadouken').finish().show()
		.animate(
			{'left': '300px'},
			500,
			function() {
				$(this).hide();
				$(this).css('left', '-216px');
			}
		);
	})
	.mouseup(function() {
		$('.ryu-throwing').hide();
		$('.ryu-ready').show();
		//ryu goes back to his ready position
	});
	$(document).keydown(function(event) {
		if (event.keyCode === 88) {
			console.log('working');
			$('.ryu-still').hide();
			$('.ryu-ready').hide();
			$('.ryu-cool').show();
		}
	})
	.keyup(function(event) {
		if(event.keyCode === 88){
			console.log('up');
			if (isMouseEnter) {
				$('.ryu-cool').hide();
				$('.ryu-ready').show();
			} else {
				$('.ryu-cool').hide();
				$('.ryu-still').show();
			}
		}
	});
});

function playHadouken() {
	$('#hadouken-sound')[0].volume = 0.5;
	$('#hadouken-sound')[0].load();
	$('#hadouken-sound')[0].play();
}

function intro() {
	$('.ryu, .instructions').hide();
	$('.logo').fadeIn('slow');
	$('.logo').fadeOut('slow');
	$('.ryu, .instructions').delay(1000).fadeIn('slow');
}