(function () {

	var woolieSize = 512;
	var containerHeight = $('body').height();
	var containerWidth = $('body').width();

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

	function getRandomIntInclusive (min, max) {
		min = Math.ceil(min);
		max = Math.floor(max);
		return Math.floor(Math.random() * (max - min + 1)) + min;
	}

	window.woolieGenerator = {

		create: function (delay) {
			var woolieType = woolieMap[getRandomIntInclusive(0, 11)];
			var positionCoordinates = positionMap[getRandomIntInclusive(0, 7)];

			var $woolieContainer = $('<div class="woolie-container"></div>');
			var $woolie = $('<div class="woolie"></div>');
			var $floatContainer = $('.float-body');

			$woolieContainer.css('left', positionCoordinates.start.x + 'px');
			$woolieContainer.css('top', positionCoordinates.start.y + 'px');
			$woolie.addClass(woolieType);

			$woolieContainer.append($woolie);
			$floatContainer.append($woolieContainer);

			setTimeout(function () {
				$woolieContainer.css('transform', 'translate(' + 
					positionCoordinates.end.x + 'px, ' + positionCoordinates.end.y + 'px)');
			}, 500 * delay);
		}

	}
	
})();