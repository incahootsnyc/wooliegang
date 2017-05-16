(function () {

	var woolieCount = 48;
	var woolieSize = 512;
	var containerHeight = $('body').height();
	var containerWidth = $('body').width();
	var woolieList = {};

	var woolieMap = {
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
		12: 'twelve'
	};

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
				y: woolieSize
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
				y: woolieSize
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
		},
		6: {
			start: {
				x: '-' + woolieSize,
				y: (containerHeight/16)
			},
			end: {
				x: (containerWidth+woolieSize),
				y: '-' + woolieSize
			}
		},
		7: {
			start: {
				x: containerWidth,
				y: (containerHeight/16)
			},
			end: {
				x: '-' + (containerWidth+woolieSize),
				y: '-' + woolieSize
			}
		}
	};

	var getRandomIntInclusive = function (min, max) {
		min = Math.ceil(min);
		max = Math.floor(max);
		return Math.floor(Math.random() * (max - min + 1)) + min;
	}

	var createWoolies = function (delay) {
		var timeout;
		var interval;
		// generate random woolie and trajectory
		var randomType = getRandomIntInclusive(0, Object.keys(woolieMap).length-1);
		var randomPath = getRandomIntInclusive(0, Object.keys(positionMap).length-1);
		var woolieType = woolieMap[randomType];
		var positionCoordinates = positionMap[randomPath];
		var woolieCombo = randomType.toString() + randomPath.toString();

		// make sure we don't generate woolie dupes
		if (woolieList[woolieCombo]) {
			createWoolies(delay);
			return false;
		} else {
			woolieList[woolieCombo] = true;
		}

		var $woolieContainer = $('<div class="woolie-container"></div>');
		var $woolie = $('<div class="woolie"></div>');
		var $floatContainer = $('.float-body');

		$woolieContainer.css('left', positionCoordinates.start.x + 'px');
		$woolieContainer.css('top', positionCoordinates.start.y + 'px');
		$woolie.addClass(woolieType);

		$woolieContainer.append($woolie);
		$floatContainer.append($woolieContainer);

		// check woolie position and remove when it has arrived in its final spot
		interval = setInterval(function () {
			var wooliePosition = $woolieContainer.position();
			var finalX = parseInt(positionCoordinates.end.x) + parseInt(positionCoordinates.start.x);
			var finalY = parseInt(positionCoordinates.end.y) + parseInt(positionCoordinates.start.y);
			// console.log(wooliePosition);
			if (wooliePosition.left >= finalX && 
				wooliePosition.top >= finalY) {
				$woolieContainer.remove();
				clearInterval(interval);
			}
		}, 1000);

		// set transform to start woolie movement
		timeout = setTimeout(function () {
			$woolieContainer.css('transform', 'translate(' + 
				positionCoordinates.end.x + 'px, ' + positionCoordinates.end.y + 'px)');
			clearTimeout(timeout);
		}, 500 * delay);

		return true;
	}

	// start woolie gang text growth
	$('h1').css('font-size', '32px');

	// generate woolies
	for (var i = woolieCount; i > 0; i--) {
		createWoolies(i + 1);
	}

	// console.log(woolieList);
	// console.log(Object.keys(woolieList).length);
	
})();