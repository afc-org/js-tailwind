function fadeIn(id, duration) {
	id.animate([ { opacity: 0 }, { opacity: 1 } ], {
		duration: duration,
		easing: 'linear'
	});
}

function fadeOut(id, duration) {
	id.animate([ { opacity: 1 }, { opacity: 0 } ], {
		duration: duration,
		easing: 'linear'
	});
}

function zoomIn(id) {
	id.animate(
		[
			{
				opacity: 0,
				transform: 'translateY(20%) scale(.8)'
			},
			{
				opacity: 1,
				transform: 'translateY(0) scale(1)'
			}
		],
		{
			duration: 300,
			easing: 'linear'
		}
	);
}