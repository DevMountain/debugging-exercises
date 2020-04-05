$(document).ready(function() {
	var checkInt = setInterval(function() {
		var perc = Number($('.progress-bar').attr('aria-valuenow'));
		perc += (100-perc)/2;
		if (perc > 99.99) {
			clearInterval(checkInt);
			$('.alert').show();
			return;
		}
		$('.progress-bar').attr('aria-valuenow', ''+perc);
		$('.progress-bar').css('width', perc+'%');
	}, 750);
});
