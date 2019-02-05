function makeFaces () {

	var faceMap = {
		0: 'one',
		1: 'two',
		2: 'three',
		3: 'four',
		4: 'five',
		5: 'six',
		6: 'seven',
		7: 'eight',
		8: 'nine',
		9: 'ten',
		10: 'eleven',
		11: 'twelve',
		12: 'thirteen',
		13: 'fourteen',
		14: 'fifteen',
		15: 'sixteen',
		16: 'seventeen',
		17: 'eighteen',
		18: 'nineteen',
		19: 'twenty',
		20: 'twentyone',
		21: 'twentytwo'
	};

	var faceSize = 125;
	var faces = {};
	var faceCount = Object.keys(faceMap).length;
	var containerWidth = $('body').width();
	var $floatContainer = $('.float-body');

	var horizontalSpots = Math.floor(containerWidth/faceSize);
	var left = 0;
	var top = 0;
	var rowCount = 0;

	var getRandomIntInclusive = function (min, max) {
		min = Math.ceil(min);
		max = Math.floor(max);
		return Math.floor(Math.random() * (max - min + 1)) + min;
	};

	var createRandomFace = function (index) {
		var nextRow = index%horizontalSpots == 0;
		var randomFaceIndex = getRandomIntInclusive(0, faceCount-1);
		var randomFace = faceMap[randomFaceIndex];
		var $face = $('<div class="face"></div>');

		// make sure we don't generate woolie dupes
		if (faces[randomFace]) {
			createRandomFace(index);
			return false;
		} else {
			faces[randomFace] = true;
		}

		if (nextRow && index > 0) {
			top = top + faceSize;
			left = 0;
			rowCount = 0
		} else {
			left = faceSize * rowCount;
		}
		
		$face.css('top', top + 'px');
		$face.css('left', left + 'px');
		$face.addClass(randomFace + '-f');
		$floatContainer.append($face);
		rowCount++;
	};

	$floatContainer.empty();

	for (var i = 0; i < faceCount; i++) {
		createRandomFace(i);
	}

}

makeFaces();

var button = document.getElementById('shuffle');
button.addEventListener('click', makeFaces);