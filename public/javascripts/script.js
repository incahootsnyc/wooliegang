(function () {

	var woolieSize = 512;
	var containerHeight = $('body').height();
	var containerWidth = $('body').width();

	var positionMap = {
		0: {
			start: {
				x: '-' + woolieSize,
				y: '-' + woolieSize
			},
			end: {
				x: (containerWidth+woolieSize),
				y: (containerHeight+woolieSize)
			}
		},
		1: {
			start: {
				x: '-' + woolieSize,
				y: (containerHeight/4)
			},
			end: {
				x: (containerWidth+woolieSize),
				y: 0
			}
		},
		2: {
			start: {
				x: '-' + woolieSize,
				y: containerHeight
			},
			end: {
				x: (containerWidth+woolieSize),
				y: '-' + (containerHeight+woolieSize)
			}
		},
		3: {
			start: {
				x: containerWidth,
				y: '-' + woolieSize
			},
			end: {
				x: '-' + (containerWidth+woolieSize),
				y: (containerHeight+woolieSize)
			}
		},
		4: {
			start: {
				x: containerWidth,
				y: (containerHeight/4)
			},
			end: {
				x: '-' + (containerWidth+woolieSize),
				y: 0
			}
		},
		5: {
			start: {
				x: containerWidth,
				y: containerHeight
			},
			end: {
				x: '-' + (containerWidth+woolieSize),
				y: '-' + (containerHeight+woolieSize)
			}
		}
	};

	var startPosition = getRandomIntInclusive(0, 5);
	var positionCoordinates = positionMap[5];

	var $woolieContainer = $('<div class="woolie-container"></div>');
	var $woolie = $('<div class="woolie uno"></div>');
	var $floatContainer = $('.float-body');

	$woolieContainer.css('left', positionCoordinates.start.x + 'px');
	$woolieContainer.css('top', positionCoordinates.start.y + 'px');

	$woolieContainer.append($woolie);
	$floatContainer.append($woolieContainer);

	setTimeout(function () {
		$woolieContainer.css('transform', 'translate(' + 
			positionCoordinates.end.x + 'px, ' + positionCoordinates.end.y + 'px)');
	}, 1000);
})();

function getRandomIntInclusive(min, max) {
	min = Math.ceil(min);
	max = Math.floor(max);
	return Math.floor(Math.random() * (max - min + 1)) + min;
}