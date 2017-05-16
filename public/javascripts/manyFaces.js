(function () {

	var faceMap = {
		0: 'one',
		1: 'two',
		2: 'three',
		4: 'four',
		5: 'five',
		6: 'six',
		7: 'seven',
		8: 'eight',
		9: 'nine',
		10: 'ten',
		11: 'eleven',
		12: 'twelve',
		13: 'thirteen',
		14: 'fourteen',
		15: 'fifteen',
		16: 'sixteen',
		17: 'seventeen',
		18: 'eighteen',
		19: 'nineteen',
		20: 'twenty',
		21: 'twentyone',
		22: 'twentytwo'
	};

	var faceSize = 500;
	var faceCount = Object.keys(faceMap).length;
	var containerHeight = $('body').height();
	var containerWidth = $('body').width();
	var $floatContainer = $('.float-body');

	var horizontalSpots = Math.floor(containerWidth/faceSize);
	// var verticalSpots = Math.floor(containerHeight/faceSize);
	// var totalSpots = horizontalSpots * verticalSpots;
	var availableSpots = [];
	var left = 0;
	var top = 0;

	for (var i = 0; i < faceCount; i++) {
		var nextRow = i%horizontalSpots == 0;
		var $face = $('<div class="face one-f"></div>');

		if (nextRow && i > 0) {
			top = top+500;
			left = 0;
		} else {
			left = faceSize * i;
		}
		

		// availableSpots.push({
		// 	left: left,
		// 	top: top
		// });

		$face.css('top', top + 'px');
		$face.css('left', left + 'px');
		$floatContainer.append($face)
	}


})();