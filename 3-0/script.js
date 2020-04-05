$(document).ready(function() {
	$('.list-group-item').click(function() {
		$(this).each(function(span) {
			var num = Number($(this).find('span').html());
			num--;
			if (num <= 0) {
				num = '';
			}
			$(this).find('span').html(num);
		})
	});
});