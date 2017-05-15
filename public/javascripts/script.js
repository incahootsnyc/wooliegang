(function () {
	
	var woolieSize = 512;
	var containerHeight = $('body').height();
	var containerWidth = $('body').width();

	var $woolieContainer = $('<div class="woolie-container"></div>');
	var $woolie = $('<div class="woolie uno"></div>');
	var $floatContainer = $('.float-body');

	$woolieContainer.css('top', '-' + woolieSize + 'px');
	$woolieContainer.css('left', '-' + woolieSize + 'px');
	
	$woolieContainer.append($woolie);
	$floatContainer.append($woolieContainer);

	setTimeout(function () {
		$woolieContainer.css('transform', 'translate(' + 
			(containerWidth+woolieSize) + 'px, ' + (containerHeight+woolieSize) + 'px)');
	}, 1000);
})();