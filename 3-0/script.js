$(document).ready(function() {
	$('.list-group-items').click(function() {
		$(this).find('span', function(span) {
			var num = Number($(this).html());
			num--;
			if (num <= 0) {
				num = '';
			}
			$(this).html = num;	
		})
	});
});